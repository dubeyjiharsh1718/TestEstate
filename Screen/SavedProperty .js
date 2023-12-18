import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image,TouchableOpacity,Dimensions,ActivityIndicator  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, Button } from 'react-native-elements';
import Colors from '../constants/Colors';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS from '../assets/const/colors';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('screen');
const SavedProperty = () => {
  const navigation = useNavigation(); 
  const [savedProperties, setSavedProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handlefindproperty = () => {
    navigation.navigate('PropertyListScreen')
  }

  useEffect(() => {
    const fetchSavedProperties = async () => {
      try {
        const savedPropertiesString = await AsyncStorage.getItem('savedProperties');
        const savedProperties = JSON.parse(savedPropertiesString) || [];
        setSavedProperties(savedProperties);
      } catch (error) {
        console.error('Error retrieving saved properties:', error);
      }
      finally {
        setIsLoading(false); 
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
      Toast.show({
        type: 'success',
        position: 'center',
        text1: 'Property Removed',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    } catch (error) {
      console.error('Error removing saved property:', error);
    }
  };

  return (
    <View style={styles.container}>
         <View style={styles.header}>
        <View style={{ marginLeft: 20 }}>
          <Feather
            name="arrow-left"
            size={25}
            style={{ color: '#15273F' }}
            onPress={navigation.goBack}
          />
        </View>
        <View style={{ marginLeft: 80 }}>
          <Text style={styles.headerText}>Saved Properties</Text>
        </View>
      </View>
      {/* <Text style={[styles.title, { marginLeft: 20 }]}></Text> */}
      {isLoading ? (
        <ActivityIndicator style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} size="large" color={Colors.heilightcolor} />
      ) : savedProperties.length === 0 ? (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',marginTop: -50 }}>
       <Image
         source={require('.././assets/images/wishlist.jpg')}
         style={{ width: 150, height: 150, marginBottom: 5 }}
       />
       <Text style={{ fontSize: 18, textAlign: 'center', color: 'black', marginTop: 20 }}>
         You haven't added any
       </Text>
       <Text style={{ fontSize: 18, color: 'black', textAlign: 'center', marginBottom: 20 }}>
         properties yet
       </Text>
       <Button
         title={'Find property to save'}
        onPress={handlefindproperty}
         buttonStyle={styles.closemodalButton}
       />
     </View>
      ) : (
      <FlatList
        data={savedProperties}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.propertyImage} />          
          </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: COLORS.dark, width: "65%" }} numberOfLines={1}>{item.title}</Text>
            <FontAwesome  onPress={() => handleUnsaveProperty(index)} name="heart" style={styles.homedetailicon} />
          </View>
            <View style={[styles.buttonContainer,{flexDirection:'row',justifyContent: 'space-between',}]}>
                <Text style={{fontSize: 18,color:'black'}}>{item.price}</Text>
            </View>
            <View style={styles.propertyRow}>
          <Text style={styles.propertyValue}>{item.location}</Text>
        </View>
          </View>
        )}
        contentContainerStyle={{ alignItems:'center', marginVertical: 20 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      )}
       <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 100,
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
    height: 160,
    borderRadius: 8,
    width: '100%',
  },
  card: {
    height: 300,
    marginTop: 5,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width - 40,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
},
closemodalButton: {
  backgroundColor: Colors.btn,
  borderRadius: 3,
  height: 40,
  paddingLeft: 10, 
  paddingRight: 10
},
});

export default SavedProperty;
