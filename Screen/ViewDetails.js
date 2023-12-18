import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../constants/Colors';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ViewDetails = ({ route, navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingStyle, setIsEditingStyle] = useState(false);
  const [action, setaction] = useState(false);
  const [editableName, setEditableName] = useState('Harsh');
  const [editablePhone, setEditablePhone] = useState('9874563120');
  const [editableEmail, setEditableEmail] = useState('dubeyjiharsj@gmail.com');
  const [editableCity, setEditableCity] = useState('Kalyan');
   const [editableState, setEditableState] = useState('Thane');
   const [editableDateofbirth, setEditableDateofbirth] = useState('01-05-2003');
   const [editableGender, setEditableGender] = useState('Male');
   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
   const [selectedDate, setSelectedDate] = useState(new Date());
   const [isDateEditing, setIsDateEditing] = useState(false);

   const handleEditDate = () => {
     setIsDateEditing(true);
     setDatePickerVisibility(true);
   };

   const handleDateConfirm = (date) => {
     setSelectedDate(date);
     setIsDateEditing(false);
     setDatePickerVisibility(false);
   };


  const TostMessage = () => {
    ToastAndroid.show('Edited Successfully!', ToastAndroid.SHORT);
  };

  const [profileImage, setProfileImage] = useState(
    require("../assets/images/tenent2.jpeg")
  );
  const handleImageSelect = () => {
    ImagePicker.openPicker({
    }).then((response) => {
      if (!response.didCancel) {
        setProfileImage({ uri: response.path });
      }
    }).catch((error) => {
      console.log('ImagePicker Error: ', error);
    });
  };



  const handleEdit = () => {
    setIsEditing(true);
    setIsEditingStyle(true);
    setaction(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    setIsEditingStyle(false);
    setaction(false);
    TostMessage();
    navigation.goBack();
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
        {isEditing ? (
          <TouchableOpacity onPress={handleSave}>
            <Ionic name="checkmark" style={{ fontSize: 35, color: '#3493D9' }} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleEdit}>
            <AwesomeIcon name="pencil-alt" size={20} color={'#15273F'} />
          </TouchableOpacity>
        )}
      </View>
      <View style={{ padding: 20, alignItems: 'center' }}>
        <TouchableOpacity onPress={handleImageSelect}>
          <Image
            source={profileImage}
            style={{ width: 90, height: 90, borderRadius: 100 }}
          />
          <FontAwesome
            name='camera'
            size={25}
            style={{ color: Colors.heilightcolor, marginTop: -20, marginLeft: 60 }}
          />
        </TouchableOpacity>
        <View style={{marginTop: 10}}>
        <Text style={{ color: '#3493D9', }}>Change profile photo</Text></View>
      </View>
      <View style={{ padding: 10 }}>
        <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, {}]}>
              <Feather name="user" size={25} style={{ color: Colors.heilightcolor }} />
            </View>
            <TextInput
            style={[styles.actionTitle, { color: '#15273F' }]}
              value={editableName}
              editable={isEditing}
            />
          </View>
        </View>
        <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, {}]}>
              <Feather
                name="phone-call"
                size={25}
                style={{ color: Colors.heilightcolor }}
              />
            </View>
            <TextInput
             style={[styles.actionTitle, { color: '#15273F' }]}
              value={editablePhone}
              onChangeText={(text) => setEditablePhone(text)}
              editable={isEditing}
            />
          </View>
        </View>
        <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, {}]}>
              <Feather name="mail" size={25} style={{ color: Colors.heilightcolor }} />
            </View>
            <TextInput
           style={[styles.actionTitle, { color: '#15273F' }]}
              value={editableEmail}
              onChangeText={(text) => setEditableEmail(text)}
              editable={isEditing}
            />
          </View>
        </View>

        <View style={action ? styles.actionEditing : styles.action}>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <TouchableOpacity >
      <View style={[styles.iconContainer, {}]}>
        <Feather
          name="calendar"
          size={25}
          style={{ color: Colors.heilightcolor }}
        />
      </View>
    </TouchableOpacity>
    {isDateEditing ? (
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={() => setIsDateEditing(false)}
      />
    ) : (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text
          style={{ color: '#15273F', fontSize: 20, marginLeft: 19 }}
          onPress={handleEditDate}
        >
          {selectedDate.getFullYear().toString()}
        </Text>
        <Text style={{ color: '#15273F', fontSize: 20 }}>
          {' ' + selectedDate.toLocaleDateString([], { month: 'short' })}
        </Text>
        <Text style={{ color: '#15273F', fontSize: 20 }}>
          {' ' + selectedDate.getDate().toString().padStart(2, '0')}
        </Text>
      </View>
    )}
  </View>
</View>


        <View style={action ? styles.actionEditing : styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, {}]}>
              <Feather name="users" size={25} style={{ color: Colors.heilightcolor }} />
            </View>
            <TextInput
              style={isEditingStyle ? styles.actionEditing : styles.action}
              value={editableGender}
              onChangeText={(text) => setEditableGender(text)}
              editable={isEditing}
            />
          </View>
        </View>
        <View style={action ? styles.actionEditing : styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, {}]}>
              <Feather name="map" size={25} style={{ color: Colors.heilightcolor }} />
            </View>
            <TextInput
                style={isEditingStyle ? styles.actionEditing : styles.action}
              value={editableState}
              onChangeText={(text) => setEditableState(text)}
              editable={isEditing}
            />
          </View>
        </View>
        <View style={action ? styles.actionEditing : styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, {}]}>
              <Feather name="map-pin" size={25} style={{ color: Colors.heilightcolor }} />
            </View>
            <TextInput
              style={isEditingStyle ? styles.actionEditing : styles.action}
              value={editableCity}
              onChangeText={(text) => setEditableCity(text)}
              editable={isEditing}
            />
          </View>
        </View>
      </View>
      {/* <View>
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
      </View> */}
      <DateTimePickerModal
      isVisible={isDatePickerVisible}
      mode="date"
      onConfirm={handleDateConfirm}
      onCancel={() => setDatePickerVisibility(false)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  action: {
    marginTop: 3,
    paddingHorizontal: 29,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'balck',
    color: '#15273F',
    fontSize: 20,
  },
  actionEditing: {
    marginTop: 10,
    paddingHorizontal: 29,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    color: '#15273F',
    fontSize: 20,
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
});

export default ViewDetails;
