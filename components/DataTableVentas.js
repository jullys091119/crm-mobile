import React, { useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { createQueryByEmpAndType } from "../utils/elk";
import  imagen from '../utils/data'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image,Text, Avatar } from '@ui-kitten/components';
import { API_URL, VENTAS_INDEX } from "@env";
import {Context} from "../appcontext/AppContext";
import axios from 'axios'
import moment from 'moment';

const DataTableVentas = () => {
  const { dateInicial, dateFinal } = useContext(Context);
  const getQuerySales = async(emp) => {
    let inicial = moment(dateInicial).format('YYYY/MM/DD');
    let final = moment(dateFinal).format('YYYY/MM/DD');
    console.log(inicial, ">>>>")
    console.log(final, ">>>>")
    const tk = await AsyncStorage.getItem('@token');
    axios.post(API_URL + 'elk/broker', {
      'type': '_count',
      'index': VENTAS_INDEX,
      'query':  createQueryByEmpAndType(emp, 'Menudeo', inicial, final),
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': tk
      },
      withCredentials: true
    
      }).then(async(response) => {
        console.log(response.data)
      }).catch(error => {
      })
    }

  useEffect(()=> {
    getQuerySales(145)
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