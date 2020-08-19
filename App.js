import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import StackNav from './src/navigators/StackNav'
import ProductsContextProvider from './src/contexts/ProductsContext'


const App = () => {
  enableScreens();
  return (
    <ProductsContextProvider>
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
    </ProductsContextProvider>
  )
};
export default App;
