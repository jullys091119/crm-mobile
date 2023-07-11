import React, {useContext, useEffect, useState} from 'react'
import { SafeAreaView, Text, StyleSheet, View, Button } from 'react-native'
import { Layout } from '@ui-kitten/components';
import { DatePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Context } from '../appcontext/AppContext';
import { enGB, registerTranslation } from 'react-native-paper-dates'
registerTranslation('en-GB', enGB)

export default ActionSheetDashboard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const {getCompany, setDate} = useContext(Context);
  const [range, setRange] = React.useState({ startDate: undefined, endDate: undefined });
  const [open, setOpen] = React.useState(false);
  

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = React.useCallback(
    ({ startDate, endDate })  => {
      setOpen(false)
      setRange({ startDate, endDate });
      getCompany()
      setDate({startDate,endDate})
    },
    [setOpen, setRange]
  );
  useEffect(()=> {
     
    
  },[])
  return (
    <Layout style={{height: 59}}>
      <Button title='Selecciona fecha' onPress={() => setOpen(true)} uppercase={false} mode="outlined"/>
      <DatePickerModal
        locale="en-GB"
        mode="range"
        visible={open}
        onDismiss={onDismiss}
        startDate={range.startDate}
        endDate={range.endDate}
        onConfirm={onConfirm}
      />
    </Layout>
  )
}
const styles = StyleSheet.create({
  button: {
   
  }
})