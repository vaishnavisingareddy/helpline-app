import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function PatientProfileScreen({ route, navigation }) {
  const { patient } = route.params;
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Details</Text>
      <Text>Name: {patient.name}</Text>
      <Text>DOB: {patient.dob}</Text>
      <Text>Sex: {patient.sex}</Text>

      <TextInput
        style={styles.input}
        placeholder="Phone number"
        keyboardType="numeric"
        value={phone}
        onChangeText={setPhone}
      />

      <Button
        title="Create Profile"
        onPress={() => navigation.navigate('Final', { patient, phone })}
        color="#888"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 20, marginBottom: 15 },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 20
  }
});
