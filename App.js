import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import StackNav from './src/navigators/StackNav'


const App = () => {
  enableScreens();
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
  )
};
export default App;
