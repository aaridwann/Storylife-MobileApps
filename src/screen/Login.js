import React, { useEffect, useState } from 'react'
import { Dimensions, Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useFonts, AlexBrush_400Regular } from '@expo-google-fonts/alex-brush'
import Fetching from '../helper/Fetch';

let go = 'https://img2.pngdownload.id/20180610/jeu/kisspng-google-logo-google-search-google-now-5b1dacc1ad0462.3234288415286714257087.jpg'
let apiUrl = 'https://jsonplaceholder.typicode.com/photos'

export default function Login() {
    let ScreenHeight = Dimensions.get("window").height;
    let [fontsLoaded] = useFonts({ AlexBrush_400Regular });
    let [data, setData] = useState({ username: '', password: '' })
    let [result, setResult] = useState([])
    const [loading, setLoadig] = useState(false)

    async function Login() {
        setLoadig(!loading)
        setTimeout(() => {
            setLoadig(false)
            setData({ username: '', password: '' })
        }, 4000)
        console.log(data)
    }
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    } else {
        return (
            <ScrollView>
                <View style={{ height: ScreenHeight, alignItems: 'center' }}>
                    {/* Top */}
                    <View style={style.top}>
                        <Text style={style.title}>StoryLife</Text>
                        <Text style={style.title2}>BEST STORY - BEST VENDOR - BEST PRICE</Text>
                    </View>
                    {/* Form */}
                    <View style={style.form}>
                        <Text style={style.form.title}>Login</Text>
                        <View style={style.form.input}>
                            <Text style={{ color: 'white', letterSpacing: 6 }}>USERNAME</Text>
                            <TextInput value={data.username} onChangeText={(e) => setData({ ...data, username: e })} style={style.inputText} placeholder='username' />
                            <Text style={{ color: 'white', letterSpacing: 6 }}>PASSWORD</Text>
                            <TextInput value={data.password} secureTextEntry={true} onChangeText={(e) => setData({ ...data, password: e })} style={style.inputText} placeholder='password' />
                            <TouchableOpacity onPressOut={Login} style={style.btnLogin} >
                                <Text style={{ color: 'white', fontSize: 20, letterSpacing: 2 }}>{!loading ? 'login' : 'Loading...'}</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={style.another}>
                            <Image style={{ width: 50, height: 50 }} source={{ uri: go }} />
                            <Text>Login by Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.another}>
                            <Text>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const style = {
    // container: {
    //     height:ScreenHeight,
    //     backgroundColor: 'white',
    //     alignItems: 'center'
    // },
    top: {
        width: '100%',
        height: '24%',
        backgroundColor: '#6B705C',
        borderBottomLeftRadius: 500,
        borderBottomRightRadius: 500,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 50,
        color: 'white',
        fontFamily: 'AlexBrush_400Regular',
        letterSpacing: 5
    },
    title2: {
        color: 'white',
        fontSize: 10,
        letterSpacing: 2
    },
    form: {
        width: '85%',
        height: '70%',
        backgroundColor: '#B7B7A4',
        marginTop: 20,
        borderRadius: 70,
        display: 'flex',
        alignItems: 'center',
        padding: 8,
        title: {
            fontSize: 24,
            letterSpacing: 5,
            color: 'white',
            fontWeight: 'bold',
            fontStyle: 'italic',
            // backgroundColor: 'blue',
            flex: 0.1
        },
        input: {
            // backgroundColor: 'red',
            flex: 0.7,
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    inputText: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        borderRadius: 10,
        margin: 10,
        textAlign: 'center'
    },
    btnLogin: {
        width: '40%',
        backgroundColor: '#6B705C',
        color: 'white',
        borderRadius: 20,
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    another: {
        flex: 0.1,
        flexDirection: 'row',
        width: '60%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 20,
        overFlow: 'hidden'
    }
}