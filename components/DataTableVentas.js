import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { createQueryByEmpAndType } from "../utils/elk";
import  imagen from '../utils/data'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image,Text, Avatar } from '@ui-kitten/components';
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
        response_data = JSON.parse(response.data)
        console.log(response_data)
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
         {
          imagen.map((data) => (
            <DataTable.Row style={styles.row} key={data.id}>
              <DataTable.Cell> <Avatar size="tiny" source={{ uri: data.img }} /></DataTable.Cell>
              <DataTable.Cell numeric style={styles.cell}><Text style={styles.value}>{data.menudeo}</Text></DataTable.Cell>
              <DataTable.Cell numeric style={styles.cell}><Text style={styles.value}>{data.flotilla}</Text></DataTable.Cell>
              <DataTable.Cell numeric style={styles.cell}><Text style={styles.value}>{data.total}</Text></DataTable.Cell>
            </DataTable.Row>
          ))
         }
      </DataTable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   width: 370,
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