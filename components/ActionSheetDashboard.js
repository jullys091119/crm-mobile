import React, {useState} from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from '@ui-kitten/components';

export default ActionSheetDashboard = () => {

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  
  //taking date
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    console.log(currentDate)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <SafeAreaView>
      <Button style={styles.button} onPress={showDatepicker}>Desde</Button>
      <Button style={styles.button} onPress={showDatepicker}>Hasta</Button>
      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          style={styles.datepick}
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
    )}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  button: {
   marginVertical: 1,
   marginHorizontal: 3,
   backgroundColor: "#B3B3B3",
   borderColor: "transparent",
   marginVertical: 1
  },
  datepick: {
    paddingVertical: 40
  }
})