import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { Button, View, Text, TextInput, ActivityIndicator} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import MainTabScreen from './screens/MainTabScreen';
import RootStackScreen from './screens/RootStackScreen';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large'/>
      </View>
    )
  }

  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <MainTabScreen />*/}
    </NavigationContainer>

  );
}

export default App;