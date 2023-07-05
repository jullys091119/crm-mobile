
import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { Context } from '../appcontext/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState("")
  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@token');
      if (token) {
        navigation.replace('Dashboard');
      } else {
        navigation.replace('Login');
      }
    } catch (error) {
    }
  };

  useEffect(() => {
      setTimeout(() => {
      setIsLoading(false);
      }, 3000); 
      checkToken()
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
    ) : (
        <Text style={{ fontSize: 20 }}>Bienvenido</Text>
    )}
    </View>
  )
}

export default Home