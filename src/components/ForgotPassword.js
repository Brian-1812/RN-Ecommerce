import React, {useState} from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import auth from "@react-native-firebase/auth"
import Button from './Button'
export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    return (
        <View>
            <TextInput
            placeholder="Email"
            onChangeText={text=>setEmail(text)}
            value={email}/>
            <Button
            text="Reset password"
            textColor="#fff"
            buttonColor="#4b24ab"
            onPress={()=>auth().sendPasswordResetEmail(email)}/>
        </View>
    )
}
