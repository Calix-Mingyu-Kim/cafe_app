import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, FlatList, StatusBar } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/storage"
import 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen ({ item }) {
  
  const [DATA, setDATA] = useState([
    { title: "Edit User Profile" },
    { title: "Order History"}, //show monthly order status
  ])
  var moderator = false;
  const userID = firebase.auth().currentUser.uid
  if (item.moderator.includes(userID)) {
    moderator = true;
    setDATA(DATA => [...DATA, '{title: "Edit Menu"}'])  //put inside return
  }

  return (
      <SafeAreaView style={styles.container}>
        <FlatList
          keyExtractor={( item ) => item.title}
          data={ DATA }
          renderItem={({ item }) => (
            <Text>{item.title}</Text>
          )} 
        />
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
});
