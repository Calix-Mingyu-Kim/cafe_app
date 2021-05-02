import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/storage"
import 'firebase/auth';

export default function CreateRoom({ navigation }) {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [name, setName] = useState('');

  useEffect(() => {
    (async () => {
      //const cameraStatus = await Camera.requestPermissionsAsync();
      //setHasCameraPermission(cameraStatus.status === 'granted');

      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');


    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadRoom = async () => {
    const uri = image;
    const jpg = name;
    
    //Add so when image && name is null, it displays an error message
    //Add Error message for same room name

    const childPath = `room/${firebase.auth().currentUser.uid}`;

    const response = await fetch(uri);
    const blob = await response.blob();

    const task = firebase
      .storage()
      .ref()
      .child(childPath)
      .put(blob);

    const taskProgress = snapshot => {
        console.log(`transferred: ${snapshot.bytesTransferred}`)
    }

    const taskCompleted = () => {
        task.snapshot.ref.getDownloadURL().then((snapshot) => {
            savePostData(snapshot);
            console.log(snapshot)
        })
    }

    const taskError = snapshot => {
        console.log(snapshot)
    }

    task.on("state_changed", taskProgress, taskError, taskCompleted);

  }

  const savePostData = (downloadURL) => {
    const userID = firebase.auth().currentUser.uid
    firebase.firestore()
        .collection('rooms')
        .doc(name)
        .set({
            name,
            image,
            moderator: [userID]
        })
  }


  if (//hasCameraPermission === null || 
    hasGalleryPermission === false) {
    return <View />;
  }
  if (//hasCameraPermission === false || 
    hasGalleryPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cameraContainer}>
        {!image && (
          <View style={styles.showBlankImage}>
            <Text>Add Image</Text> 
          </View>
        )}
        {image && <Image source={{ uri: image }} style={styles.showImage} />}
      </View>
      <View> 
        <TextInput placeholder="Name" style={styles.textInput} autoCapitalize="none" onChangeText={(name) => setName(name)} />
          {console.log(name)}
      </View>
    <View style={styles.button}>
        <Button title="Take Picture" onPress={() => takePicture()} />
        <Button title="Pick Image From Gallery" onPress={() => pickImage()} />
        <Button title="Save" onPress={() => {uploadRoom(); setTimeout(() => {navigation.goBack()},1000)}} />
      </View>
    </View>
  );
}

CreateRoom.title = "Create Room";

const styles = StyleSheet.create({
  cameraContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 36
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1
  },
  showImage: {
    width: 250,
    height: 250, 
    borderRadius: 125,
  },
  showBlankImage: {
    width: 250,
    height: 250, 
    borderRadius: 125,
    backgroundColor: 'grey'
  },
  button: {
    flex:1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  textInput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 2,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },

})