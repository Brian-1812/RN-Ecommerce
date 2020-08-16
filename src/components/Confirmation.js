import React from 'react'
import {View,StyleSheet, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Confirmation({setConfirmModal, navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={()=>{
                navigation.goBack()
                setConfirmModal(false)
                }} style={{marginBottom:60}}>
                <Icon style={styles.close} name="md-close-outline" size={25} color="#4b24ab"/>
            </TouchableOpacity>
            
            <View style={styles.box}>
            <Text style={styles.title}>VERIFY YOUR EMAIL</Text>
            <Text style={styles.body}>Verification email sent, please check your inbox!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor: '#fff'
    },
    close:{
        marginTop:20
    },
    box:{
        marginTop:25,
        width:350,
        height:250,
        alignItems:'center',
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.1,

        elevation: 4
    },
    title:{
        color:'#180352',
        fontSize:32,
        fontWeight:'bold'
    },
    body:{
        color:'#9d4ff0',
        fontSize:22,
        textAlign:'center',
        marginTop:15
    }
})