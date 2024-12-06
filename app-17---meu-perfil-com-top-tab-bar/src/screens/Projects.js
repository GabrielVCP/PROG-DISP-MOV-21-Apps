import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Projects = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Projetos</Text>
      <Text style={styles.detail}>Sistema de E-commerce - Tecnologias: React, Node.js, MongoDB</Text>
      <Text style={styles.detail}>Aplicativo de Lista de Tarefas - Tecnologias: React Native, Firebase</Text>
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

export default Projects;
