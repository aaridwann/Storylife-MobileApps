import React, { useContext, useState } from 'react'
import * as SecureStore from 'expo-secure-store';
import { Dimensions, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useFonts, AlexBrush_400Regular } from '@expo-google-fonts/alex-brush'
import axios from 'axios'
import { AuthContext } from '../context/authContezt';
let go = 'https://img2.pngdownload.id/20180610/jeu/kisspng-google-logo-google-search-google-now-5b1dacc1ad0462.3234288415286714257087.jpg'
let url = 'http://192.168.100.13:8000/auth/login'

export default function Login({ navigation }) {
    const { setAuth } = useContext(AuthContext)
    const ScreenHeight = Dimensions.get("window").height;
    const [fontsLoaded] = useFonts({ AlexBrush_400Regular });
    const [data, setData] = useState({ email: '', password: '' })
    const [message, setMessage] = useState('')
    const [loading, setLoadig] = useState(false)

    async function Login() {
        if (!data.email || !data.password) setMessage('Plese fill data')
        setLoadig(true)
        try {
            const res = await axios.post(url, data)
            if (res.data.message === 'success') {
                SecureStore.setItemAsync('token', res.data.token)
                setAuth(res.data.token)
            }
        } catch (error) {
            console.log('error')
        }
        setLoadig(false)
    }


    if (message) {
        setTimeout(() => {
            setMessage('')
        }, 2000)
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
                        <Text style={style.message}>{message}</Text>
                        <Text style={style.form.title}>Login</Text>
                        <View style={style.form.input}>
                            <Text style={{ color: 'white', letterSpacing: 6 }}>USERNAME</Text>
                            <TextInput value={data.email} onChangeText={(e) => setData({ ...data, email: e })} style={style.inputText} placeholder='username' />
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
        alignItems: 'center',
        marginTop: 20
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
        overFlow: 'hidden',
    },
    message: {
        color: 'red',
    }
}