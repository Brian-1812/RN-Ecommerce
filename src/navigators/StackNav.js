import React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import BottomNav from './BottomNav'
import ItemDetails from '../components/ItemDetails'
import Header from '../components/Header'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name="BottomNav"
      component={BottomNav}
      options={{
        title:'',
        headerCenter:() => (
            <Header/>
          )
      }} />
      <Stack.Screen
      name="ItemDetails"
      component={ItemDetails}
      options={{
        title:'',
        headerRight:() => (
            <Header/>
        ),
      }}/>
    </Stack.Navigator>
  );
}

export default MyStack;