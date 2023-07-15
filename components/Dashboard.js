import React, { useContext, useRef, useState } from 'react'
import { Layout, Text, Button } from '@ui-kitten/components';
import { StyleSheet, View, StylesSheet, ScrollView } from 'react-native'
import TopNavigationMobile from './TopNavigationMobile';
import DataTableVentas from './DataTableVentas';
import { Avatar,  IconButton, MD3Colors } from 'react-native-paper';
import ActionSheet from "react-native-actions-sheet";
import ActionSheetDashboard from './ActionSheetDashboard';
import { Context } from '../appcontext/AppContext';

  
export default Dashboard = () => {
  const actionSheetRef = useRef()
  
  const ActionSheetModal = () => {  
    actionSheetRef.current?.show();
  }

  const CloseSheetModal = () => {  
    actionSheetRef.current?.hide();
  }

  return (
    <>
      <TopNavigationMobile />
      <ScrollView>
        <Layout style={{flex: 1, backgroundColor: "#F7F9FC"}}>
          <View style={styles.containerGreeting}>
            <IconButton
              icon="filter"
              iconColor={MD3Colors.secondary80}
              size={20}
              onPress={() => ActionSheetModal()}
            />
          </View>    
          <View style={styles.container}>  
            <Layout style={styles.contain}>
              <Layout style={{ display: "flex", alignSelf: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: "700", color:"#9E9E9E",backgroundColor: "#F7F9FC", paddingVertical:10}}>Dashboard</Text>
              </Layout>
              <Layout>
                <DataTableVentas/>
              </Layout>
            </Layout>
          </View>
          <ActionSheet ref={actionSheetRef}>
            <ActionSheetDashboard CloseSheetModal={CloseSheetModal}/>
          </ActionSheet>
        </Layout>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: "#F7F9FC"
  },

  contain: {
    backgroundColor: "#F7F9FC",
  },
  gretting: {
   fontSize: 20,
   fontWeight: "800",
   paddingLeft: 30, 
   color: "#808080",
  },

  containerGreeting: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "#F7F9FC"
    
  },

})