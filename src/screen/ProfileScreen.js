import React from 'react'
import { Button, View, Text } from 'react-native'

export default function ({ route, navigation }) {
    let { name, age } = route.params
    return (
        <View style={style.container}>
            <Text style={style.font}>
                This is Profile
            </Text>
            <Text style={style.font}>
                {name}  
                {age}
            </Text>
            <Button onPress={() => navigation.navigate('home')} title='Home' />
        </View>
    )
}

const style = {
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px'
    },
    font: {
        fontSize: 40
    }
}