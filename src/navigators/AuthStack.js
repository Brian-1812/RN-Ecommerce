import React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Auth from '../components/Auth'
import RegisterView from '../components/RegisterView'

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
        </Stack.Navigator>
    )
}
