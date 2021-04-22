import firebase from 'firebase/app';
import 'firebase/auth';
import { View, Text } from 'react-native'

import { USER_STATE_CHANGE } from '../constants/index';
import { collection, doc } from "firebase/firestore";
require('firebase/firestore');

export function fetchUser() {
  return ((dispatch) => {
    firebase.firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then(snapshot => {
        if(snapshot.data() != null) {
          //console.log(snapshot.data());
          dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() })
        } else {
          console.log('does not exist')
        }
      })
  })
}