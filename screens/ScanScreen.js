import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { parseAadhaarFromImage } from '../utils/parseAadhaar';

export default function ScanScreen({ navigation }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ base64: true });

    if (!result.cancelled) {
      setImage(result.uri);
      const data = parseAadhaarFromImage(result); // simulate parsing
      navigation.navigate('ConfirmDetails', { extractedData: data });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan Govt ID</Text>
      <View style={styles.imageBox} />
      <Button title="Upload Aadhaar Image" onPress={pickImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { marginBottom: 20, fontSize: 18 },
  imageBox: {
    width: 250,
    height: 180,
    backgroundColor: '#ccc',
    marginBottom: 20
  }
});
