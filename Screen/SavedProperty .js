import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, Button } from 'react-native-elements';
import Colors from '../constants/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      <Text style={styles.title}>Saved Properties</Text>
      <FlatList
        data={savedProperties}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Card>
            <Card.Title>{item.title}</Card.Title>
            <Card.Divider />
            <Image source={item.image} style={styles.image} />


            {/* Render other property details here */}
            
            <View style={[styles.buttonContainer,{flexDirection:'row',justifyContent: 'space-between',}]}>
                <Text style={{fontSize: 18,color:'black'}}>{item.price}</Text>
                <Icon  onPress={() => handleUnsaveProperty(index)} name="bookmark-off-outline" style={styles.homedetailicon} />
              {/* <Button
                title="Unsave"
                onPress={() => handleUnsaveProperty(index)}
                type="outline"
                buttonStyle={styles.unsaveButton}
              /> */}
            </View>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
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
    marginTop: 10,
    alignItems: 'center',
  },
  unsaveButton: {
    borderColor: 'red',
  },
  homedetailicon: {
    fontSize: 28,
    color: Colors.heilightcolor,
  },
});

export default SavedProperty;
