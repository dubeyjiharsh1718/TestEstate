import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import PropertyListScreen from './PropertyListScreen';
import HomeLandingpage from './HomeLandingpage';
import Menu from './Menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

const profile = 'Profile';
const menu = 'Menu';
const propertylist = "PropertyList";
const homelandingpage = "HomeLandingpage"
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
    screenOptions={{headerShown : false}}
      tabBarOptions={{
        activeTintColor: Colors.heilightcolor  
      }}
    >
      <Tab.Screen
        name={homelandingpage}
        component={HomeLandingpage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} /> 
          ),
        }}
      />
        <Tab.Screen
        name={propertylist}
        component={PropertyListScreen}
        options={{
          tabBarLabel: 'Property List',
          tabBarIcon: ({ color, size }) => (
            <Icon name="building" color={color} size={size} /> 
          ),
        }}
      />
     
      <Tab.Screen
        name={profile}
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen
        name={menu}
        component={Menu}
        options={{
          tabBarLabel: 'Memu',
          tabBarIcon: ({ color, size }) => (
            <Icon name="bars" color={color} size={size} /> 
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
