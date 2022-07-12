import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './src/screen/Detail'
import HomeScreen from './src/screen/HomeScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import Login from './src/screen/Login';
import Galery from './src/screen/Galery';
const Stack = createNativeStackNavigator();
import { AuthContext } from './src/context/authContezt';
import Splash from './src/screen/Splash';


export default function App() {

  const [loading, setLoading] = useState(true)
  const [auth, setAuth] = useState(null)
  const loadAuth = React.useMemo(() => load, [])
  async function load() {
    const get = await SecureStore.getItemAsync('token')
    if (get) {
      setAuth(get)
      return setLoading(false)
    }
    return setLoading(false)
  }

  useEffect(() => {
    loadAuth()
  }, [])

  console.log(auth)
  return loading ? (<Splash />) :
    (
      <AuthContext.Provider value={{ auth, setAuth }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <>
              {!auth || auth == null ?
                <Stack.Screen name='login' component={Login} /> :
                <>
                  <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Home' }} />
                  <Stack.Screen name='Galery' component={Galery} />
                  <Stack.Screen name='Detail' component={Detail} />
                  <Stack.Screen name='profile' component={ProfileScreen} options={{ title: 'Profile' }} />
                </>
              }
            </>
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>

    );
}
