import React, { Component, useState } from 'react';
import { View, StyleSheet, Text, Dimensions, Image, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import firebase from 'firebase'
import "firebase/firestore"
import "firebase/storage"
import 'firebase/auth';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions/index'

export class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    }
  }

  UNSAFE_componentWillMount() {
    const roomRef = firebase.firestore()
      .collection("rooms")
      .onSnapshot((querySnapshot) => {
      const rooms = [];
      
      querySnapshot.forEach(documentSnapshot => {
        rooms.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      this.setState({
        rooms: rooms
      })
      console.log(rooms); 
    });
    //readRoomData();
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.showImage}>
            <FlatList 
              data={this.state.rooms}
              keyExtractor={item => item.name} 
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <View >
                <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('MainTabScreen', item)}>
                    <Image source={{ uri: item.image }} style={[styles.listContainer]} />
                </TouchableOpacity>
    
                <View style={{ alignItems: "center" , justifyContent: "center"}}> 
                    <Text numberOfLines={1} >
                        {item.name}
                    </Text>
                </View> 
            </View>}
            />
          </View>
        {/*<View style={styles.header}>
        </View>*/}
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
      backgroundColor: '#009387',
      
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
      width: 250,
      height: 250, 
      borderRadius: 125,
      backgroundColor: 'grey'
    },
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
    showImage: {
      flex: 2,
      paddingTop: 32,
      paddingBottom: 32,
      paddingLeft: 16,
      paddingRight: 16,
      justifyContent: 'center',
    },
    showBlankImage: {
      width: 250,
      height: 250, 
      borderRadius: 125,
      backgroundColor: 'grey'
    },
    listContainer: {
      paddingVerticle: 32,
      paddingHorizontal: 16,
      borderRadius: 125,
      marginHorizontal: 12,
      //alignItems: "center",
      width: 250,
      height: 250,
  }
});

export default connect(null, mapDispatchProps)(SplashScreen);