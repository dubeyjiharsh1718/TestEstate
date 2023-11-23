import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { Text, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Spacing from '../constants/Spacing';
import FontSize from '../constants/FontSize';
import Colors from '../constants/Colors';
import Font from '../constants/Font';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

export default function VerifyWith() {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
    setInputError('');
  };

  const handleCreatenewpass = async () => {
    if (validateInput(inputValue)) {
      try {
        const response = await axios.post(
          `https://hraprojectwa.azurewebsites.net/users/forgot-password?userInput=${encodeURIComponent(inputValue)}`,
          { userInput: inputValue },
          {
            headers: {
              accept: '*/*' 
              
            },
          }
        );

        if (response.status === 200) {
          navigation.navigate('EnterOtpNewPass');
        } else {
          const errorData = response.data;
          console.error('API Error:', errorData);
          setInputError(errorData.message || 'An error occurred during the API call.');
        }
      } catch (error) {
        console.error('Error during API call:', error);
        setInputError('An unexpected error occurred.');
      }
    }
  };

  const validateInput = (input) => {
    // Validation logic for either mobile number or email ID
    const mobileRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (mobileRegex.test(input) || emailRegex.test(input)) {
      return true;
    } else {
      setInputError('Invalid input. Please enter a valid mobile number or email ID.');
      return false;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/forgotmessage.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.centermainContainer}>
        <View style={styles.centerContainer}>
          <View style={styles.VerifyWith}>
            <Text style={styles.VerifyWithtext}>
              How would you like to verify identity?{' '}
            </Text>
          </View>

          <Input
            placeholder={'Mobile Number or Email ID'}
            leftIcon={<Ionicons name="call-outline" size={20} color={inputValue ? Colors.heilightcolor : '#666'} />}
            onChangeText={handleInputChange}
            containerStyle={styles.inputContainer}
            errorMessage={inputError}
            placeholderTextColor={Colors.heilightcolor}
          />
        </View>

        <View style={styles.centerContainer}>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={handleCreatenewpass}>
            <Text style={styles.signInText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainbackgroundcolor,
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: -20,
  },
  centerContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  centermainContainer: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    elevation: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 160,
    marginBottom: 10,
  },
  VerifyWith: {
    width: 300,
    height: 80,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  signInButton: {
    width: 350,
    padding: Spacing,
    backgroundColor: Colors.btn,
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing / 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: Spacing,
  },
  signInText: {
    fontFamily: Font["poppins-bold"],
    color: "white",
    textAlign: "center",
    fontSize: FontSize.large,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  VerifyWithtext: {
    color: 'black',
  },
});
