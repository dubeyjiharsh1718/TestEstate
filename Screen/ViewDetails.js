import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  StyleSheet,
  TextInput,
  Modal,
  Button,
  ScrollView,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../constants/Colors';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ViewDetails = ({ navigation }) => {
  const TostMessage = () => {
    ToastAndroid.show('Edited Successfully!', ToastAndroid.SHORT);
  };
  const [profileImage, setProfileImage] = useState(require("../assets/images/house.jpg"));
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  // const [address, setaddress] = useState('');
  // const [city, setcity] = useState('');
  // const [, setaddress] = useState('');
  // const [dateofbirth, setdateofbirth] = useState('');
  // const [gender, setgender] = useState('');
  

  const [editField, setEditField] = useState('');
  const [newText, setNewText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUserDataString = await AsyncStorage.getItem('userData');
        const storedUserData = JSON.parse(storedUserDataString);

        if (storedUserData) {
          setFullName(storedUserData.fullName);
          setPhoneNumber(storedUserData.phoneNumber);
          setEmail(storedUserData.email);
        }
      } catch (error) {
        console.error('Error retrieving user data from local storage:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = (fieldName) => {
    setEditField(fieldName);
    setNewText(getField(fieldName));
    setModalVisible(true);
  };

  const getField = (fieldName) => {
    switch (fieldName) {
      case 'fullName':
        return fullName;
      case 'phoneNumber':
        return phoneNumber;
      case 'email':
        return email;
      default:
        return '';
    }
  };

  const saveChanges = async () => {
    // Save changes based on the edited field
    switch (editField) {
      case 'fullName':
        setFullName(newText);
        break;
      case 'phoneNumber':
        setPhoneNumber(newText);
        break;
      case 'email':
        setEmail(newText);
        break;
      default:
        break;
    }

    try {
      // Update data in local storage
      const storedUserDataString = await AsyncStorage.getItem('userData');
      const storedUserData = JSON.parse(storedUserDataString);

      if (storedUserData) {
        storedUserData[editField] = newText;
        await AsyncStorage.setItem('userData', JSON.stringify(storedUserData));
      }
    } catch (error) {
      console.error('Error updating user data in local storage:', error);
    }

    setModalVisible(false);
    TostMessage();
  };

  return (
    <ScrollView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{ fontSize: 35 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            TostMessage();
            navigation.goBack();
          }}>
          <Ionic name="checkmark" style={{ fontSize: 35, color: '#3493D9' }} />
        </TouchableOpacity>
      </View>
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Image
          source={profileImage}
          style={{ width: 80, height: 80, borderRadius: 100 }}
        />
        <Text
          style={{
            color: '#3493D9',
          }}>
          Change profile photo
        </Text>
      </View>
      <View style={{ padding: 10 }}>
        <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, {}]}>
              <Feather
                name="user"
                size={25}
                style={{ color: Colors.heilightcolor }}
              />
            </View>

            <Text
              style={[styles.actionTitle, { color: '#15273F' }]}
              onPress={() => handleEdit('fullName')}>
              {fullName}
            </Text>
          </View>
          <TouchableOpacity>
            <AwesomeIcon
              name="pencil-alt"
              size={20}
              color={'#15273F'}
              onPress={() => handleEdit('fullName')}
            />
          </TouchableOpacity>
        </View>
        {/*  */}
        <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, {}]}>
              <Feather
                name="phone-call"
                size={25}
                style={{ color: Colors.heilightcolor }}
              />
            </View>
            <Text
              style={[styles.actionTitle, { color: '#15273F' }]}
              onPress={() => handleEdit('phoneNumber')}>
              {phoneNumber}
            </Text>
          </View>
          <TouchableOpacity>
            <AwesomeIcon
              name="pencil-alt"
              size={20}
              color={'#15273F'}
              onPress={() => handleEdit('phoneNumber')}
            />
          </TouchableOpacity>
        </View>
        {/*  */}
        <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, {}]}>
              <Feather
                name="mail"
                size={25}
                style={{ color: Colors.heilightcolor }}
              />
            </View>
            <Text
              style={[styles.actionTitle, { color: '#15273F' }]}
              onPress={() => handleEdit('email')}>
              {email}
            </Text>
          </View>
          <TouchableOpacity>
            <AwesomeIcon
              name="pencil-alt"
              size={20}
              color={'#15273F'}
              onPress={() => handleEdit('email')}
            />
          </TouchableOpacity>
        </View>
          {/*  */}
          <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, {}]}>
              <Feather
                name="mail"
                size={25}
                style={{ color: Colors.heilightcolor }}
              />
            </View>
            <Text
              style={[styles.actionTitle, { color: '#15273F' }]}
              onPress={() => handleEdit('email')}>
              {email}
            </Text>
          </View>
          <TouchableOpacity>
            <AwesomeIcon
              name="pencil-alt"
              size={20}
              color={'#15273F'}
              onPress={() => handleEdit('email')}
            />
          </TouchableOpacity>
        </View>
          {/*  */}
          <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, {}]}>
              <Feather
                name="mail"
                size={25}
                style={{ color: Colors.heilightcolor }}
              />
            </View>
            <Text
              style={[styles.actionTitle, { color: '#15273F' }]}
              onPress={() => handleEdit('email')}>
              {email}
            </Text>
          </View>
          <TouchableOpacity>
            <AwesomeIcon
              name="pencil-alt"
              size={20}
              color={'#15273F'}
              onPress={() => handleEdit('email')}
            />
          </TouchableOpacity>
        </View>
          {/*  */}
          <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, {}]}>
              <Feather
                name="mail"
                size={25}
                style={{ color: Colors.heilightcolor }}
              />
            </View>
            <Text
              style={[styles.actionTitle, { color: '#15273F' }]}
              onPress={() => handleEdit('email')}>
              {email}
            </Text>
          </View>
          <TouchableOpacity>
            <AwesomeIcon
              name="pencil-alt"
              size={20}
              color={'#15273F'}
              onPress={() => handleEdit('email')}
            />
          </TouchableOpacity>
        </View>
          {/*  */}
          <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, {}]}>
              <Feather
                name="mail"
                size={25}
                style={{ color: Colors.heilightcolor }}
              />
            </View>
            <Text
              style={[styles.actionTitle, { color: '#15273F' }]}
              onPress={() => handleEdit('email')}>
              {email}
            </Text>
          </View>
          <TouchableOpacity>
            <AwesomeIcon
              name="pencil-alt"
              size={20}
              color={'#15273F'}
              onPress={() => handleEdit('email')}
            />
          </TouchableOpacity>
        </View>
      </View>


      <View>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493D9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#EFEFEF',
          }}>
          Switch to Professional account
        </Text>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493D9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#EFEFEF',
          }}>
          Personal information setting
        </Text>
      </View>

      {/* Render Modal for Text Input */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit {editField}</Text>
            <TextInput
              style={styles.modalInput}
              onChangeText={(text) => setNewText(text)}
              value={newText}
            />
            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
              <Button title="Save" onPress={saveChanges} />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionTitle: {
    marginLeft: 19,
    fontSize: 20,
    color: '#15273F',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ViewDetails;
