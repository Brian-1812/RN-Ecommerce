import React, {useState} from 'react'
import {View, Text, TouchableOpacity,Modal, StyleSheet,ScrollView, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth'
import Button from './Button'
import ProfileUpdate from './ProfileUpdate'
import Products from './Products'
import SectionItem from './SectionItem'

export default function Userprofile({navigation}) {
    const [confirmModal, setConfirmModal] = useState(false)
    // const [profileComplete, setProfileComplete] = useState(false)
    const products = Products.Food
    const user = auth().currentUser
    // if (!user.displayName || !user.photoURL){
    //     setProfileComplete(false)
    // }
     const changeSelected = (item) => {
        navigation.navigate('ItemDetails', item)
     }
    return (
        <View style={styles.container}>
            <ScrollView>
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
            <View>
            <Text style={styles.completedOrders}>Completed orders</Text>
            <FlatList
                style={styles.flatlist}
                data={products}
                initialNumToRender={3}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={({item})=>(
                    <SectionItem item={item} changeSelected={changeSelected}/>
                )}
            />
            <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
            </View>
            <View>
            <Text style={styles.completedOrders}>Saved items</Text>
            <FlatList
                style={styles.flatlist}
                data={products}
                initialNumToRender={3}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={({item})=>(
                    <SectionItem item={item} changeSelected={changeSelected}/>
                )}
            />
            <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
            </View>
            
            </ScrollView>
            <TouchableOpacity style={styles.exit} onPress={()=>{
                auth().signOut().then(() => console.log('User signed out!'));
            }}>
                <View >
                    <Icon2 name="exit-outline" size={42} color="#4b24ab"/>
                </View>
            </TouchableOpacity>
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
    flatlist:{
        marginLeft:10
    },
    completedOrders:{
        color:"#4b24ab",
        margin:15,
        fontSize:20,
        fontWeight: 'bold'
    },
    seeAll:{
        color:"#b434eb",
        fontSize:15,
        alignSelf:'flex-start',
        margin:15,
        marginTop:5
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        margin: 15,
        justifyContent:'space-between',
        
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
    exit:{
        position:'absolute',
        backgroundColor: "#fff",
        right:20,
        bottom:20,
        width:60,
        height:60,
        borderRadius:30,
        alignItems:'center',
        justifyContent:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 15,

    }
})