import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2D3748', 
  },
  
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 25,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },

  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#1F2937', 
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#4A5568',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3, 
  },

  taskText: {
    fontSize: 18,
    color: '#FFFFFF', 
    fontFamily: 'Roboto', 
  },

  iconContainer: {
    flexDirection: 'row',
    gap: 12,
  },

  inputContainer: {
    marginBottom: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#1F2937',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#374151',
  },

  input: {
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 8,
    backgroundColor: '#2D3748', 
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Roboto',
    marginBottom: 15,
  },

  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#38B2AC', 
    borderRadius: 50,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  buttonCancel: {
    backgroundColor: '#4A5568',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
    width: '48%',
  },

  buttonSave: {
    backgroundColor: '#10B981',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
    width: '48%',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontWeight: '600',
  },
});
