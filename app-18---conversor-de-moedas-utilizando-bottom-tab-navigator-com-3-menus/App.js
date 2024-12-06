import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RealToDollar from './src/screens/RealToDollar';
import RealToEuro from './src/screens/RealToEuro';
import RealToBitcoin from './src/screens/RealToBitcoin';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Real para Dólar" 
        screenOptions={{
          tabBarActiveTintColor: '#00d2ff',
          tabBarInactiveTintColor: '#bdbdbd',
          tabBarStyle: {
            backgroundColor: '#1e1e2f',
          },
        }}
      >
        <Tab.Screen name="Real para Dólar" component={RealToDollar} />
        <Tab.Screen name="Real para Euro" component={RealToEuro} />
        <Tab.Screen name="Real para Bitcoin" component={RealToBitcoin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
