import React, { useEffect, useContext,  useState } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { DataTable } from 'react-native-paper';
import { createQueryByEmpAndType } from "../utils/elk";
import  imagen from '../utils/data'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, Avatar } from '@ui-kitten/components';
import { API_URL, VENTAS_INDEX } from "@env";
import {Context} from "../appcontext/AppContext"


const DataTableVentas =  () => {
  const { sales, companies } = useContext(Context);


  useEffect(()=> {
  }, [])

  return (
    <>
      <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
        <View style={styles.card}>
          <Text style={styles.cardText}></Text>
          <View style={styles.cardTextLogo}>
          <Image  style={{width: 60, height: 50}} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Mitsubishi_logo.svg/230px-Mitsubishi_logo.svg.png'}}/>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}></Text>
          <View style={styles.cardTextLogo}>
          <Image style={{width: 90, height: 90, marginTop: -16}} source={{uri:'https://download.logo.wine/logo/Fiat_Chrysler_Automobiles/Fiat_Chrysler_Automobiles-Logo.wine.png'}}/>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}></Text>
          <View style={styles.cardTextLogo}>
          <Image style={{width: 70, height: 60}} source={{uri:'https://1000marcas.net/wp-content/uploads/2020/10/Logo-Mercedes-Benz-500x311.png'}}/>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}></Text>
          <View style={styles.cardTextLogo}>
          <Image style={{width: 100, height: 60}} source={{uri:'http://50.116.19.48:8888/sites/all/modules/crm_dashboard/app/dist/img/logo_crm_cropped.717811cd.png'}}/>
          </View>
        </View>
      </ScrollView>
    </>    
  );
}

const styles = StyleSheet.create({
  scrollView: {
    alignItems: 'center',
  },
  card: {
    width: 180,
    height: 100,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    borderRadius: 10,
    scrollView: "none"
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardTextLogo: {
    height: 60,
    width: 50,
    marginTop: -20,
    borderRadius: 10,
    marginLeft: 10,
  },
  icon: {
    width: 100,
    height: 40,
    
  }
});

export default DataTableVentas