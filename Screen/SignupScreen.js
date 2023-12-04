import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Text, Input, Button, Icon } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import axios from 'axios';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const showToast = (message) => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};

const SignupScreen = ({ navigation }) => {

  const handleRegister = () => {
    navigation.navigate('Home');
  };

  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobile] = useState('');
  const [emailId, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedImage, setSelectedImage] = useState('Tenent');

  // State variables for validation
  const [fullNameError, setFullNameError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // const handleFullNameChange = (text) => {
  //   setFullName(text);
  //   setFullNameError('');
  // };

  // const handleMobileChange = (text) => {
  //   setMobile(text);
  //   setMobileError('');
  // };

  // const handleEmailChange = (text) => {
  //   setEmail(text);
  //   setEmailError('');
  // };

  // const handlePasswordChange = (text) => {
  //   setPassword(text);
  //   setPasswordError('');
  // };

  // const handleImageClick = (image) => {
  //   setSelectedImage(image);
  // };

  // const handleNavigateLogin = () => {
  //   navigation.navigate('Login');
  // };

  // const handleRegister = async () => {
  //   try {

  //     // Validate inputs
  //     if (!fullName) {
  //       setFullNameError('Full Name is required');
  //       return;
  //     }

  //     if (!mobileNumber) {
  //       setMobileError('Mobile Number is required');
  //       return;
  //     }

  //     if (!emailId) {
  //       setEmailError('Email is required');
  //       return;
  //     }

  //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     if (!emailRegex.test(emailId)) {
  //       setEmailError('Please enter a valid email address');
  //       return;
  //     }

  //     if (!password) {
  //       setPasswordError('Password is required');
  //       return;
  //     }

  //     if (password.length < 6) {
  //       setPasswordError('Password must be at least 6 characters long');
  //       return;
  //     }

  //     const userData = {
  //       requestId: '12345',
  //       requestData: {
  //         fullName: fullName,
  //         mobileNumber: mobileNumber,
  //         emailId: emailId,
  //         password: password,
  //         role: selectedImage,
  //         ownerId: null,
  //       },
  //     };

  //     // Make API call
  //       const response = await axios.post('https://hraprojectwa.azurewebsites.net/users/register', userData,{
  //         // fullName,
  //         // mobileNumber,
  //         // emailId,
  //         // password,
  //         // role: selectedImage.toLowerCase(),
  //         headers: {
  //           'Content-Type': 'application/json',
  //           accept: '*/*',
  //         },
  //       });
      
  //       console.log('API Response:', response.data);
  //         if (response.data.success) {
  //     showToast('Successfully registered');
  //     const responseUserdata =  response.data.responseData;
  //     const responseUserdataString = JSON.stringify(responseUserdata);
  //     await AsyncStorage.setItem('responseUserdata', responseUserdataString);
  //     navigation.navigate('EnterOtp');
  //   } else {
  //     showToast('Registration failed. Please try again.');
  //   }
  //       navigation.navigate('EnterOtp');
  //     } catch (error) {
  //       //console.error('API Error:', error.message);
  //       // Log additional error details, if available
  //        //console.error('API Error Details:', error.response?.data || 'No additional details available');
  //         if (error.response?.data?.errorCode === 'ERR_0002') {
  //     showToast('Mobile Number already exists');
  //   } else {
  //     showToast('An error occurred. Please try again.');
  //   }
  //     }
  // };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white' }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={[styles.item, selectedImage === 'Tenent' && { backgroundColor: '#9263e7' }]}
            onPress={() => handleImageClick('Tenent')}
          >
            <Image source={require('../assets/images/Tenentuser.png')} style={styles.imagetenent} />
            <Text style={{ color: selectedImage === 'Tenent' ? '#ff375e' : 'black', fontWeight: selectedImage === 'Tenent' ? 'bold' : 'normal', fontSize: 15 }}>Tenent</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.item, selectedImage === 'Owner' && { backgroundColor: '#9263e7' }]}
            onPress={() => handleImageClick('Owner')}
          >
            <Image source={require('../assets/images/tenentlogo1.png')} style={styles.imagetenent} />
            <Text style={{ color: selectedImage === 'Owner' ? '#ff375e' : 'black', fontWeight: selectedImage === 'Owner' ? 'bold' : 'normal', fontSize: 15 }}>Owner</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.centermainContainer}>
          <Input
            placeholder={'Full Name'}
            leftIcon={<Ionicons name="person-outline" size={20} color={fullName ? Colors.heilightcolor : '#666'} />}
            //onChangeText={handleFullNameChange}
            containerStyle={styles.inputContainer}
          />
          <Text style={styles.errorText}>{fullNameError}</Text>

          <Input
            placeholder={'Mobile'}
            leftIcon={<Ionicons name="call-outline" size={20} color={mobileNumber ? Colors.heilightcolor : '#666'} />}
            // onChangeText={handleMobileChange}
            containerStyle={styles.inputContainer}
          />
          <Text style={styles.errorText}>{mobileError}</Text>

          <Input
            placeholder={'Email ID'}
            leftIcon={<MaterialIcons name="alternate-email" size={20} color={emailId ? Colors.heilightcolor : '#666'} />}
            keyboardType="email-address"
            // onChangeText={handleEmailChange}
            containerStyle={styles.inputContainer}
          />
          <Text style={styles.errorText}>{emailError}</Text>

          <Input
            placeholder={'Password'}
            leftIcon={<Ionicons name="lock-closed-outline" size={20} color={password ? Colors.heilightcolor : '#666'} />}
            rightIcon={
              <Icon
                name={showPassword ? 'eye-off' : 'eye'}
                type="ionicon"
                size={20}
                color="#666"
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            secureTextEntry={!showPassword}
            // onChangeText={handlePasswordChange}
            containerStyle={styles.inputContainer}
          />
          <Text style={styles.errorText}>{passwordError}</Text>

          <Button
            title={'Register'}
            onPress={handleRegister}
            buttonStyle={styles.registerButton}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20, marginTop: 10 }}>
            <Text>Already registered?</Text>
            {/* <Text onPress={handleNavigateLogin} style={{ color: Colors.heilightcolor, fontWeight: '650' }}>
              {' '}
              Login
            </Text> */}
          </View>

          <Text style={{ textAlign: 'center', color: '#666', marginBottom: 20 }}>
            Or, register with email ...
          </Text>

          <View style={styles.socialButtonContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../assets/icons/google.png')}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../assets/icons/apple.png')}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../assets/icons/facebook.png')}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainbackgroundcolor,
  },
  centerContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  centermainContainer: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    paddingHorizontal: 25,
    paddingTop: 20,
    elevation: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 220,
  },
  image: {
    marginTop : 20,
    width: 180,
    height: 150,
    borderRadius : 50,
  },
  item: {
    width: '26%', 
    margin: 8,
    alignItems: 'center',
    elevation: 1,
    borderRadius: 10,
    paddingTop: 10,
    marginTop:30,
    height: 150,
    padding: 2,
  },
  imagetenent: {
    width: '100%',
    height: 140,
  },
  inputContainer: {
    marginBottom: -25,
  },
  registerButton: {
    backgroundColor: Colors.btn,
    borderRadius: 10,
    height: 46,
    marginTop: 20,
  },
  socialButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: Spacing, 
  },
  socialButton: {
    padding: Spacing/2, 
    backgroundColor: Colors.gray, 
    borderRadius: Spacing, 
    marginHorizontal: Spacing * 2,
  },
  socialIcon: {
    width: 35, 
    height: 35, 
  },
  errorText: {
    marginTop: 4,
    color: 'red',
  },
});

export default SignupScreen;
