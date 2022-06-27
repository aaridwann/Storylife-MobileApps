import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native'
import Fetching from '../helper/Fetch'
let img = 'https://i.pinimg.com/564x/7b/5f/c0/7b5fc0288147ced60a8a23a5a3ecbc5a.jpg'
let url = 'https://picsum.photos/v2/list'
export default function Galery({ navigation }) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [display, setDisplay] = useState(0)
    const img = data.slice(display, display + 12)
    const [page, setPage] = useState()
    async function count() {
        let res = []
        for (let i = display; i < data.length / 12; i++) {
            res.push(i)
        }
        setPage(res)
    }

    async function fetching() {
        setLoading(true)
        await Fetching(url, 'get', setData)
        await count(data)
    }

    useEffect(() => {
        fetching()
        // count()
    }, [])
    console.log(display)
    return (
        <ScrollView style={{ flex: 1 }}>
            <Text style={style.title}>Gallery</Text>
            <View style={style.container} flexWrap='wrap'>
                {img[0] ? img.map((x, i) => (
                    <TouchableOpacity key={i} onPress={() => navigation.push('Detail', { data: x })} style={style.content}>
                        <Image source={{ uri: x.download_url }} style={style.img} />
                    </TouchableOpacity>
                )) : <Text>Loading...</Text>}
                <View style={style.page}>
                    {/* Preveous Button */}
                    {display >= 1 &&
                        <TouchableOpacity onPress={() => setDisplay(display - 12)}><Text style={style.countPage}>Previous</Text></TouchableOpacity>
                    }

                    {/* Page number */}
                    {page ? page.map((x, i) => (
                        <TouchableOpacity key={i} onPress={() => setDisplay(i * 12)}>
                            <Text style={{ ...style.countPage, ...display == 0 &&`backroundColor:red`  }}>
                                {i + 1}
                            </Text></TouchableOpacity>
                    ))
                        : <Text>Loading...</Text>}

                    {/* Next */}
                    {display <= 23 &&
                        <TouchableOpacity onPress={() => setDisplay(display + 12)}><Text style={style.countPage}>Next</Text></TouchableOpacity>
                    }
                </View>
            </View>
        </ScrollView>
    )
}

const style = {
    container: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 'auto',
        height: 717,
        padding: 4,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        width: '100%',
        height: 50,
        fontSize: 30,
        backgroundColor: 'white',
        alignSelf: 'center',
        textAlign: 'center'
    },
    content: {
        width: 120,
        height: 120,
        backgroundColor: 'white',
        margin: 4,
        overflow: 'hidden'
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    page: {
        marginTop: 40,
        width: '80%',
        height: 80,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    countPage: {
        margin: 8,
        backgroundColor: 'lightblue',
        padding: 8,
        paddingHorizontal: 14,
        color: 'gray',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 8
    }
}
