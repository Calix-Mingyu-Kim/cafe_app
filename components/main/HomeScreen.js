import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/storage"
import 'firebase/auth';

export default function HomeScreen ({ item }) {
  var moderator = false;
  const userID = firebase.auth().currentUser.uid
  if (item.moderator.includes(userID)) {
    console.log('user is a moderator');
    moderator = true;
  }
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home! {item.name}</Text>
      </View>
    );
  }
  
