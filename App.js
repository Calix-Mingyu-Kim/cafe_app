import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text, TextInput} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import MainTabScreen from './screens/MainTabScreen';
import RootStackScreen from './screens/RootStackScreen';

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/*<MainTabScreen />*/}
    </NavigationContainer>

  );
}

export default App;