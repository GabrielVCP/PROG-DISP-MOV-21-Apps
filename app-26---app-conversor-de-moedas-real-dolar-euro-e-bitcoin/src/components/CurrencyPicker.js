import React from 'react';
import { View, Text, Picker } from 'react-native';
import { styles } from '../styles/styles';

export default function CurrencyPicker({ label, selectedCurrency, setSelectedCurrency }) {
  return (
    <View style={styles.pickerContainer}>
      <Text style={styles.pickerLabel}>{label}</Text>
      <Picker
        selectedValue={selectedCurrency}
        onValueChange={(itemValue) => setSelectedCurrency(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Real" value="BRL" />
        <Picker.Item label="Dólar" value="USD" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Bitcoin" value="BTC" />
      </Picker>
    </View>
  );
}
