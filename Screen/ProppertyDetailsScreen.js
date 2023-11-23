import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import Colors from "../constants/Colors";
import COLORS from '../assets/const/colors';
import Font from '../constants/Font';
import FontSize from '../constants/FontSize';
import Spacing from "../constants/Spacing";
import Lightbox from 'react-native-lightbox';

// import ImageFullScreenScreen from './ImageFullScreenScreen';

function PropertyDetailsScreen({ route, navigation }) {
  const { property } = route.params;
  const [scale, setScale] = useState(new Animated.Value(1));

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
            </View></Lightbox>
          </TouchableOpacity>
        ))}
      </Swiper>
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
        <Text style={styles.propertyPrice}>{property.price}</Text>
        <Text style={styles.propertyDescription}>Description:</Text>
        <Text style={styles.propertyDescriptionText}>{property.description}</Text>
      </View>
      {/* <FlatList
  data={property.allimages}
  renderItem={({ item, index }) => (
    <TouchableOpacity onPress={() => onImagePress(item)}>
      <View style={styles.optionCardtopsearch}>
        <Image source={item.source} style={styles.optionCardImagetop} />
        <Text style={{ marginTop: 11, fontSize: 18, color: COLORS.dark }}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )}
  contentContainerStyle={styles.optionListContainertop}
  showsHorizontalScrollIndicator={false}
/> */}

      <View style={styles.centerContainer}>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>Book Now</Text>
        </TouchableOpacity>
      </View>
   
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
    height: 260,
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
    height: 260,
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
    fontSize: 16,
    color : "red",
  },
  propertyName: {
    fontSize: 20,
    color: 'red',
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
    color: 'blue',
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
});

export default PropertyDetailsScreen;
