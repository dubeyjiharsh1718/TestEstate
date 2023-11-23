import React from 'react';
import { View, Text, Image, TouchableOpacity,ImageBackground  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';

const styles = {
  container: {
    flex: 1,
    // backgroundColor: '#15beae',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 160,
    borderRadius: 30,
  },
  signUpButton: {
    padding: 10,
    backgroundColor: Colors.btn,
    marginHorizontal: 7,
    borderRadius: 10,
  },
  signUpButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  haveAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  haveAccountText: {
    color: 'white',
    fontWeight: 'bold',
  },
  logInButton: {
    fontWeight: 'bold',
    fontSize: 15,
    color: Colors.heilightcolor,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
};

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
    source={require('../assets/images/welcomepageimg.jpg')} // replace with your image path
    style={styles.backgroundImage}
  >
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'space-around', margin: 4 }}>
        <Text style={styles.title}>Let's Get Started!</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image
            style={styles.image}
          />
        </View>
        <View style={{ marginTop: 4 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignupScreen')}
            style={styles.signUpButton}
          >
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.haveAccountContainer}>
            <Text style={styles.haveAccountText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.logInButton}> Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
    </ImageBackground>

  );
}
