import React, { useState } from 'react';
import { ScrollView, View, Pressable, StyleSheet, Image } from 'react-native';
import { Text, Input, Button, Icon } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import Spacing from '../../constants/Spacing';
import { Surface } from 'react-native-paper'
import Colors from '../../constants/Colors';


const Addtenents = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [mobileNumber, setMobile] = useState('');
    const [emailId, setEmail] = useState('');


    const handleFullNameChange = (text) => {
        setFullName(text);
        };
      
        const handleMobileChange = (text) => {
          setMobile(text);
        };
         const handleEmailChange = (text) => {
     setEmail(text);
   };


  const handleRegister = () => {
    navigation.navigate('Home');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white' }}>
         <Surface style={styles.header}>
        <View style={{ marginLeft: 20 }}>
          <Feather
            name='arrow-left'
            size={25}
            style={{ color: '#15273F' }}
            onPress={navigation.goBack}
          />
        </View>
        <View style={{}}>
          <Text style={styles.headerText}>Add Tenent</Text>
        </View>
        <View style={{ marginRight: 20 }}>
          <Pressable>
            <Feather
              name=''
              size={25}
              style={{ color: '#15273F' }}
            />
          </Pressable>
        </View>
      </Surface>
      <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image
          source={require('../../assets/images/addtenentform.jpg')}
          style={styles.image}
        />
        </View>
        <View style={styles.centermainContainer}>
          <Input
            placeholder={'Tenent Name'}
            leftIcon={<Ionicons name="person-outline" size={20} color={fullName ? Colors.heilightcolor : '#666'} />}
            containerStyle={styles.inputContainer}
            onChangeText={handleFullNameChange}
          />

          <Input
            placeholder={'Mobile'}
            leftIcon={<Ionicons name="call-outline" size={20} color={mobileNumber ? Colors.heilightcolor : '#666'} />}
            containerStyle={styles.inputContainer}
            onChangeText={handleMobileChange}
          />

          <Input
            placeholder={'Email ID'}
            leftIcon={<MaterialIcons name="alternate-email" size={20} color={emailId ? Colors.heilightcolor : '#666'} />}
            keyboardType="email-address"
            containerStyle={styles.inputContainer}
            onChangeText={handleEmailChange}
          />


          <Button
            title={'Add Tenent'}
            buttonStyle={styles.registerButton}
          />


          
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    elevation: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#15273F'
  },
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
    width: 300,
    height: 180,
    borderRadius : 10,
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
});

export default Addtenents;
