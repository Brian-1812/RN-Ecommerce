import React from 'react'
import { View } from 'react-native'
import Auth from '../components/Auth'

export default function Profile() {
    return (
        <View style={{flex:1, backgroundColor:'#fff', justifyContent: 'center'}}>
            <Auth/>
        </View>
    )
}
