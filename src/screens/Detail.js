import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Detail = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Detail User</Text>
    <Text style={styles.content}>Nama: John Doe</Text>
    <Text style={styles.content}>Telepon: 0812-3456-7890</Text>
    <Text style={styles.content}>Email : Johndoe@example.com</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.buttonText}>Kembali ke Home</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3e0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#e65100',
    marginBottom: 20,
  },
  content: {
    fontSize: 18,
    color: '#6d4c41',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#e65100',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 25,
    marginTop: 30,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default Detail;