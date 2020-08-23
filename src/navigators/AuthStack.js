import React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Auth from '../components/Auth'
import RegisterView from '../components/RegisterView'
import HistoryItems from '../components/HistoryItems'
import Header from '../components/Header'
import Orders from '../components/Orders'
import Favorites from '../components/Favorites'
import ItemDetails from '../components/ItemDetails'

const Stack = createNativeStackNavigator()

export default function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="Auth"
            component={Auth}
            options={{
                headerShown:false }} />
            <Stack.Screen 
            name="RegisterView"
            component={RegisterView}
            options={{
                headerShown:false }}/>
            
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
    )
}
