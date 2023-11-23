import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Text, Input, Button, Icon } from 'react-native-elements';
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CreatenewPassword = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [confirmpasswordError, setConfirmPasswordError] = useState('');
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);


  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError('');
  };
  const handleconfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setConfirmPasswordError('');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white' }}>
    <View style={styles.container}>
    <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/confirmnewpassword.jpg')}
          style={styles.image}
        />
      </View>

      <View style={styles.centermainContainer}>

        <Input
          placeholder={'New Password'}
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
        <Input
          placeholder={'Confirm Password'}
          leftIcon={<Ionicons name="lock-closed-outline" size={20} color={confirmpassword ? Colors.heilightcolor : '#666'} />}
          onChangeText={handleconfirmPasswordChange}
          rightIcon={
            <Icon
              name={showconfirmPassword ? 'eye-off' : 'eye'}
              type="ionicon"
              size={20}
              color="#666"
              onPress={() => setShowconfirmPassword(!showconfirmPassword)}
            />
          }
          secureTextEntry={!showconfirmPassword}
        />
        <Text style={styles.errorText}>{confirmpasswordError}</Text>
        

        <Button title={'Submit'} onPress={handleLogin} buttonStyle={styles.registerButton} />


      </View>
      </View>
    </ScrollView>
  );
};

export default CreatenewPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainbackgroundcolor,
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
    registerButton: {
    backgroundColor: Colors.btn,
    borderRadius: 10,
    height: 46,
    marginBottom: 10,
  },
  errorText: {
    marginTop: 4,
    color: 'red',
  },
});