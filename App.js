import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DashboardScreen from './screens/DashboardScreen';
import SamplesScreen from './screens/SampleScreen';
import ExploreScreen from './screens/ExplorerScreen';
import LibraryScreen from './screens/LibraryScreen';
import UpgradeScreen from './screens/UpgradeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DashboardScreen">
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="SampleScreen" component={SamplesScreen} />
        <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
        <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
        <Stack.Screen name="UpgradeScreen" component={UpgradeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
