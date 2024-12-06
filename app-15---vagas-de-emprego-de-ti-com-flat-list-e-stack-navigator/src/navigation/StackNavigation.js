import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import JobList from '../screens/JobList/JobList';
import JobDetails from '../screens/JobDetails/JobDetails';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="JobList" component={JobList} options={{ title: 'Vagas de Emprego em TI' }} />
    <Stack.Screen name="JobDetails" component={JobDetails} options={{ title: 'Detalhes da Vaga' }} />
  </Stack.Navigator>
);

export default StackNavigator;
