import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';

export default function FraseScreen() {
  const [isDayMode, setIsDayMode] = useState(true);
  const [isSmallFont, setIsSmallFont] = useState(true);

  useEffect(() => {
    const loadPreferences = async () => {
      try {
        const dayMode = await AsyncStorage.getItem('dayMode');
        const smallFont = await AsyncStorage.getItem('smallFont');

        if (dayMode !== null) setIsDayMode(dayMode === 'true');
        if (smallFont !== null) setIsSmallFont(smallFont === 'true');
      } catch (error) {
        console.log(error);
      }
    };

    loadPreferences();
  }, []);

  const toggleDayMode = async () => {
    const newDayMode = !isDayMode;
    setIsDayMode(newDayMode);
    await AsyncStorage.setItem('dayMode', newDayMode.toString());
  };

  const toggleFontSize = async () => {
    const newFontSize = !isSmallFont;
    setIsSmallFont(newFontSize);
    await AsyncStorage.setItem('smallFont', newFontSize.toString());
  };

  return (
    <View style={[styles.container, isDayMode ? styles.lightBackground : styles.darkBackground]}>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Dia</Text>
        <Switch value={isDayMode} onValueChange={toggleDayMode} />
        <Text style={styles.switchLabel}>Pequeno</Text>
        <Switch value={isSmallFont} onValueChange={toggleFontSize} />
      </View>
      <View style={styles.phraseContainer}>
        <Text
          style={[
            styles.phraseText,
            isSmallFont ? styles.smallFont : styles.largeFont,
            isDayMode ? styles.darkText : styles.lightText 
          ]}
        >
          "A vingança nunca é plena, mata a alma e envenena" (Seu Madruga)
        </Text>
      </View>
    </View>
  );
}
