import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Stat from './src/components/Stat';
import RingProgress from './src/components/RingProgress';
import useHealthData from './src/hooks/useHealthData';
import { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
const STEPS_GOAL = 10000;
export default function App() {
  const [date, setDate] = useState(new Date());
  const { steps, Flights, Distance } = useHealthData(date);
  const handleDateChange = (numDays: number) => {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() + numDays);
    setDate(currentDate);
  };
  return (
    <View style={styles.container}>
      <View style={styles.datePicker}>
        <AntDesign
          name="left"
          size={20}
          color="#C3FF53"
          onPress={() => handleDateChange(-1)}
        />
        <Text style={styles.date}>{date.toDateString()}</Text>
        <AntDesign
          name="right"
          size={20}
          color="#C3FF53"
          onPress={() => handleDateChange(1)}
        />
      </View>
      <RingProgress
        progress={steps / STEPS_GOAL}
        strokeWidth={50}
        radius={150}
      />
      <View style={styles.values}>
        <Stat label="Steps" value={steps.toFixed(2).toString()} />
        <Stat label="Distance" value={`${(Distance / 1000).toFixed(2)} km`} />
        <Stat label="Flights Climbed" value={Flights.toString()} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 12,
  },
  datePicker: {
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  values: {
    flexDirection: 'row',
    gap: 25,
    flexWrap: 'wrap',
    marginTop: 100,
  },
  date: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    marginHorizontal: 20,
  },
});
