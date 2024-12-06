import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from '../styles/styles';

export default function CurrencyInput({ value, setValue }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Valor"
        keyboardType="numeric"
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
}
