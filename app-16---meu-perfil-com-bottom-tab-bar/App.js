import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PersonalData from './src/screens/PersonalData';
import Education from './src/screens/Education';
import Experience from './src/screens/Experience';
import Projects from './src/screens/Projects';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#00d2ff',
          tabBarInactiveTintColor: '#9e9e9e',
          tabBarStyle: {
            backgroundColor: '#1e1e2f',
          },
        }}
      >
        <Tab.Screen name="Dados Pessoais" component={PersonalData} />
        <Tab.Screen name="Formação" component={Education} />
        <Tab.Screen name="Experiência" component={Experience} />
        <Tab.Screen name="Projetos" component={Projects} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
