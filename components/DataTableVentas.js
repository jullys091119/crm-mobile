import React, { useEffect, useContext,  useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { createQueryByEmpAndType } from "../utils/elk";
import  imagen from '../utils/data'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image,Text, Avatar } from '@ui-kitten/components';
import { API_URL, VENTAS_INDEX } from "@env";
import {Context} from "../appcontext/AppContext"
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const DataTableVentas =  () => {
  const { sales, companies } = useContext(Context);


  useEffect(()=> {
  }, [])

  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header style={styles.header}>
          <DataTable.Title>Empresa</DataTable.Title>
          <DataTable.Title style={styles.title}>Menudeo</DataTable.Title>
          <DataTable.Title style={styles.title}>FLotilla</DataTable.Title>
          <DataTable.Title style={styles.title}>Total</DataTable.Title>
        </DataTable.Header>
         {
          companies.map((data, index) => {
              let image = imagen
            return(<DataTable.Row style={styles.row} key={data.Nid}>
              <DataTable.Cell> <Avatar size="tiny" source={{ uri: image[0].img }} /></DataTable.Cell>
              <DataTable.Cell numeric style={styles.cell}><Text style={styles.value}></Text></DataTable.Cell>
              <DataTable.Cell numeric style={styles.cell}><Text style={styles.value}></Text></DataTable.Cell>
              <DataTable.Cell numeric style={styles.cell}><Text style={styles.value}></Text>{sales}</DataTable.Cell>
            </DataTable.Row>)
          })
         }
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   width: 340,
   display: 'flex',
   justifyContent: "center"
  },
  cell: {
    display: "flex",
    justifyContent: "center",
    marginTop: 10,
  },
  title: {
    display: "flex",
    justifyContent: "center",
  },
  avatar: {
    marginTop: 20
  },
  value: { 
    color: "#808080"
  }
});

export default DataTableVentas