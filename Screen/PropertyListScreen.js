import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, StyleSheet, Dimensions, Pressable,
  Animated, } from 'react-native';
  import {
    Button,
    Card as ElementsCard,
  } from 'react-native-elements';
import AwesomeIcon from "react-native-vector-icons/FontAwesome5"
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../assets/const/colors'
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import Modal from 'react-native-modal';
import { Slider } from 'react-native-elements';

const { width, height } = Dimensions.get('screen');

// const { width } = Dimensions.get("screen");
const propertyData = [
  { id: '1', name: 'Simran Aim',bedrooms:2,bathrooms:4,area:3, price: '$200,000',description: '"We provide complete solutions to Property Buyers and Sellers to Buy, Sell, Resale, Rent their Apartments, Villas, Independent Homes, Plots and Commercial Properties."',location: 'Radha Complex, New DP Rd, Surya Nagar, Katrap, Badlapur, Maharashtra 421503' , image: require('../assets/images/house.jpg'),
  allimages: [
    require('../assets/images/house.jpg'),
    require('../assets/images/login.png'),
    require('../assets/images/house.jpg'),
  ], },
   { id: '2', name: 'Shivam Apt',bedrooms:2,bathrooms:4,area:3, price: '$300,000',description: '"We provide complete solutions to Property Buyers and Sellers to Buy, Sell, Resale, Rent their Apartments, Villas, Independent Homes, Plots and Commercial Properties."',location: 'Radha Complex, New DP Rd, Surya Nagar, Katrap, Badlapur, Maharashtra 421503', image: require('../assets/images/real-estate-6688945_1280.jpg'),
   allimages: [
    require('../assets/images/house.jpg'),
    require('../assets/images/login.png'),
    require('../assets/images/house.jpg'),
  ], },
   { id: '3', name: 'Harsh APT',bedrooms:2,bathrooms:4,area:3, price: '$400,000',description: '"We provide complete solutions to Property Buyers and Sellers to Buy, Sell, Resale, Rent their Apartments, Villas, Independent Homes, Plots and Commercial Properties."',location: 'Radha Complex, New DP Rd, Surya Nagar, Katrap, Badlapur, Maharashtra 421503', image: require('../assets/images/house.jpg'),
   allimages: [
    require('../assets/images/house.jpg'),
    require('../assets/images/login.png'),
    require('../assets/images/house.jpg'),
  ], },
 
];
function PropertyListScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [scale, setScale] = useState(new Animated.Value(1));
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  const [selectedButtonIndexkitchen, setSelectedButtonIndexkitchen] = useState(0);
  const [selectedButtonIndexparking, setSelectedButtonIndexparking] = useState(0);
  const [selectedButtonIndexcities, setSelectedButtonIndexcities] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedButtonIndex(index);
  };
  const handleButtonClickkitchen = (index) => {
    setSelectedButtonIndexkitchen(index);
  };
  const handleButtonClickparking = (index) => {
    setSelectedButtonIndexparking(index);
  };
  const handleButtonClickcities = (index) => {
    setSelectedButtonIndexcities(index);
  };

  const buttons = [
    { title: 'Any', index: 0 },
    { title: '1', index: 1 },
    { title: '2', index: 2 },
    { title: '3', index: 3 },
    { title: '4', index: 4 },
  ];

  const buttonscities = [
    { title: 'Any', index: 0 },
    { title: 'Thane', index: 1 },
    { title: 'Mumbai', index: 2 },
    { title: 'Kalyan', index: 3 },
  ];

  const [priceRange, setPriceRange] = useState(50);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };
  const renderBottomSheetContent = () => (
    <View style={[styles.bottomSheetContent, { height: height * 0.6 }]}>
      <View style={styles.filtercontent}>
      <Text style={styles.modaltext}>Bathrooms</Text>
      <View style={{ flexDirection: 'row', marginBottom: 10, }}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            title={button.title}
            type="outline"
            buttonStyle={{
              width: 60,
              padding: 5,
              marginRight: 8,
              backgroundColor: selectedButtonIndex === index ? Colors.btn : 'white',
            }}
            titleStyle={{ fontSize: 14, padding: 0, color: selectedButtonIndex === index ? 'white' : 'black' }}
            onPress={() => handleButtonClick(index)}
          />
        ))}
      </View ></View>
      <View style={styles.filtercontent}>
      <Text style={styles.modaltext}>Kitchens</Text>
      <View style={{ flexDirection: 'row', marginBottom: 10, }}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            title={button.title}
            type="outline"
            buttonStyle={{
              width: 60,
              padding: 5,
              marginRight: 8,
              backgroundColor: selectedButtonIndexkitchen === index ? Colors.btn : 'white',
            }}
            titleStyle={{ fontSize: 14, padding: 0, color: selectedButtonIndexkitchen === index ? 'white' : 'black' }}
            onPress={() => handleButtonClickkitchen(index)}
          />
        ))}
      </View></View>
      <View style={styles.filtercontent}>
      <Text style={styles.modaltext}>Parkings</Text>
      <View style={{ flexDirection: 'row', marginBottom: 10, }}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            title={button.title}
            type="outline"
            buttonStyle={{
              width: 60,
              padding: 5,
              marginRight: 8,
              backgroundColor: selectedButtonIndexparking === index ? Colors.btn : 'white',
            }}
            titleStyle={{ fontSize: 14, padding: 0, color: selectedButtonIndexparking === index ? 'white' : 'black' }}
            onPress={() => handleButtonClickparking(index)}
          />
        ))}
      </View></View>
      <View style={styles.filtercontent}>
      <Text style={styles.modaltext}>Cities</Text>
      <View style={{ flexDirection: 'row', marginBottom: 10, }}>
        {buttonscities.map((button, index) => (
          <Button
            key={index}
            title={button.title}
            type="outline"
            buttonStyle={{
              width: 70,
              padding: 5,
              marginRight: 8,
              backgroundColor: selectedButtonIndexcities === index ? Colors.btn : 'white',
            }}
            titleStyle={{ fontSize: 14, padding: 0, color: selectedButtonIndexcities === index ? 'white' : 'black' }}
            onPress={() => handleButtonClickcities(index)}
          />
        ))}
      </View></View>

      <View>
        <Text style={styles.modaltextprice}>Price Range</Text>
        <Slider
          value={priceRange}
          minimumValue={0}
          maximumValue={100}
          step={1}
          thumbTintColor="blue"
          trackStyle={{ height: 10, backgroundColor: 'lightgrey' }}
          thumbStyle={{ height: 20, width: 20, backgroundColor: 'blue' }}
          onValueChange={(value) => setPriceRange(value)}
        />
        <Text style={{fontSize: 17, color: 'black'}}>{`Price Range: ${priceRange}`}</Text>
      </View>
      <View style={{marginTop: 10}}>
        <Text style={styles.modaltextprice}>Area Range</Text>
        <Slider
          value={priceRange}
          minimumValue={0}
          maximumValue={100}
          step={1}
          thumbTintColor="blue"
          trackStyle={{ height: 10, backgroundColor: 'lightgrey' }}
          thumbStyle={{ height: 20, width: 20, backgroundColor: 'blue' }}
          onValueChange={(value) => setPriceRange(value)}
        />
        <Text style={{fontSize: 17, color: 'black'}}>{`Price Range: ${priceRange}`}</Text>
      </View>
      {/* <Pressable onPress={toggleBottomSheet}>
        <Text style={{ fontSize: 20 }}>Close Bottom Sheet</Text>
      </Pressable> */}
    </View>
  );



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
    <View style={styles.container}>
    {/* <Text style={styles.header}>Property Listings</Text> */}
    <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: width * 0.05,
                      marginTop: height * 0.01,
                      marginBottom: height * 0.01,
                    }}>
                    <View style={styles.searchInputContainer}>
                        <Icon name="search" size={25} color={Colors.heilightcolor} />
                        <TextInput placeholder='Search address, city, location' />
                    </View>
                    <Pressable style={styles.sortbtn} onPress={toggleBottomSheet}>
    <Icon name='tune' type='material' color={COLORS.white} size={25} />
  </Pressable>
  <Modal
        isVisible={isBottomSheetVisible}
        onBackdropPress={toggleBottomSheet}
        onBackButtonPress={toggleBottomSheet}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.5}
        style={{ padding: width * 0.05, margin: 0 }}>
        {renderBottomSheetContent()}
      </Modal>

                </View>
      
    <FlatList
      data={propertyData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ElementsCard
        containerStyle={styles.card}
        >
          <TouchableOpacity style={styles.imageContainer}
           onPress={() => navigation.navigate('PropertyDetails', { property: item })}>
            <Image source={item.image} style={styles.propertyImage} />
            
          </TouchableOpacity>
         
          
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.dark, width: "65%" }} numberOfLines={1}>{item.name}</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.dark }}>
              Rs: <Text style={{ fontSize: 15, fontWeight: 'bold', color: "red" }}>{item.price}</Text>
            </Text>
          </View>
          <Text style={{ color: COLORS.gray, fontSize: 14, marginTop: 5 }}>{item.location}</Text>
          <View style={{ marginTop: 10, flexDirection: 'row' }}>
            <View style={styles.facility}>
              <Icon name='hotel' size={18} style={{ color: Colors.iconcolor }} />
              <Text style={styles.facilityText}>{item.bedrooms}</Text>
            </View>
            <View style={styles.facility}>
              <Icon name='bathtub' size={18} style={{ color: Colors.iconcolor }} />
              <Text style={styles.facilityText}>{item.bathrooms}</Text>
            </View>
            <View style={styles.facility}>
              <AwesomeIcon name='ruler-vertical' size={18} style={{ color: Colors.iconcolor }} />
              <Text style={styles.facilityText}>{item.area}</Text>
            </View>
          </View>
            {/* </View> */}
           </ElementsCard>

      )}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ alignItems:'center', marginVertical: 20 }}
      // style={{marginVertical: 20}}
    />
    
  </View>
  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  propertidata : {
  alignItems:'center',
  
  },
  card: {
    height: 320,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width - 40,
    marginBottom: 35,
    padding: 15,
    borderRadius: 20,
    marginTop: 1,
},
  imageContainer: {
    alignItems: 'center',
  },
  propertyImage: {
    width: '100%',
    height: 180,
    borderRadius: 15,
  },
  searchInputContainer: {
    backgroundColor: COLORS.light,
    height: 43,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
},
sortbtn: {
    backgroundColor: Colors.btn,
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
},
facility: {
  flexDirection: 'row',
  marginRight: 15,
},
facilityText: {
  marginLeft: 5,
  color: COLORS.gray,
},
bottomSheetContent: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'white',
  padding: height * 0.03,
  justifyContent: 'center',
  borderTopLeftRadius: width * 0.05,
  borderTopRightRadius: width * 0.05,
  borderColor: 'rgba(0, 0, 0, 0.1)',
  margin: 0,
},
filtercontent:{
 justifyContent: 'center',
},
modaltext:{
color: 'black',
marginBottom: 8,
fontSize: 17,
},
modaltextprice:{
  color: 'black',
  marginTop: 5,
  fontSize: 17,
},

});


export default PropertyListScreen;
