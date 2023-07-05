import React, { useContext, useRef, useState } from 'react'
import { Layout, Text, Button } from '@ui-kitten/components';
import { StyleSheet, View, StylesSheet, ScrollView } from 'react-native'
import TopNavigationMobile from './TopNavigationMobile';
import DataTableVentas from './DataTableVentas';
import { Avatar,  IconButton, MD3Colors } from 'react-native-paper';
import ActionSheet from "react-native-actions-sheet";
import ActionSheetDashboard from './ActionSheetDashboard';

export default Dashboard = () => {
  const actionSheetRef = useRef()
  //actionSheetRef.current?.hide();
  const ActionSheetModal = () => {  
    actionSheetRef.current?.show();
  }

  return (
    <>
      <TopNavigationMobile />
      <ScrollView>
        <Layout style={styles.containerGreeting}>
          <IconButton
            icon="filter"
            iconColor={MD3Colors.secondary80}
            size={20}
            onPress={() => ActionSheetModal()}
          />
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
        <ActionSheet ref={actionSheetRef}>
          <ActionSheetDashboard/>
        </ActionSheet>
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
    justifyContent: "flex-end",
    paddingRight: 20,
    paddingVertical: 20,
  },

})