import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from './styles';

const Anuncios = () => {
  const produtos = [
    {
      id: '1',
      nome: 'Produto A',
      preco: 'R$ 50,00',
      imagem: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      nome: 'Produto B',
      preco: 'R$ 100,00',
      imagem: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      nome: 'Produto C',
      preco: 'R$ 75,00',
      imagem: 'https://via.placeholder.com/150',
    },
    {
      id: '4',
      nome: 'Produto D',
      preco: 'R$ 120,00',
      imagem: 'https://via.placeholder.com/150',
    },
  ];

  const renderProduto = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>{item.preco}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Anúncios</Text>
      <FlatList
        data={produtos}
        renderItem={renderProduto}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={styles.carousel}
      />
    </View>
  );
};

export default Anuncios;
