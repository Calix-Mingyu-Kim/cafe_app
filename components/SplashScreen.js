import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import firebase from 'firebase'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions/index'

const Oval = () => {
  return <View style={styles.oval} />;
};

export class SplashScreen extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Oval />
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignInScreen')}>
              <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.signIn}>
                <Text style={styles.textSign}>Join</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateRoom')}>
              <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.signIn}>
                <Text style={styles.textSign}>Create</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    )
  }
}

const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch);

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
      alignItems: 'center',
      justifyContent: 'center',
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
    },
    oval: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "grey",
    },

});

export default connect(null, mapDispatchProps)(SplashScreen);