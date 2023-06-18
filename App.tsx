import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
type StatProps = {
  label: string;
  value: string;
};
const Stat = ({ label, value }: StatProps) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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
  values: { flexDirection: 'row', gap: 25, flexWrap: 'wrap' },
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
