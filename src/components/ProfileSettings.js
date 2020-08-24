import React, {useState, useContext, useEffect} from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import Button from './Button'
import {ProductsContext} from '../contexts/ProductsContext'


export default function ProfileSettings({setProfileSettings}) {
    const {userInfo, setUserInfo} = useContext(ProductsContext)
    const user = auth().currentUser
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    

    useEffect(()=>{
        const getInfo = async()=>{
            await setEmail(userInfo.email)
            await setPhoneNumber(userInfo.phoneNumber)
            await setCity(userInfo.city)
            await setStreet(userInfo.street)
        }
        getInfo()
    }, [user])

    const updateInfo = async ()=>{
        await firestore()
        .collection("users")
        .doc(user.uid)
        .update({
            email,
            phoneNumber
        })
        await setUserInfo({email, phoneNumber, street, city})
        await user.updateEmail(email)
        alert("Done")
        setProfileSettings(false)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={()=>{
                setProfileSettings(false)
                }} style={styles.close}>
                <Icon name="md-close-outline" size={25} color="#4b24ab"/>
            </TouchableOpacity>
            
            <View style={styles.form}>
                <Icon2 name="user-cog"  size={36} color="#4b24ab"/>
                <Text style={styles.title}>Personal Info</Text>
                <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#4b24ab"
                onChangeText={text=>setEmail(text)}
                value={email}/>
                <TextInput
                style={styles.input}
                placeholder="Phone number"
                placeholderTextColor="#4b24ab"
                onChangeText={text=>setPhoneNumber(text)}
                value={phoneNumber}/>
            </View>
            <Button 
            text="Update"
            textColor="#fff"
            buttonColor="#4b24ab"
            onPress={updateInfo}
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