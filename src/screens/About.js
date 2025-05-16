import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const About = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Tentang Photograph</Text>
    <Text style={styles.content}>
      Aplikasi ini merupakan eccomerce dari fotografi yang menyediakan berbagai produk dan layanan terkait fotografi.
    </Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.buttonText}>Kembali ke Home</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#388e3c',
    marginBottom: 20,
  },
  content: {
    fontSize: 17,
    color: '#2e7d32',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#388e3c',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 25,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default About;