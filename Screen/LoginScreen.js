import React, { useState, useEffect } from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet, Alert, Image,ActivityIndicator  } from 'react-native';
import { Text, Input, Button, Icon } from 'react-native-elements';
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(true); 

  
  useEffect(() => {
    checkUserLogin();
  }, []);

  const showToast = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError('');
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError('');
  };

  const handleNavigateSignup = () => {
    navigation.navigate('Verifywith');
  };

  const handleSkip = () => {
    navigation.navigate('OwnerHome');
  };

  const handleLogin = async () => {
    try {
      if (!email) {
        setEmailError('Email or Mobile is required');
        return;
      }
  
      if (!password) {
        setPasswordError('Password is required');
        return;
      }
  
      const loginData = {
        requestId: '12345',
        requestData: {
          loginInput: email,
          password: password,
        },
      };
  
      const response = await axios.post('https://hraprojectwa.azurewebsites.net/users/login', loginData, {
        headers: {
          'Content-Type': 'application/json',
          accept: '*/*',
        },
      });
  
      await AsyncStorage.setItem('userLoggedIn', 'true');
  
      console.log('Login API Response:', response.data);
  
      if (response.data.success) {
        const userRole = response.data?.responseData?.role;
        if (userRole) {
          await AsyncStorage.setItem('userRole', userRole);
        }
  
        if (userRole === 'Owner') {
          navigation.navigate('OwnerHome');
        } else if (userRole === 'Tenent') {
          navigation.navigate('Home');
        }
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Successfully logged in!',
        });
      } else {
        showToast('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login API Error:', error.message);
      if (error.response?.data?.errorCode === 'ERR_0001') {
        showToast('Invalid credentials. Please try again.');
      } else {
        showToast('An error occurred. Please try again.');
      }
    }
  };
  

  const checkUserLogin = async () => {
    try {
      const userLoggedIn = await AsyncStorage.getItem('userLoggedIn');
      if (userLoggedIn === 'true') {
        const userRole = await AsyncStorage.getItem('userRole');
        if (userRole === 'Tenent') {
          navigation.navigate('Home');
        } else if (userRole === 'Owner') {
          navigation.navigate('OwnerHome');
        }
      }
    } catch (error) {
      console.error('Check User Login Error:', error.message);
    }
      finally {
        setLoading(false);
      }
    };
  
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.btn} />
        </View>
      );
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white' }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/loginlogo.jpg')}
            style={styles.image}
          />
        </View>

        <View style={styles.centermainContainer}>
          <Input
            placeholder={'Email ID or Mobile'}
            leftIcon={<Ionicons name="call-outline" size={20} color={email ? Colors.heilightcolor : '#666'} />}
            keyboardType="email-address"
            onChangeText={handleEmailChange}
            containerStyle={styles.inputContainer}
          />
          <Text style={styles.errorText}>{emailError}</Text>

          <Input
            placeholder={'Password'}
            leftIcon={<Ionicons name="lock-closed-outline" size={20} color={password ? Colors.heilightcolor : '#666'} />}
            onChangeText={handlePasswordChange}
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
          />
          <Text style={styles.errorText}>{passwordError}</Text>

          <TouchableOpacity onPress={handleNavigateSignup}>
            <Text style={styles.ForgotpassText}>Forgot your password?</Text>
          </TouchableOpacity>

          <Button title={'Login'} onPress={handleLogin} buttonStyle={styles.registerButton} />

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20, marginTop: 6 }}>
            <Text>Don't have an account?</Text>
            <Text onPress={() => navigation.navigate('SignupScreen')} style={{ color: Colors.heilightcolor, fontWeight: '650' }}>
              {' '}
              Signup
            </Text>
          </View>

          <Text style={{ textAlign: 'center', color: '#666', }}>
            Or continue with
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

export default LoginScreen;

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
    paddingHorizontal: 30,
    paddingTop: 34,
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
    height: 180,
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
    marginBottom: -8,
  },
  registerButton: {
    backgroundColor: Colors.btn,
    borderRadius: 10,
    height: 46,
    marginBottom: 10,
  },
  ForgotpassText:{
    fontFamily: Font['poppins-bold'],
    marginBottom: 10,
    color: Colors.heilightcolor,
    textAlign: "right",
    marginTop:10,
    marginRight: 20,
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
   loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
