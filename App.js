import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Login from './components/Login';
import { ContextProvider, Context } from './appcontext/AppContext';


export default function App() {
  return (
    <>
      <ContextProvider>
        <ApplicationProvider {...eva} theme={eva.light}>
          <IconRegistry icons={EvaIconsPack} />
          <Login/>
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
