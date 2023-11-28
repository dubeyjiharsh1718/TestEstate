import { View, Text, Image, StyleSheet, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import Icon from "react-native-vector-icons/MaterialIcons"
import Feather from 'react-native-vector-icons/Feather'
import { Surface } from 'react-native-paper'
import Colors from '../constants/Colors'
import AwesomeIcon from "react-native-vector-icons/FontAwesome5"

const Action = ({ icon, title, screen,iconBackgroundColor  }) => {
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

export default function Profile({ navigation }) {

  // var fullname = "Harsh Dubey";
  // var useremail = "dubeyharsh@gmail.com";
  const [fullName, setFullName] = useState("");
  const [emailId, setEmail] = useState("");
  const [mobileNumber, setMobile] = useState("");
  const [profileImage, setProfileImage] = useState(require("../assets/images/house.jpg"));

  useEffect(() => {
    // Retrieve data from local storage
    const fetchUserData = async () => {
      try {
        const storedUserDataString = await AsyncStorage.getItem('userData');
        const storedUserData = JSON.parse(storedUserDataString);

        if (storedUserData) {
          setFullName(storedUserData.fullName);
          setEmail(storedUserData.emailId);
          setMobile(storedUserData.mobileNumber);
        }
      } catch (error) {
        console.error('Error retrieving user data from local storage:', error);
      }
    };

    fetchUserData();
  }, []); 


  return (
    <ScrollView
    style={{ flex: 1, backgroundColor: 'white' }}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}>
      {/*  */}
      <Surface style={styles.header}>
        <View style={{ marginLeft: 20 }}>
          <Feather
            name='arrow-left'
            size={25}
            style={{ color: '#15273F' }}
            onPress={navigation.goBack}
          />
        </View>
        <View style={{}}>
          <Text style={styles.headerText}>Account</Text>
        </View>
        <View style={{ marginRight: 20 }}>
          <Pressable>
            <Feather
              name='share-2'
              size={25}
              style={{ color: '#15273F' }}
            />
          </Pressable>
        </View>
      </Surface>
      {/*  */}

      <View style={styles.profileInfo}>
        <View style={styles.imageContainer}>
          <Image source={profileImage} style={styles.profileImageStyle} />
        </View>
        {/* <View style={styles.nameSection}>
          <Text style={styles.accountTitle}>{fullname}</Text>

          <Text style={{ fontFamily: "sans-serif-light", fontSize: 14, color: "gray" }}>{useremail}</Text>
        </View> */}
      </View>
      {/* <TouchableOpacity style={{alignItems: 'center',marginLeft: 130, }}>
      <AwesomeIcon name='edit' size={22} style={{ color: Colors.iconcolor }} />
      </TouchableOpacity> */}


      <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            
            <View style={[styles.iconContainer, {  }]}>
            <Feather
            name='user'
            size={25}
            style={{ color: Colors.heilightcolor }}
            onPress={navigation.goBack}
          />
            </View>
           
            <Text style={[styles.actionTitle, { color: '#15273F' }]}>
              Harsh
            </Text>
          </View>
          
        </View>
      {/*  */}
      <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, {  }]}>
            <Feather
            name='phone-call'
            size={25}
            style={{ color: Colors.heilightcolor }}
          />
            </View>
            <Text style={[styles.actionTitle, { color: '#15273F' }]}>
            9874563120
            </Text> 
          </View>
          
        </View>
      {/*  */}
      <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, {  }]}>
            <Feather
            name='mail'
            size={25}
            style={{ color: Colors.heilightcolor }}
            onPress={navigation.goBack}
          />
            </View>
            <Text style={[styles.actionTitle, { color: '#15273F' }]}>
              dubeyjiharsj@gmail.com
            </Text>
          </View>
          
        </View>
      {/*  */}
     
   
       {/*  */}
      <TouchableOpacity onPress={() => navigation.navigate("ViewDetails")}>
        <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, { backgroundColor: Colors.heilightcolor }]}>
            <AwesomeIcon name='info-circle' size={20} color={'white'} />
            </View>
            <Text style={[styles.actionTitle, { color: '#F25B68' }]}>
              View Details
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      {/*  */}

      <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontFamily: 'sans-serif-light' }}>Version: 0.0.1</Text>
      </View>
    </ScrollView>
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
    margin: 14,
    paddingTop: 20,
    backgroundColor: "#f7f7f7",
    elevation: 10,
    alignItems: 'center',
    height: 170,
  },
  usernamestyle:{ 
    fontSize: 18,
    padding: 10,
    // alignItems: 'center',
    marginLeft: 20,
  },
  userAddress:{
    elevation: 10,
    marginBottom: 10,
    borderRadius: 10,

  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center'

  },
  profileImageStyle: {
    height: 115,
    width: 115,
    borderRadius: 60,
  },
  accountTitle: {
    fontFamily: "sans-serif-condensed",
    fontSize: 18,
    alignItems: 'center',
    marginLeft: 17,
    fontWeight: '600',
    color: "#15273F"
  },
  nameSection: {
    marginLeft: 35,
  },
  action: {
    marginTop: 10,
    paddingHorizontal: 29,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: 'center',
  },
  actionTitle: {
    marginLeft: 19,
    fontSize: 20,
    color: "#15273F",
  }

})