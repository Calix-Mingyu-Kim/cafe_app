import React, { Component } from 'react';
import { View, Text } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SignUpScreen from './components/screens/SignUpScreen';
import SignInScreen from './components/screens/SignInScreen';
import SplashScreen from './components/SplashScreen'; //for future implementation
import MainTabScreen from './components/MainTabScreen';
import CreateRoom from './components/screens/CreateRoom';

import firebase from 'firebase/app';
import "firebase/firestore";
import 'firebase/auth';

import { Appbar } from 'react-native-paper';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyDfQ8JY2P9Sg_8hb2CrzirmPcfCB42VOqA",
  authDomain: "cafeapp-a6516.firebaseapp.com",
  projectId: "cafeapp-a6516",
  storageBucket: "cafeapp-a6516.appspot.com",
  messagingSenderId: "17113936975",
  appId: "1:17113936975:web:0e8226b8f4db1f224ba63a",
  measurementId: "G-8SC6DPNQXD"
};

function CustomNavigationBar({ navigation, previous}) {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Create Room" />
    </Appbar.Header>
  );
}

if (firebase.apps.length === 0) {
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
          <Stack.Navigator initialRouteName="SignInScreen">
            <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
  
    return ( 
        <Provider store={store}>
            <NavigationContainer>
              <Stack.Navigator 
                initialRouteName="SplashScreen" 
                screenOptions={{
                  header: (props) => <CustomNavigationBar {...props} />,
                }}
              >
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="MainTabScreen" component={MainTabScreen} navigation={this.props.navigation} options={{ headerShown: false }}/>
                <Stack.Screen name="CreateRoom" component={CreateRoom} navigation={this.props.navigation}/>
              </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
  }
}

export default App