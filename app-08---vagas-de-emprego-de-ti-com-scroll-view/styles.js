import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1, // Permite que o ScrollView se expanda
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    width: width * 0.9, // Mantém um tamanho consistente
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#3a3a3a',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  empresa: {
    fontSize: 16,
    color: '#c2c2c2',
    textAlign: 'center',
  },
  localizacao: {
    fontSize: 14,
    color: '#c2c2c2',
    textAlign: 'center',
  },
  salario: {
    fontSize: 14,
    color: '#c2c2c2',
    textAlign: 'center',
  },
});
