import React, {useContext, useState, useEffect} from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Store from '../tabs/Store'
import Search from '../tabs/SearchTab'
import CartTab from '../tabs/CartTab'
import AuthStack from './AuthStack'
import {ProductsContext} from '../contexts/ProductsContext'

const Tab = createMaterialBottomTabNavigator();
export default function BottomNav() {
  const {cart} = useContext(ProductsContext)
  const [badge, setBadge] = useState(0)
  useEffect(()=>{
    if(cart.length===0){
      setBadge(false)
    }else {setBadge(cart.length)}
  }, [cart])
  return (
      <Tab.Navigator
      initialRouteName="Store"
      activeColor='#4b24ab'
      inactiveColor='#9378d6'
      barStyle={{ backgroundColor: '#fff' }}
      >
          <Tab.Screen
          name="Store"
          component={Store}
          options={{
              tabBarLabel: 'Store',
              tabBarIcon: ({ color }) => (
                <Icon name="store" color={color} size={20} />
              ),
            }} />
          <Tab.Screen 
          name="Search"
          component={Search}
          options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({ color, size }) => (
                <Icon name="search" color={color} size={20} />
              ),
            }} />
          <Tab.Screen
          name="Cart"
          component={CartTab}
          options={{
              tabBarBadge:badge,
              tabBarLabel: 'Cart',
              tabBarIcon: ({ color, size }) => (
                <Icon name="shopping-cart" color={color} size={20} />
              ),
            }} />
          <Tab.Screen
          name="Profile"
          component={AuthStack}
          options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <Icon name="user-alt" color={color} size={20} />
              ),
            }} />
      </Tab.Navigator>
  )
}
