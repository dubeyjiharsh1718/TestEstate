import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";

export default function EnterOtp() {
  const [userData, setUserData] = useState(null);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpInputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUserDataString = await AsyncStorage.getItem('responseUserdata');
        const storedUserData = JSON.parse(storedUserDataString);
        setUserData(storedUserData);
        // console.log(storedUserData.role);
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      }
    };
    fetchData();
  }, []);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text !== '' && index < otp.length - 1) {
      otpInputRefs[index + 1].current.focus();
    }
  };

  const handlPropertylistscreenPress = async () => {
    try {
      const enteredOtp = otp.join('');

      const response = await axios.post(
        'https://hraprojectwa.azurewebsites.net/users/verify-otp',
        {
          requestId: 'string',
          requestData: {
            userId: userData.userId,
            otp: parseInt(enteredOtp),
          },
        },
        {
          headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.success) {
        console.log('OTP Verification Successful');

        if (userData.role === 'tenent') {
          navigation.navigate('Selectlocation');
        } else if (userData.role === 'Owner') {
          navigation.navigate('OwnerHome');
        } else {
          console.log('Unsupported role:', userData.role);
        }
      } else {
        console.log('OTP Verification Failed');
        Alert.alert('Error', 'Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/OTP.png')} style={styles.image} />
      </View>
      <View style={styles.centermainContainer}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subTitle}>Please enter the OTP sent to your email or phone number. </Text>
        <View style={styles.otpInputContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              value={digit}
              onChangeText={(text) => handleOtpChange(text, index)}
              ref={otpInputRefs[index]}
              keyboardType="numeric"
              maxLength={1}
            />
          ))}
        </View>
        <TouchableOpacity onPress={handlPropertylistscreenPress} style={styles.verifyButton}>
          <Text style={styles.signInText}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: 'white',
  },
  otpInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  otpInput: {
    borderWidth: 1,
    borderColor: Colors.btn,
    borderRadius: Spacing,
    padding: Spacing,
    marginVertical: Spacing / 2,
    marginRight: 10,
  },
  centermainContainer: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "white",
    alignItems: "center",
    height: "100%",
    width: "100%",
    elevation: 20,
  },
  verifyButton: {
    marginTop: 20,
    marginBottom: 15,
    width: 350,
    textAlign: "center",
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
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 230,
  },
  title: {
    fontSize: FontSize.xLarge,
    color: Colors.heilightcolor,
    fontFamily: Font["poppins-bold"],
    marginVertical: Spacing * 2,
  },
  subTitle: {
    fontFamily: Font["poppins-semiBold"],
    fontSize: FontSize.large,
    maxWidth: "60%",
    textAlign: "center",
  },
});

