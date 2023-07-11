import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ContextProvider, Context } from './appcontext/AppContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


//componentes
import Login from './components/Login';
import Dashboard  from './components/Dashboard';
import Home from './components/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {  
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState("")

  const getToken = async () => {
    const tk =  await AsyncStorage.getItem("@token");
    setToken(tk)
  }
 
  useEffect(()=>{
    getToken()
  })
  
  return (
    <>
      <ContextProvider>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer>

            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                  options={{
                    headerShown: false,
                    title: "",
                    headerStyle: {
                      backgroundColor: "white",
                    },
                  }}
              />
             
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown: false,
                  title: "",
                  headerStyle: {
                    backgroundColor: "white",
                  },
                }}
              />
            
              <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                  headerShown: false,
                  title: "",
                  headerStyle: {
                    backgroundColor: "white",
                  },
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ApplicationProvider>
        <StatusBar style="auto" />
      </ContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
