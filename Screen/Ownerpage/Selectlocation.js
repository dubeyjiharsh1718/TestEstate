import React, { useState } from 'react';
import {
  SafeAreaView, StyleSheet, StatusBar, BackHandler, TextInput, ScrollView, TouchableOpacity,
 Image,View,Text,Alert,Pressable
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import COLORS from '../../assets/const/colors';
import Colors from '../../constants/Colors';
import { Surface } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Selectlocation = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handlAlltenentPress = () => {
    navigation.navigate('Alltenents');
  };

  const handluploadpropertyPress = () => {
    if (selectedImage) {
      navigation.navigate('OwnerHome');
    } else {
      Alert.alert('Select Image', 'Please select an image before submitting.');
    }
  };
  
  const isFocused = useIsFocused();



  const ListOptions = () => {
    const locations = [
      { name: 'Kolkata', image: require('../../assets/images/kolkata.png') },
      { name: 'Mumbai', image: require('../../assets/images/mumbai.png') },
      { name: 'Delhi', image: require('../../assets/images/delhi.png') },
      { name: 'Banglore', image: require('../../assets/images/bengaluru.png') },
      { name: 'Chandigarh', image: require('../../assets/images/chandigarh.png') },
      { name: 'Ahmedabad', image: require('../../assets/images/ahemdabad.png') },
      { name: 'Chennai', image: require('../../assets/images/chennai.png') },
      { name: 'Hyderabad', image: require('../../assets/images/hyderabad.png') },
      { name: 'Pune', image: require('../../assets/images/pune.png') },
      { name: 'Kochi', image: require('../../assets/images/kochi.png') },
      { name: 'Lucknow', image: require('../../assets/images/lucknow.png') },
      { name: 'Jaipur', image: require('../../assets/images/jaipur.png') },
    ];

    return (
      <ScrollView>
        <View style={styles.ownerLandpage}>

            <View style={styles.searchInputContainer}>
                        <Icon name="search" size={25} color={Colors.heilightcolor} />
                        <TextInput placeholder='Search address, city, location' />
            </View>
            <TouchableOpacity>
            <View style={{flexDirection: 'row',color: 'red',fontSize: 18,paddingLeft: 20, paddingTop: 8, paddingBottom: 8, backgroundColor: 'white'}}>
            <Icon name="near-me" size={25} color={Colors.heilightcolor} />
           <Text style={{color: 'red',fontSize: 18,paddingLeft: 10,backgroundColor: 'white'}}>Detect my location</Text>
           
            </View></TouchableOpacity>
          <Text style={{color: 'black', marginLeft: 20,paddingTop: 10, paddingBottom: 10, }}>POPULAR CITIES</Text>
        
            <View style={styles.container}>
            {locations.map((location, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.item,
                  selectedImage === location.image && styles.selectedItem,
                ]}
                onPress={() => setSelectedImage(location.image)}
              >
                <Image source={location.image} style={styles.image} />
                <Text>{location.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={{color: '', marginLeft: 20,paddingTop: 10, paddingBottom: 10, }}>OTHER CITIES</Text>
          
          <Text style={{color: 'black',fontSize: 18,marginBottom:2 ,paddingLeft: 20, paddingTop: 8, paddingBottom: 8, backgroundColor: 'white'}}>Thane</Text>
          <Text style={{color: 'black',fontSize: 18,marginBottom:2 ,paddingLeft: 20, paddingTop: 8, paddingBottom: 8, backgroundColor: 'white'}}>Kalyan</Text>
          <Text style={{color: 'black',fontSize: 18,marginBottom:2 ,paddingLeft: 20, paddingTop: 8, paddingBottom: 8, backgroundColor: 'white'}}>Ambarnath</Text>
          <Text style={{color: 'black',fontSize: 18,marginBottom:2 ,paddingLeft: 20, paddingTop: 8, paddingBottom: 8, backgroundColor: 'white'}}>Thane</Text>
          <Text style={{color: 'black',fontSize: 18,marginBottom:2 ,paddingLeft: 20, paddingTop: 8, paddingBottom: 8, backgroundColor: 'white'}}>Kalyan</Text>
          <Text style={{color: 'black',fontSize: 18,marginBottom:2 ,paddingLeft: 20, paddingTop: 8, paddingBottom: 8, backgroundColor: 'white'}}>Ambarnath</Text>
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle='dark-content'
      />
           <Surface style={styles.header}>
        <View style={{ marginLeft: 20 }}>
          <Feather
            name='arrow-left'
            size={25}
            style={{ color: '#15273F' }}
            onPress={navigation.goBack}
          />
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.headerText}>Select Location</Text>
        </View>
        <View style={{ marginRight: 20 }}>
          <Pressable onPress={() => console.log('Share button pressed')}>
            <Feather
              name=''
              size={25}
              style={{ color: '#15273F' }}
            />
          </Pressable>
        </View>
      </Surface>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListOptions />
      </ScrollView>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handluploadpropertyPress}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
   justifyContent: 'center',
  },
  ownerLandpage: {
    backgroundColor: '#f9f9f9',
  },
  header: {
    height: 50,
    elevation: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#15273F'
  },
  item: {
    width: '24%',
    margin: 1,
    alignItems: 'center',
    elevation: 1,
    backgroundColor: COLORS.white,
    paddingTop: 10,
    padding: 7,
  },
  selectedItem: {
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  image: {
    width: '80%',
    height: 50,
    marginBottom: 5,
  },
  imagebanner: {
    width: '90%',
    height: 200,
    marginBottom: 5,
    elevation: 4,
  },
  submitButton: {
    backgroundColor: Colors.btn,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 20,
  },
  submitButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchInputContainer: {
    backgroundColor: 'white',
    height: 43,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 10,
},
});

export default Selectlocation;
