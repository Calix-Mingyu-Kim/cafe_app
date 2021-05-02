import React , { Component } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import firebase from 'firebase/app';
import "firebase/firestore";
import 'firebase/auth';

export class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: '',
      secureTextEntry: false
    }
    this.onSignUp = this.onSignUp.bind(this)
  }

  onSignUp() {
    const { email, password, name } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase.firestore().collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email
          })
        console.log(result) 
      })
      .catch((e) => {
        console.log(e)
      })
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Create Account, </Text>
        <Text style={styles.text_footer}>Sign up to get started!</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.action}>
          <TextInput 
            placeholder="Full Name" 
            style={styles.textInput} 
            autoCapitalize="none" 
            onChangeText={(name) => this.setState({ name })}
          />
        </View>
        <View style={styles.action}>
          <TextInput 
            placeholder="Email ID" 
            style={styles.textInput} 
            autoCapitalize="none" 
            onChangeText={(email) => this.setState({ email })}
          />
        </View>
        <View style={styles.action}>
          <TextInput 
            placeholder="Password" 
            secureTextEntry={this.state.secureTextEntry ? false : true}
            style={styles.textInput} 
            autoCapitalize="none" 
            onChangeText={(password) => this.setState({ password })}
          />
          <TouchableOpacity 
            onPress={() => this.setState({ secureTextEntry: !this.state.secureTextEntry })}
          >
            {this.state.secureTextEntry
            ?
            <Ionicons 
              name='eye-outline' 
              size={24} 
              color='grey' 
              paddingRight='30'
            /> 
            :
            <Ionicons 
              name='eye-off-outline' 
              size={24} color='grey' 
              paddingRight='30'
            /> 
            }
          </TouchableOpacity>

        </View>

        <View alignSelf="flex-end" marginBottom={50}>

        </View>

        <TouchableOpacity onPress={() => this.onSignUp()} style={styles.button} marginTop= '100'>
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
          <Text style={{fontWeight: 'bold'}}>I'm already a member,</Text>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Text style={{color: 'pink', fontWeight: 'bold'}}> Sign In</Text>
            </TouchableOpacity>
          

        </View>

         
      </View>
    </View>
    );
  }
}

export default SignUpScreen;
/*
const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    name: '',
    email: '',
    password: '',
    secureTextEntry: false
  });

  const nameInputChange = (val) => {
    setData({
      ...data,
      name: val
    });
  }

  const textInputChange = (val) => {
    setData({
      ...data,
      email: val
    });
  }

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

  const onSignUp = () => {
    const { name, email, password } = setData;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result)
    })
    .catch((e) => {
      console.log(e)
    })
  }

  
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Create Account, </Text>
        <Text style={styles.text_footer}>Sign up to get started!</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.action}>
          <TextInput 
            placeholder="Full Name" 
            style={styles.textInput} 
            autoCapitalize="none" 
            onChangeText={(val) => nameInputChange(val)}
          />
        </View>
        <View style={styles.action}>
          <TextInput 
            placeholder="Email ID" 
            style={styles.textInput} 
            autoCapitalize="none" 
            onChangeText={(val) => textInputChange(val)}
          />
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
            {data.secureTextEntry 
            ?
            <Ionicons 
              name='eye-outline' 
              size={24} 
              color='grey' 
              paddingRight='30'
            /> 
            :
            <Ionicons 
              name='eye-off-outline' 
              size={24} color='grey' 
              paddingRight='30'
            /> 
            }
          </TouchableOpacity>

        </View>

        <View alignSelf="flex-end" marginBottom={50}>

        </View>

        <TouchableOpacity onPress={()=>{}} style={styles.button} marginTop= '100'>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.signIn}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} marginTop= '50'>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.signIn}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Connect with Google</Text>
          </LinearGradient>
        </TouchableOpacity>
        


        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 80}}>
          <Text style={{fontWeight: 'bold'}}>I'm already a member,</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{color: 'pink', fontWeight: 'bold'}}> Sign In</Text>
            </TouchableOpacity>
          

        </View>

         
      </View>
    </View>
  );
}

export default SignInScreen;
*/
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