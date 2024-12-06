import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PersonalData = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/236x/60/36/dc/6036dce171b44946613d0149d872eae1.jpg' }}
        style={styles.image}
      />
      <Text style={styles.name}>Seu Nome Completo</Text>
      <Text style={styles.description}>Desenvolvedor de Software - Fullstack</Text>
      <Text style={styles.info}>E-mail: seuemail@exemplo.com</Text>
      <Text style={styles.info}>Telefone: (11) 98765-4321</Text>
      <Text style={styles.info}>Localização: Cidade, Estado</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1e1e2f',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00d2ff',
  },
  description: {
    fontSize: 16,
    color: '#e5e5f2',
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
    color: '#a1a1b8',
    marginBottom: 5,
  },
});

export default PersonalData; 
