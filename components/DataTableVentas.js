import React, { useEffect, useContext,  useState } from 'react';
import { View, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import { Avatar, DataTable } from 'react-native-paper';
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
   
  const AvatarCompany = (props) => (
    <Avatar.Text size={135} source={{uri:  props}}/>
  );
 
  useEffect(()=> {
    
  },[])
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
                  <Card style={styles.card}>
                    <Layout>
                    {/*  */}
                     
                     <Image source={{uri: imagen[index].img}} style={{width: imagen[index].width, height: imagen[index].heigth}}/>
                    </Layout>
                   
                    <Layout style={{display: "flex", flexDirection:"row",justifyContent:"space-between"}}>
                      <Layout style={styles.dataInformation}>
                        <Text style={styles.title}>{item}</Text> 
                        <Text>Menudeo</Text>
                      </Layout>
                      <Layout style={styles.dataInformation}>
                        <Text style={styles.title}>0</Text>
                        <Text>Flotilla</Text>
                      </Layout>
                      <Layout style={styles.dataInformation}>
                        <Text style={styles.title}>0</Text>
                        <Text>Total</Text>
                      </Layout>
                      
                            {/* <Layout style={styles.avatar}>
                            <AvatarCompany style={styles.avatar}/>
                          </Layout> */}
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
    paddingVertical: 9,
    marginTop: 10
  },
  title: {
    fontSize: 30,
    marginLeft: 10
  }
 
});

export default DataTableVentas