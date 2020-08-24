import React from 'react'
import {View,StyleSheet, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/FontAwesome'

export default function Confirmation({setConfirmModal, navigation}) {
    return (
        <View style={styles.container}>
            
            <TouchableOpacity  onPress={()=>{
                navigation.goBack()
                setConfirmModal(false)
                }} style={styles.close}>
                <Icon  name="md-close-outline" size={25} color="#4b24ab"/>
            </TouchableOpacity>
            <View style={styles.box}>
            
            <Icon2 style={styles.icon} name="send" size={30} color="#4b24ab"/>
            <Text style={styles.title}>VERIFY YOUR EMAIL</Text>
            <Text style={styles.body}>Verification email sent, please check your inbox!</Text>
            </View>
            <View></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:"space-around",
        backgroundColor: '#fff'
    },
    close:{
        margin:10,
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
    box:{
        // marginTop:25,
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
        fontSize:25,
        fontWeight:'bold',
        marginVertical:10,
    },
    body:{
        color:'#9d4ff0',
        fontSize:22,
        textAlign:'center',
        marginTop:15
    }
})