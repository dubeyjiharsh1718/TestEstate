import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profileowner from './Profileowner';
import OwnerLanddpage from './OwnerLandpage';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';

const profileowner = 'Profileowner'
const Ownerhomelandpage = "OwnerHome"
const Tab = createBottomTabNavigator();

const OwnerHome = () => {
  return (
    <Tab.Navigator
    screenOptions={{headerShown : false}}
      tabBarOptions={{
        activeTintColor: Colors.heilightcolor  
      }}
    >
      <Tab.Screen
        name={Ownerhomelandpage}
        component={OwnerLanddpage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} /> 
          ),
        }}
      />
        <Tab.Screen
        name={profileowner}
        component={Profileowner}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} /> 
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default OwnerHome;
