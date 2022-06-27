import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import Login from './src/screen/Login';
import Galery from './src/screen/Galery';
import Detail from './src/screen/Detail';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='Galery' component={Galery} />
        {/* <Stack.Screen name='Detail' component={Detail} /> */}
        {/* <Stack.Screen name='home' component={HomeScreen} options={{ title: 'Home' }} /> */}
        {/* <Stack.Screen name='profile' component={ProfileScreen} options={{ title: 'Profile' }} /> */}
      </Stack.Navigator>
    </NavigationContainer>

  );
}
