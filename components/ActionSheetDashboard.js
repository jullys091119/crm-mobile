import React, {useContext, useEffect, useState} from 'react'
import { SafeAreaView, Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'
import { Layout } from '@ui-kitten/components';
import { DatePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Context } from '../appcontext/AppContext';
import { enGB, registerTranslation } from 'react-native-paper-dates'
registerTranslation('en-GB', enGB)

export default ActionSheetDashboard = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [range, setRange] = useState({ startDate: undefined, endDate: undefined });
  const [open, setOpen] = useState(false);
  
  const {getCompany, setDate, getQuerySales} = useContext(Context);
   
  const closeActionSheet = () => {
    console.log("ejecutando close actionsheet")
    props.CloseSheetModal()
  }

  useEffect(()=> {
  })
   const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = React.useCallback(
    ({ startDate, endDate }) => {
      setOpen(false);
      setRange({ startDate, endDate });
      setDate({"start": startDate, "end": endDate })
      getCompany()
      closeActionSheet()
    },
    [setOpen, setRange]
  );
  return (
    <Layout style={{height: 79, backgroundColor: "#9E9E9E10",}}>
      <TouchableOpacity style={{ backgroundColor: "#9E9E9E10", height: 250}} onPress={() => setOpen(true)} >
        <Text style={{textAlign:"center", alignSelf: "center", marginTop: 14, fontSize: 20, color: "#909090",  fontWeight: "800"}}> Seleccionar Fecha </Text>
      </TouchableOpacity>
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
})