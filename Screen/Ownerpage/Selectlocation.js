import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  BackHandler,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  Text,
  Alert,
} from 'react-native';
import { useBackHandler } from '@react-native-community/hooks';
import { useIsFocused } from '@react-navigation/native';
import COLORS from '../../assets/const/colors';
import Colors from '../../constants/Colors';

const Selectlocation = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handlAlltenentPress = () => {
    navigation.navigate('Alltenents');
  };

  const handluploadpropertyPress = () => {
    if (selectedImage) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Select Image', 'Please select an image before submitting.');
    }
  };
  // const BackHandler = () => {
  //   navigation.navigate('EnterOtp');
  // };
  const isFocused = useIsFocused();

  function backActionHandler() {
    Alert.alert('', 'Are you sure to exit ?', [
      {
        text: 'No',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  }

  useBackHandler(isFocused ? backActionHandler : () => false);

  const ListOptions = () => {
    const locations = [
      { name: 'Kolkata', image: require('../../assets/images/kolkata.png') },
      { name: 'Mumbai', image: require('../../assets/images/mumbai.jpg') },
      { name: 'Delhi', image: require('../../assets/images/delhi.png') },
      { name: 'Banglore', image: require('../../assets/images/banlore.png') },
      { name: 'Uttar-Pradesh', image: require('../../assets/images/Uttar-Pradesh.jpg') },
      { name: 'Jammu & Kashmir', image: require('../../assets/images/Jammu-Kashmir.jpg') },
      { name: 'Chennai', image: require('../../assets/images/chennai.jpg') },
      { name: 'Jharkhand', image: require('../../assets/images/jharkhand.jpg') },
      { name: 'Pune', image: require('../../assets/images/pune.jpg') },
    ];

    return (
      <ScrollView>
        <View style={styles.ownerLandpage}>
          <View style={{ alignItems: 'center', marginTop: 10, elevation: 4 }}>
            <Image
              source={require('../../assets/images/Selectimagebanner.jpg')}
              style={styles.imagebanner}
            />
          </View>
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
    margin: 20,
    justifyContent: 'center',
  },
  ownerLandpage: {
    backgroundColor: COLORS.white,
    margin: 10,
  },
  item: {
    width: '28%',
    margin: 8,
    alignItems: 'center',
    elevation: 2,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingTop: 10,
    marginTop: 10,
    padding: 2,
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
});

export default Selectlocation;
