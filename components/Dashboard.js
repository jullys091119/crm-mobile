import React, { useContext } from 'react'
import { ApplicationProvider, IconRegistry, Layout, Text, Button } from '@ui-kitten/components';
import { StyleSheet, View, StylesSheet, ScrollView } from 'react-native'
import { Context } from '../appcontext/AppContext';
import TopNavigationMobile from './TopNavigationMobile';
import DataTableVentas from './DataTableVentas';

const  Dashboard = ({navigation}) => {
 const {logout} = useContext(Context)
  
  const sesionOut = async () => {
    let status = await logout()
    if (status == 200) {
      navigation.push("Login")
    }
  }

  return (
    <>
      <TopNavigationMobile />      
      <Layout style={styles.container}>
        <ScrollView>
          <Layout style={styles.contain}>
            <Layout style={{ display: "flex", alignSelf: "center" }}>
              <Text style={{ fontSize: 20, fontWeight: "700" }}>Ventas</Text>
            </Layout>
            <Layout>
              <DataTableVentas/>
            </Layout>
          </Layout>
        </ScrollView>
      </Layout>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:  1,
    justifyContent: "flex-start",
    alignItems:"center",
  }
})

export default Dashboard