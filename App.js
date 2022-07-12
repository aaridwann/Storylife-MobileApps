import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import Login from './src/screen/Login';
import Galery from './src/screen/Galery';
const Stack = createNativeStackNavigator();
import { AuthContext } from './src/context/authContezt';
import Storage from 'react-native-storage';
// import { AsyncStorage } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
const storage = new Storage({
  size: 1000,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  storageBackend: AsyncStorage
})

const load = async () => {

  const data = await storage.load('token').then(data => data).catch(err => err)
  return data
}

export default function App() {
  const [auth, setAuth] = useState('hehe')

  useEffect(() => {
    load()
  })
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {auth && <Stack.Screen name='login' component={Login} />}
          <Stack.Screen name='Galery' component={Galery} />
          {/* <Stack.Screen name='Detail' component={Detail} /> */}
          <Stack.Screen name='home' component={HomeScreen} options={{ title: 'Home' }} />
          {/* <Stack.Screen name='profile' component={ProfileScreen} options={{ title: 'Profile' }} /> */}

        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>

  );
}
