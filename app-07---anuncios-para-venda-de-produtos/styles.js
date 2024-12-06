import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  carousel: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
    width: width * 0.35, // Largura do card ajustada para 35% da tela
    height: width * 0.35, // Altura igual para garantir formato quadrado
    alignItems: 'center',
    justifyContent: 'space-between', // Para distribuir imagem e texto dentro do card
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#3a3a3a',
  },
  imagem: {
    width: '90%', // Imagem ocupa 90% da largura do card
    height: '60%', // A imagem ocupa 60% da altura do card para dar espaço ao texto
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  nome: {
    fontSize: 14, // Tamanho do texto ajustado
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
  preco: {
    fontSize: 12, // Tamanho do texto ajustado
    color: '#c2c2c2',
    textAlign: 'center',
  },
});
