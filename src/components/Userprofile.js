import React, {useState} from 'react'
import {View, Text, TouchableOpacity,Modal, StyleSheet,ScrollView,Image} from 'react-native'
import auth from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'
import HistoryItems from './HistoryItems'
import ProfileUpdate from './ProfileUpdate'



export default function Userprofile({navigation}) {
    const [confirmModal, setConfirmModal] = useState(false)
    const user = auth().currentUser
    
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
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
            <HistoryItems navigation={navigation}/>
            <View style={styles.line}></View>
            <View style={styles.settings}>
            <View style={styles.settingsItem}>
                <Icon2 name="location-sharp" color="#4b24ab" size={30}/>
                <Text style={{marginLeft:10}}>Location/Address settings</Text>
            </View>
            <View style={styles.settingsItem}>
                <Icon1 name="users-cog" color="#4b24ab" size={28}/>
                <Text style={{marginLeft:10}}>Profile settings</Text>
            </View> 
            </View>
            </ScrollView>
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
    settings:{
        margin:10
    },
    settingsItem:{
        flexDirection:"row",
        margin:8,
        alignItems:"center"
    },
    line:{
        margin:10,
        height:1,
        backgroundColor:"#4b24ab",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 8,
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        margin: 15,
        justifyContent:'space-between',
    },
    headerLeft:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom: 5,
        justifyContent:'space-between',
    },
    name:{
        marginLeft:20,
        color:"#4b24ab",
        fontSize:20,
        fontWeight:'bold'
    },
    profileImage:{
        width:70,
        height:70,
        resizeMode:'cover',
        borderRadius:50
    }
})