import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

export default function Detail({ route, navigation }) {
    const { data } = route.params
    console.log(data)
    return (
        <ScrollView>
            <View style={style.container}>
                <Image source={{uri:data.download_url}} style={style.img}/>
                <Text style={style.caption}>
                    {data.author}
                </Text>
            </View>
        </ScrollView>
    )
}


const style = {
    container: {
        flex: 1,
        height:730,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        backgroundColor:'lightblue'
    },
    img:{
        width:'100%',
        height:'80%'
    },
    caption:{
        color:'white',
        marginTop:12,
        fontSize:20
    }
}