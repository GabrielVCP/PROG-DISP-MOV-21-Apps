import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Experience = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Experiência Profissional</Text>
      <Text style={styles.detail}>Desenvolvedor Full Stack - Empresa XYZ (2019 - Presente)</Text>
      <Text style={styles.detail}>Analista de Sistemas - Empresa ABC (2017 - 2019)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e1e2f',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00d2ff',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    color: '#e5e5f2',
    marginBottom: 5,
  },
});

export default Experience;
