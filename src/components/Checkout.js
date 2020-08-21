import React, {useState, useContext} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import {ProductsContext} from '../contexts/ProductsContext'
import Button from './Button'


export default function Checkout({setIsVisible}) {
    const user = auth().currentUser
    const {cart, setCompletedOrders, completedOrders, setCart} = useContext(ProductsContext)
    const [location, setLocation] = useState('')
    const [phone, setPhone] = useState('')


    const order= async ()=>{
        await setCompletedOrders([{id:user.uid, location, phone, cart, delivered:false}, ...completedOrders])
        await firestore()
        .collection('users')
        .doc(user.uid)
        .update({
            completedOrders:completedOrders,
            cart:[]
        })
        setCart([])
        alert("Done")
        setIsVisible(false)
    }
    
    return (
        <View >
            {/* <Text style={styles.title}>Sign up</Text> */}
            <TextInput
            placeholder="Location"
            // style={styles.textInput}
            placeholderTextColor="#4b24ab"
            onChangeText={text => setLocation(text)}
            value={location}/>
            <TextInput
            placeholder="Phone number"
            placeholderTextColor="#4b24ab"
            // style={styles.textInput}
            onChangeText={text => setPhone(text)}
            value={phone}/>
            {/* <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholderTextColor="#4b24ab" 
            placeholder="Confirm password"
            onChangeText={text => setPassword2(text)}
            value={password2}/> */}
            <View >
            <Button 
            text="Place order"
            textColor="#fff"
            buttonColor="#4b24ab"
            onPress={order}/>
            </View>
            
        </View>
    )
}
