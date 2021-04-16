import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Button, View, Text, TextInput, ActivityIndicator } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import MainTabScreen from './screens/MainTabScreen';
import RootStackScreen from './screens/RootStackScreen';

import firebase from 'firebase';
import "firebase/auth";
import SignUpScreen from './screens/SignUpScreen';

const firebaseConfig = {
  apiKey: "AIzaSyDfQ8JY2P9Sg_8hb2CrzirmPcfCB42VOqA",
  authDomain: "cafeapp-a6516.firebaseapp.com",
  projectId: "cafeapp-a6516",
  storageBucket: "cafeapp-a6516.appspot.com",
  messagingSenderId: "17113936975",
  appId: "1:17113936975:web:0e8226b8f4db1f224ba63a",
  measurementId: "G-8SC6DPNQXD"
};


if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
} 

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if(!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center'}}>
          <Text>LOADING..</Text>
        </View>
      )
    }
    if(!loggedIn) {
      return (
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      )
    }
    return (
      <NavigationContainer>
        <MainTabScreen />
      </NavigationContainer>
    )
  }
}

export default App