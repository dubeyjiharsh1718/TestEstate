import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image,TouchableOpacity,Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, Button } from 'react-native-elements';
import Colors from '../constants/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS from '../assets/const/colors';


const { width, height } = Dimensions.get('screen');
const SavedProperty = () => {
  const [savedProperties, setSavedProperties] = useState([]);

  useEffect(() => {
    const fetchSavedProperties = async () => {
      try {
        const savedPropertiesString = await AsyncStorage.getItem('savedProperties');
        const savedProperties = JSON.parse(savedPropertiesString) || [];
        setSavedProperties(savedProperties);
      } catch (error) {
        console.error('Error retrieving saved properties:', error);
      }
    };

    fetchSavedProperties();
  }, []);

  const handleUnsaveProperty = async (index) => {
    try {
      const updatedSavedProperties = [...savedProperties];
      updatedSavedProperties.splice(index, 1);

      await AsyncStorage.setItem('savedProperties', JSON.stringify(updatedSavedProperties));

      setSavedProperties(updatedSavedProperties);
    } catch (error) {
      console.error('Error removing saved property:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title,{marginLeft: 20}]}>Saved Properties</Text>
      <FlatList
        data={savedProperties}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View
          style={styles.card}
        >
            <TouchableOpacity style={styles.imageContainer}>
            <Image source={item.image} style={styles.propertyImage} />
            
          </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.dark, width: "65%" }} numberOfLines={1}>{item.title}</Text>
            <FontAwesome  onPress={() => handleUnsaveProperty(index)} name="heart" style={styles.homedetailicon} />
          </View>
            <View style={[styles.buttonContainer,{flexDirection:'row',justifyContent: 'space-between',}]}>
                <Text style={{fontSize: 18,color:'black'}}>{item.price}</Text>
               
            </View>
            <View style={styles.propertyRow}>
          {/* <FontAwesome5 name="map-marker-alt" style={styles.locationIcon} /> */}
          <Text style={styles.propertyValue}>{item.location}</Text>
        </View>
          </View>
        )}
        contentContainerStyle={{ alignItems:'center', marginVertical: 20 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    // padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 100, // Adjust the height as needed
  },
  buttonContainer: {
    // marginTop: 5,
    alignItems: 'center',
  },
  unsaveButton: {
    borderColor: 'red',
  },
  homedetailicon: {
    fontSize: 28,
    color: Colors.heilightcolor,
  },
  imageContainer: {
    marginBottom: 12,
    alignItems: 'center',
  },
  propertyImage: {
    width: 350, 
    height: 160,
    resizeMode: 'cover',
    borderRadius: 8,
    alignItems: 'center',
  },
  card: {
    marginTop: 5,
    height: 300,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width - 40,
    marginBottom: 20,
    padding: 15,
    borderRadius: 20,
},
});

export default SavedProperty;
