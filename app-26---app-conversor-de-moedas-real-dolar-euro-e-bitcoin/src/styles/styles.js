import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1B4332', 
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#D8F3DC', 
    marginBottom: 25,
    textAlign: 'center',
  },

  inputContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },

  input: {
    width: '85%',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#A5C9A1',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    color: '#1B4332', 
  },

  pickerContainer: {
    width: '85%',
    marginBottom: 20,
  },

  pickerLabel: {
    fontSize: 16,
    color: '#D8F3DC', 
    marginBottom: 8,
    fontWeight: '500',
  },

  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A5C9A1',
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#1B4332',
  },

  convertedValue: {
    fontSize: 18,
    color: '#95D5B2', 
    fontWeight: '600',
    marginVertical: 10,
    textAlign: 'center',
  },

  buttonContainer: {
    width: '85%',
    marginTop: 20,
    backgroundColor: '#95D5B2',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 4, 
  },

  buttonText: {
    color: '#1B4332',
    fontSize: 16,
    fontWeight: '600',
  },
});
