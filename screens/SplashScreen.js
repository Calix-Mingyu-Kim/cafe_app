import React from 'react';
import { Button, View, StyleSheet, TextInput, Text, Dimensions, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';


const SplashScreen = ( {navigation} ) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image 
        animation="bounceIn"
        duration="1500"
        source={require('../assets/icon.png')}
        style={styles.logo}
        resizeMode='stretch'
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text>Receive notifications from your favorite places to eat!</Text>
        <Text>Sign in with account</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.signIn}>
              <Text style={styles.textSign}>Get Started</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
}

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#009387'
    },
    header: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
    },
    logo: {
      width: height_logo,
      height: height_logo
    },
    title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
    },
    text: {
      color: 'grey',
      marginTop: 30
    },
    button: {
      alignItems: 'flex-end',
      marginTop: 30
    },
    signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
    },
    textSign: {
      color: 'white',
      fontWeight: 'bold'
    }
});