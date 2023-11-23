import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, StyleSheet, Dimensions, PanResponder,
  Animated, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../../assets/const/colors';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';


const { width } = Dimensions.get("screen");
const propertyData = [
  { id: '1', name: 'Simran Aim', price: '$200,000',description: '"We provide complete solutions to Property Buyers and Sellers to Buy, Sell, Resale, Rent their Apartments, Villas, Independent Homes, Plots and Commercial Properties."',location: 'Radha Complex, New DP Rd, Surya Nagar, Katrap, Badlapur, Maharashtra 421503' , image: require('../../assets/images/tenent1.jpg'),
  allimages: [
    require('../../assets/images/house.jpg'),
    require('../../assets/images/login.png'),
    require('../../assets/images/house.jpg'),
  ], },
   { id: '2', name: 'Shivam Apt', price: '$300,000',description: '"We provide complete solutions to Property Buyers and Sellers to Buy, Sell, Resale, Rent their Apartments, Villas, Independent Homes, Plots and Commercial Properties."',location: 'Radha Complex, New DP Rd, Surya Nagar, Katrap, Badlapur, Maharashtra 421503', image: require('../../assets/images/tenent2.jpeg'),
   allimages: [
    require('../../assets/images/house.jpg'),
    require('../../assets/images/login.png'),
    require('../../assets/images/house.jpg'),
  ], },
   { id: '3', name: 'Harsh APT', price: '$400,000',description: '"We provide complete solutions to Property Buyers and Sellers to Buy, Sell, Resale, Rent their Apartments, Villas, Independent Homes, Plots and Commercial Properties."',location: 'Radha Complex, New DP Rd, Surya Nagar, Katrap, Badlapur, Maharashtra 421503', image: require('../../assets/images/tenent2.jpeg'),
   allimages: [
    require('../../assets/images/house.jpg'),
    require('../../assets/images/login.png'),
    require('../../assets/images/house.jpg'),
  ], },
 
];
function Alltenents({ navigation }) {
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

<View style={styles.ownerhii}><Text style={styles.hiiowner}>Tenents List</Text></View>

<View style={styles.containertenetlist}>
                <View
                  style={[styles.item, { backgroundColor: '#635cbb' }]}
                  >
                    <View>
                  <Text style={styles.Total}>Total</Text>
                  <Text style={styles.totalnumber}>123</Text></View>
                </View>
                <View
                  style={[styles.item, { backgroundColor: '#00b3db' }]}
                  ><View>
                  <Text style={styles.Total}>Active</Text>
                  <Text style={styles.totalnumber}>123</Text></View>
                </View>
                <View
                  style={[styles.item, { backgroundColor: 'orange' }]}
                  ><View>
                  <Text style={styles.Total}>Inactive</Text>
                  <Text style={styles.totalnumber}>123</Text></View>
                </View>
            </View>

    <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                        marginBottom: 10,
                    }}>
                    <View style={styles.searchInputContainer}>
                        <Icon name="search" size={25} color={"#15beae"} />
                        <TextInput placeholder='Search address, city, location' />
                    </View>

                </View>
      <View style={styles.propertidata}>



    <FlatList
      data={propertyData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View
          style={styles.itemContainer }
        >
          <TouchableOpacity style={styles.imageContainer}>
            <Image source={item.image} style={styles.propertyImage} />
            
          </TouchableOpacity>

          <View style={styles.locationContainer}>
              <Text style={styles.propertyLocation}>{item.location}</Text>
            </View>
        </View>
      )}
      showsVerticalScrollIndicator={false} 
    />
    </View>
  </View>
  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    height: 100,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width - 40,
    // marginBottom: 20,
    // borderRadius: 20,
  },
  imageContainer: {
    marginBottom: 12,
  },
  propertyImage: {
    width: 100, 
    height: 80,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  locationContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 5,
  },
  propertyLocation :{
    marginLeft: 20,
    width: '80%',
    color: 'black',
  },
  searchInputContainer: {
    backgroundColor: COLORS.light,
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
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


export default Alltenents;
