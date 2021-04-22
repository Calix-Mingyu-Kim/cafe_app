import React, { Component } from 'react';
import firebase from 'firebase'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions/index'

import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingsScreen from './main/SettingsScreen';
import HomeScreen from './main/HomeScreen';
import NotificationScreen from './main/NotifScreen';
import ChatScreen from './main/ChatScreen';

const Tab = createBottomTabNavigator();

export class MainTabScreen extends Component {
  render() {
    return (
      <Tab.Navigator initialRouteName='Home' labeled={false} 
        tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name='Home' component={HomeScreen}
          options={{
          tabBarIcon: ({ focused, color, size}) => (
            <Ionicons name='home-outline' size={size} color={color} />
          )
          }} />
        <Tab.Screen name='Chat' component={ChatScreen}
          options={{
          tabBarIcon: ({ focused, color, size}) => (
            <Ionicons name='chatbubble-outline' size={size} color={color} />
          )
          }} />
        <Tab.Screen name='Notifications' component={NotificationScreen}
          options={{
          tabBarIcon: ({ focused, color, size}) => (
            <Ionicons name='notifications-outline' size={size} color={color} />
          )
          }} />
        <Tab.Screen name='Settings' component={SettingsScreen}
          options={{
          tabBarIcon: ({ focused, color, size}) => (
            <Ionicons name='settings-outline' size={size} color={color} />
          )
          }} />
      </Tab.Navigator>
    )
  }
}

export default MainTabScreen;