import React, {useState,useEffect, useContext} from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import nextId from "react-id-generator"
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/Fontisto'
import {ProductsContext} from '../contexts/ProductsContext'
import Button from './Button'


export default function Checkout({setIsVisible}) {
    const user = auth().currentUser
    const {cart, setCompletedOrders, completedOrders, setCart, userInfo} = useContext(ProductsContext)
    const [location, setLocation] = useState('')
    const [phone, setPhone] = useState('')
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [date, setDate] = useState(new Date().getDate())
    
    useEffect(()=>{
        setPhone(userInfo.phoneNumber)
        setStreet(userInfo.street)
        setCity(userInfo.city)
    }, [user])

    useEffect(()=>{
        setLocation({street, city})
    }, [street, city])
    
    const order= async ()=>{
        await setCompletedOrders([
            {id:nextId(), date:date.toString(), location, phone, cart, delivered:false},
            ...completedOrders
        ])
        setCart([])
        alert("Done")
        setIsVisible(false)
    }
    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>setIsVisible(false)} style={styles.icon}>
            <Icon name="close-a" size={15} color="#4b24ab" />
            </TouchableOpacity>
            <Icon name="shopping-bag-1" size={52} color="#4b24ab"/>
            <View style={styles.form}>
            <TextInput
            placeholder="Street"
            style={styles.textInput}
            placeholderTextColor="#4b24ab"
            onChangeText={text => setStreet(text)}
            value={street}/>
            <TextInput
            placeholder="City"
            style={styles.textInput}
            placeholderTextColor="#4b24ab"
            onChangeText={text => setCity(text)}
            value={city}/>
            <TextInput
            placeholder="Phone number"
            placeholderTextColor="#4b24ab"
            style={styles.textInput}
            onChangeText={text => setPhone(text)}
            value={phone}/>
            
            </View>
            <Button 
            text="Place order"
            textColor="#fff"
            buttonColor="#4b24ab"
            onPress={order}/>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"space-around"
    },
    icon:{
        width:50,
        height:50,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.2,

        elevation: 8,
    },
    form:{
        alignItems:"center",
        justifyContent:"center"
    },
    textInput:{
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 6,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 2,
        borderRadius:20,
        marginBottom:10,
        marginHorizontal:15,
        color:'#4b24ab',
        padding:15,
        width:300
    }
})