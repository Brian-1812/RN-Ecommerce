import React, {useState,useContext, useEffect} from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import Button from './Button'
import {ProductsContext} from '../contexts/ProductsContext'

export default function LocationSettings({setLocationSettings}) {
    const {userInfo, setUserInfo} = useContext(ProductsContext)
    const user = auth().currentUser
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')

    useEffect(()=>{
        const getLocation = async()=>{
            await setCity(userInfo.city)
            await setStreet(userInfo.street)
            await setPhoneNumber(userInfo.phoneNumber)
            await setEmail(userInfo.email)
        }
        getLocation()
    }, [user])

    const updateLocation = async ()=>{
        await firestore()
        .collection("users")
        .doc(user.uid)
        .update({
            defaultLocation:{
                street:street,
                city:city
            }
        })
        setUserInfo({email, phoneNumber, street, city})
        alert("Done")
        setLocationSettings(false)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={()=>{
                setLocationSettings(false)
                }} style={styles.close}>
                <Icon name="md-close-outline" size={25} color="#4b24ab"/>
            </TouchableOpacity>
            
            <View style={styles.form}>
                <Icon name="location-sharp"  size={36} color="#4b24ab"/>
                <Text style={styles.title}>Default Address</Text>
                <TextInput
                style={styles.input}
                placeholder="City/Region"
                placeholderTextColor="#4b24ab"
                onChangeText={text=>setCity(text)}
                value={city}/>
                <TextInput
                style={styles.input}
                placeholder="Street name/home number"
                placeholderTextColor="#4b24ab"
                onChangeText={text=>setStreet(text)}
                value={street}/>
            </View>
            <Button 
            text="Update"
            textColor="#fff"
            buttonColor="#4b24ab"
            onPress={updateLocation}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:"space-around"
    },
    title:{
        margin:10,
        fontSize:19,
        color:"#4b24ab",
        fontWeight:"bold"
    },
    close:{
        alignItems:'center',
        justifyContent:"center",
        width:50,
        height:50,
        backgroundColor:"#fff",
        borderRadius:50,
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
    input:{
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