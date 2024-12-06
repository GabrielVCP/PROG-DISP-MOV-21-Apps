import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1e1e2f',  
  },
  jobContainer: {
    marginBottom: 15,
    padding: 20,
    backgroundColor: '#2b2b3d', 
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#3d3d5c',
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00d2ff',  
    marginBottom: 8,
  },
  button: {
    marginTop: 10,
    paddingVertical: 12,
    backgroundColor: '#0d7377',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#00d2ff', 
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
