import React , {useState} from 'react';
import { Animated, Button, View, StyleSheet, TextInput, Platform, Text, TouchableOpacity, Dimensions} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';


const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: false
  });

  const textInputChange = (val) => {
    if( val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false
    });
  }}

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    });
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }

  
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome, </Text>
        <Text style={styles.text_footer}>Sign in to continue!</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.action}>
          <TextInput placeholder="Email ID" style={styles.textInput} autoCapitalize="none" />
        </View>
        <View style={styles.action}>
          <TextInput 
            placeholder="Password" 
            secureTextEntry={data.secureTextEntry ? false : true}
            style={styles.textInput} 
            autoCapitalize="none" 
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity 
            onPress={updateSecureTextEntry}
          >
            {data.secureTextEntry ?
            <Ionicons name='eye-outline' size={24} color='grey' paddingRight='30'/> :
            <Ionicons name='eye-off-outline' size={24} color='grey' paddingRight='30'/> }
          </TouchableOpacity>

        </View>

        <View alignSelf="flex-end" marginBottom={50}>
          <TouchableOpacity>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} marginTop= '50'>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.signIn}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Create Account</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} marginTop= '50'>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.signIn}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Connect with Google</Text>
          </LinearGradient>
        </TouchableOpacity>
        


        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 80}}>
          <Text style={{fontWeight: 'bold'}}>I'm a new user,</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={{color: 'pink', fontWeight: 'bold'}}> Sign Up</Text>
            </TouchableOpacity>
          

        </View>

         
      </View>
    </View>
  );
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    paddingVertical: 50,
    paddingHorizontal: 20
  },
  text_header: {
    fontWeight: 'bold',
    fontSize: 30
  },
  text_footer: {
    color: 'grey',
    backgroundColor: '#fff',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#f2f2f2',
    paddingBottom: 5,
    alignItems: 'center'
  },
  textInput: {
    flex: 1,
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#05375a'
  },
  button: {
    alignItems: 'center',
    marginTop: 15,
  },
  signIn: {
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});