import React, { useEffect, useContext,  useState } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { DataTable } from 'react-native-paper';
import  imagen from '../utils/data'
import { API_URL, VENTAS_INDEX } from "@env";
import {Context} from "../appcontext/AppContext"
import { 
  Text,
  Card,
  Layout,
 }
from '@ui-kitten/components';


const DataTableVentas =  () => {
  const { sales, companies } = useContext(Context);

 
  useEffect(()=> {
  }, [])
  return (
    <>
      <ScrollView>
        {
          companies.map((item, index) => {
          return(<Card style={styles.card} key={item.Nombre}>
          <Layout style={styles.headerCard}>
            <Image source={{url: imagen[index].img}} style={{width: 40, height: 30}}/>
          </Layout>
           <Card>
            <Layout style={styles.dataInformation}>
              <Text style={styles.title}>{sales}</Text>  
              <Text>Menudeo</Text>
            </Layout>
            <Layout style={styles.dataInformation}>
              <Text style={styles.title}>{sales}</Text>
              <Text>Flotilla</Text>
            </Layout>
            <Layout style={styles.dataInformation}>
              <Text style={styles.title}>?</Text>
              <Text>Total</Text>
            </Layout>
           </Card>
        </Card>)})
      }
      </ScrollView>
    </>    
  );
}

const styles = StyleSheet.create({
  card: {
    width: "94%",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  headerCard: {
    margin: 0,
    height: 50,
    paddingVertical: 10,
   alignSelf: "center",
  },
  dataInformation: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
  }
});

export default DataTableVentas