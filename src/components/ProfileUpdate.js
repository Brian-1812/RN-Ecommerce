import React, {useState} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Button from './Button'
import auth from '@react-native-firebase/auth'

export default function ProfileUpdate({setConfirmModal}) {
    const user = auth().currentUser
    const [username, setUsername] = useState(user.displayName)

    const update = () =>{
        user.updateProfile({
            displayName:username
        }).then(()=>{
            setConfirmModal(false)
        })
        .catch(err=>console.log(err))
    }
    
    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={()=>{
                setConfirmModal(false)
                }} style={{marginBottom:60}}>
                <Icon style={styles.close} name="md-close-outline" size={25} color="#4b24ab"/>
            </TouchableOpacity>
            <Text style={styles.title}>Update your profile</Text>
            <TextInput
            placeholder='Username'
            value={username}
            onChangeText={(text)=>setUsername(text)}
            />
            <Button text="Update" textColor="#4b24ab" buttonColor="#fff" onPress={update}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    close:{
        marginTop:20
    },
    title:{
        fontSize:25,
        color:"#4b24ab"
    }
})