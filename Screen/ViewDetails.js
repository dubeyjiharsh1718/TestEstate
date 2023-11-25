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
import { ScrollView } from 'react-native-gesture-handler';

const ViewDetails = ({ route, navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableName, setEditableName] = useState('Harsh');
  const [editablePhone, setEditablePhone] = useState('9874563120');
  const [editableEmail, setEditableEmail] = useState('dubeyjiharsj@gmail.com');
  const [editableCity, setEditableCity] = useState('Kalyan');
   const [editableState, setEditableState] = useState('Thane');
   const [editableDateofbirth, setEditableDateofbirth] = useState('01-05-2003');
   const [editableGender, setEditableGender] = useState('Male');

  const TostMessage = () => {
    ToastAndroid.show('Edited Successfully!', ToastAndroid.SHORT);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
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
        <Image
          source={require("../assets/images/tenent2.jpeg")}
          style={{ width: 80, height: 80, borderRadius: 100 }}
        />
        <Text style={{ color: '#3493D9' }}>Change profile photo</Text>
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
              onChangeText={(text) => setEditableName(text)}
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
        <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, {}]}>
              <Feather name="calendar" size={25} style={{ color: Colors.heilightcolor }} />
            </View>
            <TextInput
              style={[styles.actionTitle, { color: '#15273F' }]}
              value={editableDateofbirth}
              onChangeText={(text) => setEditableDateofbirth(text)}
              editable={isEditing}
            />
          </View>
        </View>
        <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, {}]}>
              <Feather name="users" size={25} style={{ color: Colors.heilightcolor }} />
            </View>
            <TextInput
              style={[styles.actionTitle, { color: '#15273F' }]}
              value={editableGender}
              onChangeText={(text) => setEditableGender(text)}
              editable={isEditing}
            />
          </View>
        </View>
        <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, {}]}>
              <Feather name="map" size={25} style={{ color: Colors.heilightcolor }} />
            </View>
            <TextInput
              style={[styles.actionTitle, { color: '#15273F' }]}
              value={editableState}
              onChangeText={(text) => setEditableState(text)}
              editable={isEditing}
            />
          </View>
        </View>
        <View style={styles.action}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconContainer, {}]}>
              <Feather name="map-pin" size={25} style={{ color: Colors.heilightcolor }} />
            </View>
            <TextInput
              style={[styles.actionTitle, { color: '#15273F' }]}
              value={editableCity}
              onChangeText={(text) => setEditableCity(text)}
              editable={isEditing}
            />
          </View>
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
          Personal information setting
        </Text>
      </View>
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
});

export default ViewDetails;
