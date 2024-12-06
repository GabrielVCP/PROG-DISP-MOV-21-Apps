import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7FAFC', 
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 25,
    backgroundColor: '#4A90E2', 
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: '700', 
    color: '#FFFFFF', 
    textAlign: 'center',
    letterSpacing: 1.2,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: '#D1D5DB', 
    borderRadius: 12, 
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Roboto', 
  },

  resultContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor:'#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, 
  },

  resultText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    fontFamily: 'Roboto',
  },
});
