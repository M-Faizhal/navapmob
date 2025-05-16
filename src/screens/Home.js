import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Selamat Datang di Photograph!</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Detail')}>
      <Text style={styles.buttonText}>Detail User</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Form')}>
      <Text style={styles.buttonText}>Form</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
      <Text style={styles.buttonText}>Tentang Aplikasi</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#00796b',
  },
  button: {
    backgroundColor: '#00796b',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Home;