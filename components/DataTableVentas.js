import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DataTable } from 'react-native-paper';
import { createQueryByEmpAndType } from "../utils/elk";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import { API_URL, VENTAS_INDEX } from "@env";

const DataTableVentas = () => {
  
  const getQuerySales = async() => {
    const tk = await AsyncStorage.getItem('@token');
    axios.post(API_URL + 'elk/broker', {
      'type': '_count',
      'index': VENTAS_INDEX,
      'query': await createQueryByEmpAndType(145, 'Menudeo', '2020/01/20', '2021/12/31'),
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': tk
      },
      withCredentials: true
    
      }).then(async(response) => {
        // console.log(response.data)
        alert("getting ventas")
      }).catch(error => {
      })
    }

  useEffect(()=> {
      getQuerySales()
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

        <DataTable.Row style={styles.row}>
          <DataTable.Cell>John</DataTable.Cell>
          <DataTable.Cell numeric style={styles.cell}>0</DataTable.Cell>
          <DataTable.Cell numeric style={styles.cell}>0</DataTable.Cell>
          <DataTable.Cell numeric style={styles.cell}>0</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   width: 330,
   display: 'flex',
   justifyContent: "center"
  },
  cell: {
    display: "flex",
    justifyContent: "center"
  },
  title: {
    display: "flex",
    justifyContent: "center"
  }
});

export default DataTableVentas