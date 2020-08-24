import React, {useState} from 'react'
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'
import auth from "@react-native-firebase/auth"
import Icon from 'react-native-vector-icons/Ionicons'
import Button from './Button'


export default function ForgotPassword({navigation}) {
    const [email, setEmail] = useState('')

    const resetPassword = () =>{
        auth()
        .sendPasswordResetEmail(email)
        .then(alert("Email sent. Please check your inbox!"))
        .catch(err=>console.log(err))
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <Icon name="md-lock-open" size={36} color="#4b24ab"/>
            <Text style={styles.title}>Password Reset</Text>
            <TextInput
            style={styles.textInput}
            placeholderTextColor="#4b24ab"
            placeholder="Email"
            onChangeText={text=>setEmail(text)}
            value={email}/>
            <Button
            text="Reset password"
            textColor="#fff"
            buttonColor="#4b24ab"
            onPress={resetPassword}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#fff"
    },
    title:{
        color:"#4b24ab",
        fontSize:19,
        fontWeight:"bold",
        margin:10
    },
    textInput:{
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 8,
        borderRadius:30,
        color:'#4b24ab',
        padding:15,
        width:300,
        margin:15
    },
})