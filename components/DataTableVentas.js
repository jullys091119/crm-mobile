import React, { useEffect, useContext,  useState } from 'react';
import { View, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import  data from '../utils/data'
import { API_URL, VENTAS_INDEX } from "@env";
import { enGB, registerTranslation} from 'react-native-paper-dates'
registerTranslation('en-GB', enGB)
import {Context} from "../appcontext/AppContext"
import { useNavigation } from '@react-navigation/native';

import { 
  Text,
  Card,
  Layout
 }
from '@ui-kitten/components';
import SalesByemp from './SalesByEmp';



const DataTableVentas = () => {

  const { sales, getQuerySales, totalSale, salesFlotilla } = useContext(Context);
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <> 
      <ScrollView nestedScrollEnabled={true}> 
        <Layout style={{backgroundColor:"#F7F9FC"}}>
          <FlatList
            scrollEnabled={false} // this line is important
            data={sales}
            keyExtractor= {(item, index)=> index }
            renderItem={({item, index})=> {
            return (
                <Layout style={{display: "flex",flexDirection: "row",  alignSelf: "center",  backgroundColor: "#FCF3FF"}}>
                  <Card style={styles.card} onPress={()=>{navigation.navigate("SalesByEmp")}}>
                    <Layout>
                     <Image source={{uri: data[index].img}} style={{width: data[index].width, height: data[index].heigth, marginLeft: 6}}/>
                     <Text style={styles.nombreEmp}>{data[index].nombre}</Text>
                    </Layout>
                    <Layout style={{display: "flex", flexDirection:"row",justifyContent:"space-between"}}>
                      <Layout style={styles.dataInformation}>
                        <Text style={styles.results}>{item}</Text> 
                        <Layout>
                          <Text style={styles.title}>Menudeo</Text>
                        </Layout>
                      </Layout>
                      <Layout style={styles.dataInformation}>
                        <Text style={styles.results}>{salesFlotilla[index]}</Text>
                        <Layout>
                         <Text style={ salesFlotilla[index]!==0?styles.title:styles.isCero}>Flotilla</Text>
                        </Layout>
                      </Layout>
                      <Layout style={styles.dataInformation}>
                        <Text style={styles.results}>{item+salesFlotilla[index]}</Text>
                        <Layout>
                         <Text style={styles.title}>Total</Text>
                        </Layout>
                      </Layout>
                    </Layout>
                  </Card>
                </Layout>
              )
            }}
          />
        </Layout>
      </ScrollView>
    </>    
  );
}

const styles = StyleSheet.create({
  card: {
    width: "80%",
    height: 250,
    marginVertical: 5,
    position: "relative",
    justifyContent: "center"

  }, 
  logo: {
    alignSelf: "center",
    width: 240,
    height: 50
  }, 
  dataInformation: {
    display: "flex",
    paddingVertical: 9,
    marginTop: 10
  },
  results: {
    fontSize: 30,
    marginLeft: 10,
    color: "#9E9E9E"
  },
  container: {
    height: 500,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  cardSalesByEmp: {
    height: 680,
    width: 330,
  },
  title: {
    textAlign: "center",
    marginLeft: 6,
    color: "#9E9E9E"
  },
  isCero: {
    marginLeft: -2,
    color: "#9E9E9E"
  },
  nombreEmp: {
    color: "#9E9E9E",
    marginVertical: 10,
    marginLeft: 9
  }
 
});

export default DataTableVentas