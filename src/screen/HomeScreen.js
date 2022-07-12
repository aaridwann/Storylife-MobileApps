import * as SecureStore from 'expo-secure-store';
import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AuthContext } from '../context/authContezt';
export default function HomeScreen({ navigation }) {
    const { auth, setAuth } = useContext(AuthContext)
    const [token, setToken] = useState(null)
    async function setItem() {
        await SecureStore.setItemAsync('token', 'talall')
    }
    async function getItem() {
        const res = await SecureStore.getItemAsync('token')
        setToken(res)
    }
    async function deleteItem() {
        const res = await SecureStore.deleteItemAsync('token')
        setToken(null)
        setAuth(null)
    }

    console.log(token)
    return (
        <View style={style.container}>
            <Text>{token}</Text>
            <Text>Home</Text>
            <TouchableOpacity onPress={setItem} style={{ width: 80, flex: 0.1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}><Text>set Item</Text></TouchableOpacity>
            <TouchableOpacity onPress={getItem} style={{ width: 80, flex: 0.1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}><Text>get ITem</Text></TouchableOpacity>
            <TouchableOpacity onPress={deleteItem} style={{ width: 80, flex: 0.1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}><Text>Delete ITem</Text></TouchableOpacity>
        </View>
    )
}
const style = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        margin: 20
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