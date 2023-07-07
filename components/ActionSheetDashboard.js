import React, {useContext, useState} from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, Layout } from '@ui-kitten/components';
import { Divider } from 'react-native-paper';
import { Context } from '../appcontext/AppContext';

export default ActionSheetDashboard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const {setInicial, setFinal, getQuerySales} = useContext(Context);
  
     
  const dateIncialSales = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setInicial(currentDate);
  };

  const dateFinalSales = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setFinal(currentDate);
  };
  
  return (
    <SafeAreaView>
      <Layout>
        <Text style={styles.limite}>Desde</Text>
      </Layout>
      <DateTimePicker
        style={{height: 40, backgroundColor: "#F5F5F5"}}
        testID="dateTimePicker"
        value={currentDate}
        mode={mode}
        is24Hour={true}
        onChange={dateIncialSales}
      />
      <Layout><Divider/></Layout>
      <Layout>
        <Text style={styles.limite}>Hasta</Text>
      </Layout>
      <DateTimePicker
        style={{height: 40, backgroundColor: "#F5F5F5"}}
        testID="dateTimePicker"
        value={currentDate}
        mode={mode}
        is24Hour={true}
        onChange={dateFinalSales}
      />
      <Button onPress={() => getQuerySales()}>Guardar</Button>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  limite : {
    fontSize: 20,
    fontWeight: "700",
    color:"#808080",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#F5F5F5"
  }
})