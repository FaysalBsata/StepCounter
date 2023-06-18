import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Stat from './src/components/Stat';
import RingProgress from './src/components/RingProgress';
import useHealthData from './src/hooks/useHealthData';
const STEPS_GOAL = 10000;
export default function App() {
  const { steps, Flights, Distance } = useHealthData(new Date(2023, 5, 13));
  return (
    <View style={styles.container}>
      <RingProgress
        progress={steps / STEPS_GOAL}
        strokeWidth={50}
        radius={150}
      />
      <View style={styles.values}>
        <Stat label="Steps" value={steps.toString()} />
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
  values: {
    flexDirection: 'row',
    gap: 25,
    flexWrap: 'wrap',
    marginTop: 100,
  },
});
