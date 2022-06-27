import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, TextInput } from 'react-native'

export default function HomeScreen({ navigation }) {
    const [name, setName] = useState('')

    return (
        <View style={style.container}>
            <Text style={style.font}>
                Home Screen
            </Text>
            <Button onPress={() => navigation.push('profile', { name: name, age: 28 })} title='Profile' />
            <TextInput onChangeText={(e) => setName(e)} style={style.input} placeholder='Type something' />
        </View>
    )
}
const style = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    font: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 4
    },
    input: {
        marginTop: 10,
        borderWidth: 2,
        heigth: 20,
        width: 170,
        fontSize: 20,
        textAlign: 'center',
    }
}