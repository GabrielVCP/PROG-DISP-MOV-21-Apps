import React from 'react';
import { SafeAreaView } from 'react-native';
import CurrencyConverterScreen from './src/screens/CurrencyConverterScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CurrencyConverterScreen />
    </SafeAreaView>
  );
}
