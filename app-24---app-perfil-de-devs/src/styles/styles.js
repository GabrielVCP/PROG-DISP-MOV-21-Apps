import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#F4F6F9', 
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#1E3A8A',
    borderRadius: 12,
    marginBottom: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, 
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: '700', 
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 1.5,
  },

  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },

  input: {
    width: '85%', 
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderWidth: 1.5,
    borderColor: '#D1D5DB', 
    borderRadius: 12,
    backgroundColor: '#FFFFFF', 
    marginBottom: 25,
    fontSize: 16,
    fontFamily: 'Roboto', 
    color: '#333', 
  },

  profileContainer: {
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF', 
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#4C9EFB', 
  },

  profileText: {
    fontSize: 18, 
    color: '#212529', 
    marginBottom: 10,
    fontWeight: '500', 
    fontFamily: 'Roboto', 
  },

  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  button: {
    width: '45%',
    paddingVertical: 14,
    backgroundColor: '#10B981',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
  },
});
