import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import JobList from '../screens/JobList/JobList';
import JobDetails from '../screens/JobDetails/JobDetails';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="JobList">
        <Stack.Screen name="JobList" component={JobList} options={{ title: 'Vagas de Emprego' }} />
        <Stack.Screen name="JobDetails" component={JobDetails} options={{ title: 'Detalhes da Vaga' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
