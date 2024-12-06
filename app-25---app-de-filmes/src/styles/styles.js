import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212', 
  },

  movieCard: {
    marginBottom: 25,
    padding: 15,
    backgroundColor: '#1E1E1E', 
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8, 
    borderWidth: 1,
    borderColor: '#333', 
  },

  movieTitle: {
    fontSize: 30,
    fontWeight: '700', 
    marginBottom: 8,
    color: '#FF4C29', 
    fontFamily: 'Roboto', 
  },

  movieImage: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#444', 
  },

  movieSynopsis: {
    fontSize: 20,
    color: '#E5E5E5',
    lineHeight: 24, 
    marginBottom: 20,
  },

  moreButton: {
    alignSelf: 'flex-end',
    paddingVertical: 6,
    paddingHorizontal: 15,
    backgroundColor: '#FF4C29', 
    borderRadius: 8,
    shadowColor: '#FF4C29',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 4,
  },

  moreButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});
