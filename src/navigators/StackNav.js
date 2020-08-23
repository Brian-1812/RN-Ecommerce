import React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import BottomNav from './BottomNav'
import ItemDetails from '../components/ItemDetails'
import Header from '../components/Header'
import VerticalFlatList from '../components/VerticalFlatList'
import RegisterView from '../components/RegisterView'
import Orders from '../components/Orders'
import Favorites from '../components/Favorites'
import HistoryItems from '../components/HistoryItems'
import ForgotPassword from '../components/ForgotPassword'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name="BottomNav"
      component={BottomNav}
      options={{
        title:'',
        headerTintColor:"#4b24ab",
        headerTopInsetEnabled:false,
        headerCenter:() => (
            <Header/>
          )
      }} />
      <Stack.Screen 
      name="RegisterView"
      component={RegisterView}
      options={{
        headerTopInsetEnabled:false,
        headerTintColor:"#4b24ab",
        title:'',
        headerRight:() => (
            <Header/>
        ),
      }}/>
      <Stack.Screen 
      name="ForgotPassword"
      component={ForgotPassword}
      options={{
        headerTopInsetEnabled:false,
        headerTintColor:"#4b24ab",
        title:'',
        headerRight:() => (
            <Header/>
        ),
      }}/>
      <Stack.Screen
      name="ItemDetails"
      component={ItemDetails}
      options={{
        headerTopInsetEnabled:false,
        headerTintColor:"#4b24ab",
        title:'',
        headerRight:() => (
            <Header/>
        ),
      }}/>
      <Stack.Screen
      name="SeeAll"
      component={VerticalFlatList}
      options={{
        headerTopInsetEnabled:false,
        headerTintColor:"#4b24ab",
        title:'',
        headerRight:() => (
            <Header/>
        ),
      }} />
      <Stack.Screen
      name="HistoryItems"
      component={HistoryItems}
      options={{
          title:'',
          headerTintColor:"#4b24ab",
          headerTopInsetEnabled:false,
          headerCenter:() => (
              <Header/>
          )
      }} />
      <Stack.Screen
      name="Orders"
      component={Orders}
      options={{
          title:'',
          headerTintColor:"#4b24ab",
          headerTopInsetEnabled:false,
          headerCenter:() => (
              <Header/>
          )
      }} />
      <Stack.Screen
      name="Favorites"
      component={Favorites}
      options={{
          title:'',
          headerTintColor:"#4b24ab",
          headerTopInsetEnabled:false,
          headerCenter:() => (
              <Header/>
          )
      }} />
    </Stack.Navigator>
  );
}

export default MyStack;