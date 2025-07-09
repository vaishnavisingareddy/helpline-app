import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ConfirmDetailsScreen({ route, navigation }) {
  const { extractedData } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Details</Text>
      <Text>Name: {extractedData.name}</Text>
      <Text>DOB: {extractedData.dob}</Text>
      <Text>Sex: {extractedData.sex}</Text>

      <Button
        title="Confirm Details"
        onPress={() =>
          navigation.navigate('PatientProfile', { patient: extractedData })
        }
        color="#888"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingLeft: 30 },
  title: { fontSize: 18, marginBottom: 10 },
});
