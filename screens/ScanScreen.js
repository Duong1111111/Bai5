// screens/ScanScreen.js
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://www.figma.com/design/j7cET0s1hS3wvgIBb94sXs/Bar-Code-Scan-App-(Community)-(Copy)-(Copy)?node-id=8-14&t=Nlhvt8mXe3ISotkO-4' }} // Replace with the actual URL of the uploaded image
          style={styles.productImage}
        />
      </View>
      <View style={styles.productInfo}>
        <View style={styles.thumbnailPlaceholder}>
          <Text style={styles.placeholderText}>Thumbnail</Text>
        </View>
        <Text style={styles.productName}>Lauren's Orange Juice</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: 200,
    height: 400,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  thumbnailPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  placeholderText: {
    color: '#ccc',
    fontSize: 18,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 25,
  },
});
