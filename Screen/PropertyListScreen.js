import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, StyleSheet, Dimensions, PanResponder,
  Animated, } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AwesomeIcon from "react-native-vector-icons/FontAwesome5"
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../assets/const/colors'
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';


const { width } = Dimensions.get("screen");
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
                        paddingHorizontal: 20,
                        marginTop: 10,
                        marginBottom: 10,
                    }}>
                    <View style={styles.searchInputContainer}>
                        <Icon name="search" size={25} color={Colors.heilightcolor} />
                        <TextInput placeholder='Search address, city, location' />
                    </View>
                    <View style={styles.sortbtn}>
                        <Icon name='tune' color={COLORS.white} size={25} />
                    </View>

                </View>
      
    <FlatList
      data={propertyData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View
          style={styles.card}
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
        </View>
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
    marginTop: 5,
    height: 320,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width - 40,
    marginBottom: 20,
    padding: 15,
    borderRadius: 20,
},
  imageContainer: {
    marginBottom: 12,
    alignItems: 'center',
  },
  propertyImage: {
    width: 350, 
    height: 180,
    resizeMode: 'cover',
    borderRadius: 8,
    alignItems: 'center',
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

});


export default PropertyListScreen;
