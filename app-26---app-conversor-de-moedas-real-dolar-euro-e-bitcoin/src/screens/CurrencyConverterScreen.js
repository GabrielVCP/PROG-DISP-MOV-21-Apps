import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import CurrencyInput from '../components/CurrencyInput';
import CurrencyPicker from '../components/CurrencyPicker';
import { styles } from '../styles/styles';

export default function CurrencyConverterScreen() {
  const [value, setValue] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BRL');
  const [convertedValue, setConvertedValue] = useState(null);

  const fetchConversionRate = async () => {
    if (!value || isNaN(value)) {
      Alert.alert('Erro', 'Por favor, insira um valor numérico válido.');
      return;
    }

    try {
      const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${fromCurrency}-${toCurrency}`);
      const data = await response.json();
      const conversionRate = data[`${fromCurrency}${toCurrency}`].ask;
      const result = (parseFloat(value) * parseFloat(conversionRate)).toFixed(2);
      setConvertedValue(result);
    } catch (error) {
      Alert.alert('Erro', 'Falha ao buscar a taxa de conversão.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>

      <CurrencyInput value={value} setValue={setValue} />

      <CurrencyPicker label="De:" selectedCurrency={fromCurrency} setSelectedCurrency={setFromCurrency} />

      <CurrencyPicker label="Para:" selectedCurrency={toCurrency} setSelectedCurrency={setToCurrency} />

      <Button title="Converter" onPress={fetchConversionRate} color="#007bff" />

      {convertedValue && (
        <Text style={styles.convertedValue}>Valor convertido: {convertedValue}</Text>
      )}
    </View>
  );
}
