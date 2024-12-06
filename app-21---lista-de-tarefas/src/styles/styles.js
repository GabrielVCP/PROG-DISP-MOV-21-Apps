import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F3F4F6', 
  },
  
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#EF4444', 
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
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: '#E5E7EB', 
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3, 
  },

  taskText: {
    fontSize: 18,
    color: '#374151', 
    fontFamily: 'Roboto', 
  },

  iconContainer: {
    flexDirection: 'row',
    gap: 15,
  },

  inputContainer: {
    marginBottom: 20,
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: '#F3F4F6', 
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#EF4444', 
  },

  input: {
    borderWidth: 1.5,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#FFFFFF', 
    color: '#374151', 
    fontSize: 16,
    fontFamily: 'Roboto',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  floatingButton: {
    position: 'absolute',
    right: '8%',
    bottom: '8%',
    backgroundColor: '#EF4444',
    borderRadius: 50,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },

  buttonCancel: {
    backgroundColor: '#D1D5DB', 
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },

  buttonSave: {
    backgroundColor: '#EF4444', 
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
  },
});
