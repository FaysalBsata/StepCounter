import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
type StatProps = {
  label: string;
  value: string;
};
const Stat = ({ label, value }: StatProps) => (
  <View style={styles.valueContainer}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <View style={{ flexDirection: 'row' }}>
        {/* <View style={styles.valueContainer}>
          <Text style={styles.label}>Steps</Text>
          <Text style={styles.value}>1200</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.label}>Distance</Text>
          <Text style={styles.value}>0,75 KM</Text>
        </View> */}
        <Stat label="Steps" value="1200" />
        <Stat label="Distance" value="0,75 KM" />
      </View>
      <Stat label="Flights Climbed" value="0,75 KM" />
      {/* <View style={styles.valueContainer}>
        <Text style={styles.label}>Flights Climbed</Text>
        <Text style={styles.value}>0,75 KM</Text>
      </View> */}
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
  valueContainer: { marginRight: 50, marginVertical: 10 },
  label: {
    color: 'white',
    fontSize: 20,
  },
  value: {
    fontSize: 35,
    color: '#AFB3BE',
    fontWeight: '500',
  },
});
