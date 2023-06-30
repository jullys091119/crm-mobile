import React from 'react'
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { StyleSheet, View, StylesSheet } from 'react-native'


export const Dashboard = () => {
  return (
    <Layout style={styles.container} >
            <Text>
                BIENVENIDO AL DASHBOARD
            </Text>
    </Layout>
   
  
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})