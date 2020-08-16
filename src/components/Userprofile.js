import React, {useState} from 'react'
import {View, Text, TouchableOpacity,Modal, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import auth from '@react-native-firebase/auth'
import Button from './Button'
import ProfileUpdate from './ProfileUpdate'

export default function Userprofile() {
    const [confirmModal, setConfirmModal] = useState(false)
    // const [profileComplete, setProfileComplete] = useState(false)

    const user = auth().currentUser
    // if (!user.displayName || !user.photoURL){
    //     setProfileComplete(false)
    // }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.header}>
                    {user.photoURL?
                    <Image source={{uri: user.photoURL}} style={styles.profileImage}/>:
                    <Icon style={styles.icon}name="user-circle-o" size={60} color="black"/>}
                    {user.displayName?
                    <Text style={styles.name}>{user.displayName}</Text>:
                    <TouchableOpacity onPress={()=>setConfirmModal(true)}><Text style={styles.name}>Complete your profile</Text></TouchableOpacity>
                    }
                </View>
                <View>
                <TouchableOpacity onPress={()=>setConfirmModal(true)}><Icon1 style={styles.icon1} name='user-edit' size={20} color='#4b24ab'/></TouchableOpacity>
                </View>
            
            </View>
            {/* {!profileComplete?
            <View style={styles.completeProfile}>
                <TouchableOpacity onPress={()=>setConfirmModal(true)}>
                    <Text style={styles.completeProfText}>Complete your profile!</Text>
                </TouchableOpacity>
            </View>:None
            } */}
            
            <Button text="Logout" textColor='#4b24ab' buttonColor='#fff' onPress={()=>{
                auth().signOut()
                .then(() => console.log('User signed out!'));
            }}/>
            <Modal
            animationType="slide"
            transparent={false}
            visible={confirmModal}
            ><ProfileUpdate setConfirmModal={setConfirmModal}/>
            </Modal>
        </View>
        
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        margin: 15,
        justifyContent:'space-between'
    },
    name:{
        margin:10
    },
    completeProfile:{
        height:50,
        backgroundColor:"#4b24ab",
        margin:0,
        alignItems:"center",
        justifyContent:'center'
    },
    completeProfText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    },
    icon1:{
    }
})