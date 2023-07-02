import React, { useContext } from 'react'
import { ApplicationProvider, IconRegistry, Layout, Text, Button } from '@ui-kitten/components';
import { StyleSheet, View, StylesSheet, ScrollView } from 'react-native'
import { Context } from '../appcontext/AppContext';
import TopNavigationMobile from './TopNavigationMobile';
import DataTableVentas from './DataTableVentas';
import { Avatar } from 'react-native-paper';

const  Dashboard = ({navigation}) => {
  return (
    <>
      <TopNavigationMobile />
      <ScrollView>
        <Layout style={styles.containerGreeting}>
          <Text style={styles.gretting}>!Hola!{" "}Julian</Text> 
          <Avatar.Image size={40} source={require('../assets/unnamed.jpg')} /> 
        </Layout>    
        <Layout style={styles.container}>  
          <Layout style={styles.contain}>
            <Layout style={{ display: "flex", alignSelf: "center" }}>
              <Text style={{ fontSize: 20, fontWeight: "700", color:"#808080" }}>Ventas</Text>
            </Layout>
            <Layout>
              <DataTableVentas/>
            </Layout>
          </Layout>
        </Layout>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:  1,
    justifyContent: "flex-start",
    alignItems:"center",
  },

  contain: {
    marginTop: 10
  },

  gretting: {
   fontSize: 20,
   fontWeight: "800",
   paddingLeft: 30, 
   color: "#808080"
  },

  containerGreeting: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingVertical: 20,
  },

})

export default Dashboard