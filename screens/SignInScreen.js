import React , {useState} from 'react';
import { Button, View, StyleSheet, TextInput, Platform, Text, TouchableOpacity, Dimensions} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SignInScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome, </Text>
        <Text style={styles.text_footer}>Sign in to continue!</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.action}>
          <TextInput placeholder="Email ID" style={styles.textInput} />
        </View>
        <View style={styles.action}>
          <TextInput placeholder="Password" style={styles.textInput} />
        </View>

        <View alignSelf="flex-end">
          <TouchableOpacity>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity>
            <Text>Login</Text>
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
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 10,
    color: '#05375a'
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  signIn: {
    width: '100%',
    height: 50,
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