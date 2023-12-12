import { View, Text, Image, StyleSheet, SafeAreaView, Pressable,TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialIcons"
import Feather from 'react-native-vector-icons/Feather';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Action = ({ icon, title, screen,iconBackgroundColor }) => {
  return (
    <View style={styles.action}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={[styles.iconContainer, { backgroundColor: iconBackgroundColor || Colors.btn }]}>
          <Icon name={icon} size={23} color={'white'} />
        </View>
        <Text style={styles.actionTitle}>
          {title}
        </Text>
      </View>
      <Icon name={'chevron-right'} size={25} color={'#15273F'} />
    </View>
  )
}



export default function Menu({ navigation }) {

  var fullname = "Harsh Dubey";
  var useremail = "dubeyharsh@gmail.com";
  profileImage = require("../assets/images/house.jpg");

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('userLoggedIn');
              navigation.navigate('Login');
            } catch (error) {
              console.error('Error clearing user data:', error.message);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  const navigateToOtherPage = () => {
    navigation.navigate('RequestedProperty')
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
     
      
      <TouchableOpacity onPress={() => navigation.navigate("ViewDetails")}  style={styles.profileInfo}>
        <View style={styles.imageContainer}>
          <Image source={profileImage} style={styles.profileImageStyle} />
        </View>
        <View style={styles.nameSection}>
          <Text style={styles.accountTitle}>{fullname}</Text>
          <Text style={{ fontFamily: "sans-serif-light", fontSize: 14, color: "gray" }}>{useremail}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.action}></View>
      <Action title={'Location'} icon={'edit-location'} />
      <Action title={'Notifications'} icon={'notifications'} />
      <Action title={'Deactivation'} icon={'delete'} />
      <Action title={'Help & Support'} icon={'help'} />
      <TouchableOpacity  onPress={() => navigateToOtherPage()}>
  <View style={styles.action}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={[styles.iconContainer, { backgroundColor: Colors.btn }]}>
        <Feather name='user-plus' size={20} color={'white'} />
      </View>
      <Text style={[styles.actionTitle, { }]}>
        Requested Property
      </Text>
    </View>
  </View>
</TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SavedProperty")}>
        <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, { backgroundColor: Colors.heilightcolor }]}>
            <AwesomeIcon name='heart' size={20} color={'white'} />
            </View>
            <Text style={[styles.actionTitle, { color: '#F25B68' }]}>
              Liked Property
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      {/*  */}
      <Pressable onPress={handleLogout}>
        <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, { backgroundColor: '#15beae' }]}>
              <Icon name={'logout'} size={23} color={'white'} />
            </View>
            <Text style={[styles.actionTitle, { color: '#F25B68' }]}>
              Logout
            </Text>
          </View>
        </View>
      </Pressable>
      {/*  */}

      <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontFamily: 'sans-serif-light' }}>Version: 0.0.1</Text>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

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
  profileInfo: {
    // marginTop: 10,
    paddingHorizontal: 29,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#f7f7f7",
    elevation: 3,
  },
  imageContainer: {
    // marginTop: 20,
    width: 70,
    height: 70,
    borderRadius: 60,
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
    alignItems: 'center'

  },
  profileImageStyle: {
    height: 70,
    width: 70,
    borderRadius: 60,
  },
  accountTitle: {
    fontFamily: "sans-serif-condensed",
    fontSize: 18,
    fontWeight: '600',
    color: "#15273F"
  },
  nameSection: {
    marginLeft: 35,
  },
  action: {
    marginTop: 19,
    paddingHorizontal: 29,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#15beae',
    justifyContent: "center",
    alignItems: 'center'
  },
  actionTitle: {
    marginLeft: 19,
    fontSize: 20,
    color: "#15273F",
  }

})