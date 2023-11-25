import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screen/LoginScreen';
import WelcomeScreen from './Screen/WelcomeScreen';
import SignupScreen from './Screen/SignupScreen';
import EnterOtp from './Screen/EnterOtp';
import Profile from './Screen/Profile';
import Home from './Screen/Home';
import HomeScreen from './Screen/HomeLandingpage';
import PropertyDetailsScreen from './Screen/ProppertyDetailsScreen';
import OwnerHome from './Screen/Ownerpage/OwnerHome';
import Alltenents from './Screen/Ownerpage/Alltenents';
import Selectlocation from './Screen/Ownerpage/Selectlocation';
import Welcomepage1 from './Screen/Welcomepage1';
import Welcomepage2 from './Screen/Welcomepage2';
import VerifyWith from './Screen/VerifyWith';
import CreatenewPassword from './Screen/Createnewpassword';
import Createnewproperty from './Screen/Ownerpage/Createnewproperty';
import EnterOtpNewPass from './Screen/EnterOtpNewPass';
import ViewDetails from './Screen/ViewDetails';
import SavedProperty from './Screen/SavedProperty ';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name='Welcomepage1' component={Welcomepage1} />
        <Stack.Screen name='Welcomepage2' component={Welcomepage2} />
        <Stack.Screen name="EnterOtp" component={EnterOtp} />
        <Stack.Screen name='Verifywith' component={VerifyWith} />
        <Stack.Screen name='CreatenewPassword' component={CreatenewPassword} />
        <Stack.Screen name='EnterOtpNewPass' component={EnterOtpNewPass} />
        <Stack.Screen name='Createnewproperty' component={Createnewproperty} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name='ViewDetails' component={ViewDetails} />
        <Stack.Screen name='SavedProperty' component={SavedProperty} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Alltenents" component={Alltenents} />
        <Stack.Screen name="OwnerHome" component={OwnerHome} />
        <Stack.Screen name="Selectlocation" component={Selectlocation} />
        <Stack.Screen name="PropertyDetails" component={PropertyDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
