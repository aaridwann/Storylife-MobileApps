import React, { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import Storage from 'react-native-storage';

export default function HomeScreen({ navigation }) {
    const [name, setName] = useState('')
  
    storage.load({ key: 'token' })
        .then(data => { console.log(data) })
        .catch(err => console.log(err))

  
  
        return (
        <View style={style.container}>
            <Text>Home</Text>
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