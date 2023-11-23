import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
    Alert,
  } from "react-native";
  import { Text, Image } from 'react-native-elements';
  import React from "react";
  import { useNavigation } from '@react-navigation/native';
  import Spacing from "../constants/Spacing";
  import FontSize from "../constants/FontSize";
  import Colors from "../constants/Colors";
  import Font from "../constants/Font";
  import { useState,useRef } from "react";
  
 
  
  export default function EnterOtpNewPass() {
    const navigation = useNavigation();

 
    const [otp, setOtp] = useState(["", "", "", "","",""]);
    const otpInputRefs = [
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
    ]; // Refs for each OTP input field
  
    const handlPropertylistscreenPress = () => {
      navigation.navigate("CreatenewPassword");
    };
   return (
            <SafeAreaView style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('../assets/images/OTP.png')}
                  style={styles.image}
                />
              </View>
              <View style={styles.centermainContainer}>
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subTitle}>Please enter the OTP sent to your email or phone number.</Text>
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
      
                <TouchableOpacity  onPress={handlPropertylistscreenPress} style={styles.verifyButton}>
                  <Text style={styles.signInText}>Verify OTP</Text>
                </TouchableOpacity>
               
                {/* <TouchableOpacity onPress={handleCreateAccountPress} style={styles.createAccount}>
                  <Text style={styles.createAccountText}>Create a new account</Text>
                </TouchableOpacity> */}
              </View>
            </SafeAreaView>
          );
        }
  
    // Define your styles in a separate object
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: "center",
          backgroundColor: 'white',
          // backgroundColor: '#15beae',
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
        centermainContainer : {
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            backgroundColor : "white",
            alignItems: "center",
            height : "100%",
            width : "100%",
            elevation: 20,
        },
        verifyButton: {
          marginTop: 20,
          marginBottom: 15,
          width: 350,
          textAlign : "center",
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
          createAccount:{
            alignSelf: 'flex-end',
            marginRight: 30,
          },
          createAccountText:{
            color:'blue',
          },
      });