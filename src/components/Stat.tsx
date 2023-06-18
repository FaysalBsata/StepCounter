import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type StatProps = {
  label: string;
  value: string;
};

const Stat = ({ label, value }: StatProps) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default Stat;

const styles = StyleSheet.create({
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
