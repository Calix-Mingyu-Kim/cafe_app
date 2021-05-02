import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function RoomList({ list, navigation }) {
    return (
        <View >
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('MainTabScreen')}>
                <Image source={{ uri: list.image }} style={[styles.listContainer]} />
            </TouchableOpacity>

            <View style={{ alignItems: "center" , justifyContent: "center"}}> 
                <Text numberOfLines={1} >
                    {list.name}
                </Text>
            </View> 
        </View>
    )
}

//export default withNavigation(RoomList);

const styles = StyleSheet.create({
    listContainer: {
        paddingVerticle: 32,
        paddingHorizontal: 16,
        borderRadius: 125,
        marginHorizontal: 12,
        //alignItems: "center",
        width: 250,
        height: 250,
    }
})