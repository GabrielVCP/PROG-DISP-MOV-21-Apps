import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  lightBackground: {
    backgroundColor: '#FFFFFF',
  },
  darkBackground: {
    backgroundColor: '#333333',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phraseContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  phraseText: {
    textAlign: 'center',
  },
  smallFont: {
    fontSize: 16,
  },
  largeFont: {
    fontSize: 24,
  },
  darkText: {
    color: '#000000',
  },
  lightText: {
    color: '#FFFFFF',
  },
});
