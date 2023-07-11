import React, { useEffect, useContext,  useState } from 'react';
import { View, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import { DataTable } from 'react-native-paper';
import  imagen from '../utils/data'
import { API_URL, VENTAS_INDEX } from "@env";
import { enGB, registerTranslation } from 'react-native-paper-dates'
registerTranslation('en-GB', enGB)
import {Context} from "../appcontext/AppContext"
import { 
  Text,
  Card,
  Layout,
 }
from '@ui-kitten/components';


const DataTableVentas =  () => {

  const { sales, getQuerySales } = useContext(Context);
  console.log(sales, "sales")
 
  useEffect(()=> {
    
  },[])
  return (
    <>
      <ScrollView nestedScrollEnabled={true}> 
        <FlatList
          scrollEnabled={false} // this line is important
          data={sales}
          keyExtractor= {(item, index)=> index }
          renderItem={({item})=> {
         
           return (
              <Card style={styles.card}>
                <Layout style={styles.dataInformation}>
                  <Text style={styles.title}>{item}</Text> 
                  <Text>Menudeo</Text>
                </Layout>
                <Layout style={styles.dataInformation}>
                  <Text style={styles.title}>0</Text>
                  <Text>Flotilla</Text>
                </Layout>
                <Layout style={styles.dataInformation}>
                  <Text style={styles.title}>?</Text>
                  <Text>Total</Text>
                </Layout>
            </Card>
           )
         }}
        />
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