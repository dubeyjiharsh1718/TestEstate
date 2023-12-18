import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, StyleSheet, Dimensions, Surface,ScrollView,
  Animated, } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import COLORS from '../../assets/const/colors';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/dist/Colors';


const { width } = Dimensions.get("screen");
const propertyData = [
  { id: '1', name: 'Simran Aim',time: '10 min ago, Sunday', price: '$200,000',description: '"We provide complete solutions to Property Buyers and Sellers to Buy, Sell, Resale, Rent their Apartments, Villas, Independent Homes, Plots and Commercial Properties."',location: 'Radha Complex, New DP Rd, Surya Nagar, Katrap, Badlapur, Maharashtra 421503' , image: require('../../assets/images/tenent1.jpg'),
  allimages: [
    require('../../assets/images/house.jpg'),
    require('../../assets/images/login.png'),
    require('../../assets/images/house.jpg'),
  ], },
   { id: '2', name: 'Shivam Apt',time: '5 min ago, Sunday', price: '$300,000',description: '"We provide complete solutions to Property Buyers and Sellers to Buy, Sell, Resale, Rent their Apartments, Villas, Independent Homes, Plots and Commercial Properties."',location: 'Radha Complex, New DP Rd, Surya Nagar, Katrap, Badlapur, Maharashtra 421503', image: require('../../assets/images/tenent2.jpeg'),
   allimages: [
    require('../../assets/images/house.jpg'),
    require('../../assets/images/login.png'),
    require('../../assets/images/house.jpg'),
  ], },
   { id: '3', name: 'Harsh APT',time: '2 min ago, Sunday', price: '$400,000',description: '"We provide complete solutions to Property Buyers and Sellers to Buy, Sell, Resale, Rent their Apartments, Villas, Independent Homes, Plots and Commercial Properties."',location: 'Radha Complex, New DP Rd, Surya Nagar, Katrap, Badlapur, Maharashtra 421503', image: require('../../assets/images/tenent2.jpeg'),
   allimages: [
    require('../../assets/images/house.jpg'),
    require('../../assets/images/login.png'),
    require('../../assets/images/house.jpg'),
  ], },
 
];
function Notificationrequest({ navigation }) {

  const handltenentdetails = () => {
    navigation.navigate('Tenentdetails');
  }; 


  return (
    <ScrollView style={styles.container}>
       <View style={styles.header}>
        <View style={{ marginLeft: 20 }}>
          <Feather
            name="arrow-left"
            size={25}
            style={{ color: '#15273F' }}
            onPress={navigation.goBack}
          />
        </View>
        <View style={{ marginLeft: 100 }}>
          <Text style={styles.headerText}>Notifications</Text>
        </View>
      </View>

      <View style={styles.propertidata}>
        <View style={{flexDirection: 'row',justifyContent: 'space-between',marginTop: 20, }}>
            <TouchableOpacity>
        <Text style={{paddingLeft: 10,fontSize: 17, color: 'red',marginTop: 2,height: 30, width: 150,backgroundColor: '#f5f6fa',borderRadius: 15,}}>Mark all as read</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
        <Icon name='notifications-on' type='material' color={Colors.heilightcolor} size={32} />
        <Text style={{color: Colors.heilightcolor,fontSize:15 }}>3</Text>
        </View>
        </View>
     <FlatList
      data={propertyData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View  style={styles.itemContainer } >
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.propertyImage} /> 
          </View>

          <View>
            <View style={styles.locationContainer}>
              <Text style={[styles.propertyLocation,{marginTop: -3}]}>{item.name}</Text>
              <Text style={{fontSize: 17,marginLeft: 5}}>schedule New Metting</Text>
              </View>
              <Text style={{fontSize: 14,marginLeft: 10,marginTop: 4}}>{item.time}</Text>
              <View style={[styles.locationContainer,{marginLeft: 10,marginTop: 5}]}>
              <Button title="Accept" buttonStyle={{ height: 30, width: 100,padding: 2 }} />
              <Button title="Decline" type="outline" buttonStyle={{ height: 30,marginLeft: 10, width: 100,padding: 2 }} />
              </View>
            </View>
        </View>
        
      )}
      showsVerticalScrollIndicator={false} 
    />
    </View>
  </ScrollView>
  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    height: 50,
    elevation: 4,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#15273F',
  },
  itemContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    // marginBottom: 16,
    borderRadius: 8,
    height: 105,
    backgroundColor: "#f5f6fa",
    elevation: 2,
    width: width - 40,
    marginTop: 20,
  },
  imageContainer: {
    // marginBottom: 5,
  },
  propertyImage: {
    width: 70, 
    height: 70,
    marginTop: 6,
    resizeMode: 'cover',
    borderRadius: 100,
  },
  locationContainer: {
    flexDirection: 'row', 
  },
  propertyLocation :{
    marginLeft: 10,
    color: 'black',
    fontSize: 17,
  },
  searchInputContainer: {
    backgroundColor: COLORS.light,
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
},
ownerhii: {
    marginLeft: 25,
    marginTop: 20,
    marginBottom : 10,
},
hiiowner:{
    fontSize: 27,
    color: 'black',
},
containertenetlist:{
    flexDirection: 'row',
    flexWrap: 'wrap',
     margin: 20,
    justifyContent: 'center',
},
item:{
    width: '26%', 
    margin: 8,
    alignItems: 'center',
    elevation: 4,
    borderRadius: 10,
    paddingTop: 10,
    marginTop:10,
    padding: 6,
    height: 100,
},
image: {
    width: '80%',
    height: 50,
    marginBottom:5,
  },
  Total:{
    paddingTop: 15,
    fontSize: 20,
    color: 'white',
    justifyContent: "center",
    textAlign: "center",
    fontWeight: 'bold',
  },
  totalnumber:{
    fontSize: 17,
    textAlign: "center",
    color:"white",
  },

});


export default Notificationrequest;
