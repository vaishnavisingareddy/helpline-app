import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function FinalScreen({ route }) {
  const { patient, phone } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Details</Text>
      <Text>Name: {patient.name}</Text>
      <Text>DOB: {patient.dob}</Text>
      <Text>Sex: {patient.sex}</Text>
      <Text>Phone: {phone}</Text>

      <Button title="Call Doctor" onPress={() => {}} color="#666" />
      <View style={{ height: 10 }} />
      <Button title="View Prescription" onPress={() => {}} color="#888" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 15 }
});
