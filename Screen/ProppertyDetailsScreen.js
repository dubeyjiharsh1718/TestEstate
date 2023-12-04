import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Animated, Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Input, Button } from 'react-native-elements';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import Colors from "../constants/Colors";
import COLORS from '../assets/const/colors';
import Font from '../constants/Font';
import FontSize from '../constants/FontSize';
import Spacing from "../constants/Spacing";
import Lightbox from 'react-native-lightbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, { Marker } from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Modal } from 'react-native';
import Toast from 'react-native-toast-message';

const { width, height } = Dimensions.get('screen');

function PropertyDetailsScreen({ route, navigation }) {
  const { property } = route.params;
  const [scale, setScale] = useState(new Animated.Value(1));
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [istimePickerVisible, settimePickerVisibility] = useState(false);
   const [selectedtime, setSelectedtime] = useState(new Date());
  const [messageRequest, setMessageRequest] = useState('');
  const [messageError, setMessageError] = useState('');
  const [isrequestClicked, setrequestClicked] = useState(false);
  const timeString = selectedtime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const [time, ampm] = timeString.split(' ');

const handleRequestProperty = async () => {
  if (!messageRequest.trim()) {
    setMessageError('Please enter a message request.');
    return;
  }
  setrequestClicked(!isrequestClicked);
  try {
    const requestPropertiesString = await AsyncStorage.getItem('requestProperties');
    const requestProperties = JSON.parse(requestPropertiesString) || [];

    const requProperty = {
      image: property.image,
      title: property.name,
      price: property.price,
      location: property.location,
      visitDate: selectedDate.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' }),
      visitTime: selectedtime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      messageRequest: messageRequest,
    };
    requestProperties.push(requProperty);

    await AsyncStorage.setItem('requestProperties', JSON.stringify(requestProperties));

    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Visit Requested',
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });

    setMessageRequest('');

    // Close the modal after 2 seconds
    setTimeout(() => {
      setModalVisible(false);
    }, 2000);
  } catch (error) {
    console.error('Error saving property:', error);

    Toast.show({
      type: 'error',
      position: 'center',
      text1: 'Error sending request',
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
  }
};


  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    setDatePickerVisibility(false);
  };
  const handleTimeConfirm = (time) => {
    setSelectedtime(time);
    settimePickerVisibility(false);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const onImagePress = (imageUrl) => {
    navigation.navigate('ImageFullScreen', { imageUrl });
  };

  const onPinchEvent = Animated.event(
    [{ nativeEvent: { scale: scale } }],
    { useNativeDriver: false }
  );

  const onPinchStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  const handleSaveProperty = async () => {
    setIsHeartClicked(!isHeartClicked);
    try {
      const savedPropertiesString = await AsyncStorage.getItem('savedProperties');
      const savedProperties = JSON.parse(savedPropertiesString) || [];

      const newProperty = {
        image: property.image,
        title: property.name,
        price: property.price,
        location: property.location,
      };
      savedProperties.push(newProperty);

      await AsyncStorage.setItem('savedProperties', JSON.stringify(savedProperties));
    } catch (error) {
      console.error('Error saving property:', error);
    }
  };

  const [mapRegion, setMapRegion] = useState({
    latitude: parseFloat(-122.08400000000002),
    longitude: parseFloat(37.421998333333335),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <ScrollView style={styles.container}>
      <Swiper style={styles.imageContainer}>
        {property.allimages.map((allimages, index) => (
          <TouchableOpacity key={index} onPress={() => onImagePress(allimages)}>
            <Lightbox>
              <View style={styles.propertyImg}>
                <PinchGestureHandler
                  onGestureEvent={onPinchEvent}
                  onHandlerStateChange={onPinchStateChange}
                >
                  <Animated.View style={styles.propertyImg}>
                    <Animated.Image
                      source={allimages}
                      style={[
                        styles.propertyImage,
                        {
                          transform: [{ scale: scale }],
                        },
                      ]}
                    />
                  </Animated.View>
                </PinchGestureHandler>
              </View>
            </Lightbox>
          </TouchableOpacity>
        ))}
      </Swiper>
      <View style={{ alignItems: 'flex-end', marginTop: -20 }}>
        <TouchableOpacity onPress={handleSaveProperty}>
          {isHeartClicked ? (
            <FontAwesome
              name="heart"
              style={[styles.homedetailicon, { fontSize: 32, color: 'red' }]}
            />
          ) : (
            <Icon
              name="cards-heart-outline"
              style={[styles.homedetailicon, { fontSize: 32 }]}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.propertyPrice}>{property.price}</Text><Text style={{ marginTop: 10, marginLeft: 5, fontSize: 15, }}>monthly</Text></View>
      <View style={styles.iconRow}>
        <View style={styles.iconWithText}>
          <FontAwesome5 name="bed" style={styles.homedetailicon} />
          <Text style={styles.iconText}>3 Bedrooms</Text>
        </View>
        <View style={styles.iconWithText}>
          <FontAwesome5 name="utensils" style={styles.homedetailicon} />
          <Text style={styles.iconText}>2 Kitchens</Text>
        </View>
        <View style={styles.iconWithText}>
          <FontAwesome5 name="bath" style={styles.homedetailicon} />
          <Text style={styles.iconText}>2 Bathrooms</Text>
        </View>
        <View style={styles.iconWithText}>
          <FontAwesome5 name="parking" style={styles.homedetailicon} />
          <Text style={styles.iconText}>3 Parking</Text>
        </View>
      </View>
      <View style={styles.propertyInfo}>
        <Text style={styles.propertyName}>{property.name}</Text>
        <View style={styles.propertyRow}>
          <FontAwesome5 name="map-marker-alt" style={styles.locationIcon} />
          <Text style={styles.propertyValue}>{property.location}</Text>
        </View>
        <Text style={styles.propertyName}>Description:</Text>
        <Text style={styles.propertyDescriptionText}>{property.description}</Text>
        <Text style={[styles.propertyName, { marginTop: 10 }]}>Information</Text>
        <View style={styles.infowithivon}>
          <Icon name="checkbox-marked-circle-outline" style={[styles.homedetailicon, { marginRight: 10 }]} />
          <Text style={styles.propertyValue}>School 2km</Text>
        </View>
        <View style={styles.infowithivon}>
          <Icon name="checkbox-marked-circle-outline" style={[styles.homedetailicon, { marginRight: 10 }]} />
          <Text style={styles.propertyValue}>Hospital 1km</Text>
        </View>
        <View style={styles.infowithivon}>
          <Icon name="checkbox-marked-circle-outline" style={[styles.homedetailicon, { marginRight: 10 }]} />
          <Text style={styles.propertyValue}>GYM 300m</Text>
        </View>
        <View style={styles.infowithivon}>
          <Icon name="checkbox-marked-circle-outline" style={[styles.homedetailicon, { marginRight: 10 }]} />
          <Text style={styles.propertyValue}>Station 1km</Text>
        </View>
        <MapView
          style={{ flex: 1, height: 200, backgroundColor: COLORS.white, elevation: 10, marginTop: 20 }}
          region={mapRegion}
          onRegionChange={(region) => setMapRegion(region)}
        >
          <Marker
            coordinate={{
              latitude: parseFloat(37.421998333333335),
              longitude: parseFloat(-122.08400000000002),
            }}
            title="Your Location"
            description="You are here!"
          />
        </MapView>
      </View>

      <View style={styles.centerContainer}>
        <TouchableOpacity style={styles.signInButton} onPress={toggleModal}>
          <Text style={styles.signInText}>Request For Visit</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.5}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.overlay} />
        <View style={[styles.bottomSheetContent, { height: height * 0.4 }]}>
        <Text style={{ fontSize: 20, color: 'black' }}>
        Date for Visit -
        <Text style={{ color: Colors.heilightcolor }}>
          {selectedDate.getFullYear().toString()}
        </Text>
        <Text style={{ color: Colors.heilightcolor }}>
          {' ' + selectedDate.toLocaleDateString([], { month: 'short' })}
        </Text>
        <Text style={{ color: Colors.heilightcolor }}>
          {' ' + selectedDate.getDate().toString().padStart(2, '0')}
        </Text>
      </Text>

          <Text style={{ fontSize: 20, color: 'black' }}>
            Time for Visit - 
            <Text style={{ color: Colors.heilightcolor }}>
              {selectedtime.getHours().toString().padStart(2, '0')}
            </Text> : 
            <Text style={{ color: Colors.heilightcolor }}>
              {selectedtime.getMinutes().toString().padStart(2, '0')}
            </Text>
          </Text>

          <View style={{flexDirection: 'row',justifyContent: 'space-around',marginTop: 10,marginBottom: 10}}>
          <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
            <Text style={{ fontSize: 20, color: Colors.btn, }}>Select Date</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => settimePickerVisibility(true)}>
            <Text style={{ fontSize: 20, color: Colors.btn, }}>Select Time</Text>
          </TouchableOpacity></View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Input
              placeholder={'Send Message Request'}
              keyboardType="text"
              onChangeText={(text) => {
                setMessageRequest(text);
                setMessageError('');
              }}
              value={messageRequest}
              containerStyle={styles.inputContainer}
              leftIcon={<Icon name="chat-plus" size={24} style={{ color: Colors.heilightcolor }} />}
            />
          </View>
          {messageError ? <Text style={{ color: 'red', marginTop: -20, marginBottom: 20 }}>{messageError}</Text> : null}
          <View style={{ marginLeft: 30, }}>
            <Button
              title={'Send Request'}
              onPress={handleRequestProperty}
              buttonStyle={styles.closemodalButton}
            />
          </View>
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
      </Modal>
      <DateTimePickerModal
      isVisible={isDatePickerVisible}
      mode="date"
      onConfirm={handleDateConfirm}
      onCancel={() => setDatePickerVisibility(false)}
      />
       <DateTimePickerModal
      isVisible={istimePickerVisible}
      mode="time"
      onConfirm={handleTimeConfirm}
      onCancel={() => settimePickerVisibility(false)}
      headerTextButtonStyle={{ color: 'blue' }}  
      headerStyle={{ backgroundColor: 'lightgray' }}  
      modalStyle={{ backgroundColor: 'red' }} 
      confirmTextStyle={{ color: 'green' }} 
      cancelTextStyle={{ color: 'red' }}
      />
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },

  imageContainer: {
    marginTop: Spacing.medium,
    height: 220,
  },
  propertyImg: {
    width: '100%',
    alignItems: 'center',
    elevation: 3,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: 'white',
  },
  propertyImage: {
    marginTop: Spacing.small,
    width: '100%',
    height: 220,
    borderRadius: 5,
  },

  propertyInfo: {
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
  },
  propertyRow: {
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 10,
  },
  propertyValue: {
    fontSize: 16,
    color: 'black',
  },
  propertyPrice : {
    marginTop: 5,
    marginBottom:5,
    color:'black',
    fontSize: 19,
  },
  propertyName: {
    fontSize: 20,
    color: 'black',
  },
  centerContainer: {
    alignItems: "center",
    marginTop : 10,
    borderTopLeftRadius: 50, 
    borderTopRightRadius: 50,
    marginBottom: 30,
  },
  signInButton: {
    width: 350,
    padding: Spacing,
    backgroundColor: Colors.btn,
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing / 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: Spacing,
    elevation: 3,
    marginTop: 20, 
  },
  
  signInText: {
    fontFamily: Font["poppins-bold"],
    color: "white",
    textAlign: "center",
    fontSize: FontSize.large,
  },
  locationIcon: {
    fontSize: 16,
    marginRight: 5,
    color: Colors.heilightcolor,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 18,
    height: 70,
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  iconWithText: {
    alignItems: 'center',
    padding: 5, 
  },
  homedetailicon: {
    fontSize: 22,
    color: Colors.heilightcolor,
  },
  optionCardtopsearch: {
    height: 100,
    width: 100,
    elevation: 15,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 10,
    marginTop:20,
    marginRight: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
},
optionCardImagetop: {
  height: 80,
  borderRadius: 10,
  width: '100%',
},
optionListContainertop: {
  flexDirection: 'row',
paddingHorizontal: 20,
},
infowithivon:{
  flexDirection: 'row',
},
mapimg:{
  height: 220,
  width: 350,
},
bottomSheetContent: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: Colors.background,
  paddingLeft: 20,
  padding: 60,
  marginRight: 20,
  marginLeft: 20,
  justifyContent: 'center',
  borderTopLeftRadius: width * 0.07,
  borderTopRightRadius: width * 0.07,
  borderColor: 'rgba(0, 0, 0, 0.1)',
  margin: 0,
},
overlay: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
closemodalButton: {
  backgroundColor: Colors.btn,
  borderRadius: 10,
  height: 46,
  // width: 200,
},

});

export default PropertyDetailsScreen;
