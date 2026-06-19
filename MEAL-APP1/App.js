import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategogoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
      <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />      
    </Stack.Navigator>
  );
}

export default function App() {
  return (<>
    <StatusBar style='dark'/>
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  </>
  );
}

const styles = StyleSheet.create({
  
});
