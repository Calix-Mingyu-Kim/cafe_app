import React, { Component } from 'react';
import { Button, View, Text, TextInput} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import SettingsScreen from './SettingsScreen';
import HomeScreen from './HomeScreen';
import NotificationScreen from './NotifScreen';
import ChatScreen from './ChatScreen';

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
            iconName = 'home-outline';
        } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
        } else if (route.name == 'Notifications') {
            iconName = 'notifications-outline'
        } else {
            iconName = 'chatbubble-outline'
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
        },
    })}
    tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }}
    >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Chat" component={ChatScreen} />
    <Tab.Screen name="Notifications" component={NotificationScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
)
    
export default MainTabScreen;