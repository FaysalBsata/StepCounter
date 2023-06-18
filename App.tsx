import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Stat from './src/components/Stat';
import RingProgress from './src/components/RingProgress';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <RingProgress progress={0.4} />
      <View style={styles.values}>
        <Stat label="Steps" value="1200" />
        <Stat label="Distance" value="0,75 KM" />
        <Stat label="Flights Climbed" value="0,75 KM" />
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
