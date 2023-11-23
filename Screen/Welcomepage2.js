import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import Colors from '../constants/Colors';

const styles = {
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: '80%',
  },
  skipButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
  },
  skipButtonText: {
    color: Colors.heilightcolor,
    fontSize: 22,
    // fontWeight: 'bold',
  },
  continueButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingRight: 30,
    paddingLeft: 30,
    right: 0,
    // height: 0,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  continueButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  registerButton:{
    backgroundColor: Colors.btn,
    borderRadius: 20,
    height: 46,
    marginBottom: 30,
   
  },
};

export default function Welcomepage2() {
  const navigation = useNavigation();

  const handleSkip = () => {
    navigation.navigate('WelcomeScreen');
  };

  const handleContinue = () => {
    Alert.alert(
      'Continue to WelcomeScreen',
      'Are you sure you want to continue?',
      [
        {
          text: 'Skip',
          onPress: handleSkip,
        },
        {
          text: 'Continue',
          onPress: () => navigation.navigate('WelcomeScreen'),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ImageBackground
      source={require('../assets/images/welcome2.jpg')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.continueButton}>
        <Text style={{ color:'black', fontSize: 23,marginTop: 25,}}>discover</Text>
        <Text style={{marginBottom: 30, color:'black', fontSize: 16}}>there is Discription</Text>
        <Button title={'continue'} onPress={handleContinue} buttonStyle={styles.registerButton} />
      </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
