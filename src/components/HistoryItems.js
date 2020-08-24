import React, {useContext} from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome'
import {ProductsContext} from '../contexts/ProductsContext'

export default function HistoryItems({navigation}) {
    const {savedItems} = useContext(ProductsContext)
    return (
        <View style={styles.products}>
            <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={()=>{navigation.navigate("Orders")}} style={{alignItems:"center", margin:8}}>
            <View style={styles.itemSection}>
                <Icon name="shopping-bag" size={34} color="#4b24ab"/>
            </View>
            <Text style={styles.sectionText}>Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("Favorites", {cart:false, title:"Favorites"})}} style={{alignItems:"center", margin:8}}>
            <View style={styles.itemSection}>
                <Icon2 name="heart" size={36} color="#d11925"/>
            </View>
            <Text style={styles.sectionText}>Favorites</Text>
            </TouchableOpacity>
            </View>
            <View style={{width:1, backgroundColor:'#4b24ab', marginVertical:20}}></View>
            <TouchableOpacity style={{alignItems:"center", margin:8}} onPress={()=>{
                auth().signOut().then(() => console.log('User signed out!'));
            }}>
            <View style={styles.itemSection}>
                <Icon2 name="exit-outline" size={36} color="#4b24ab"/> 
            </View>
            <Text style={styles.sectionText}>Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    products:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    itemSection:{
        width:60,
        height:60,
        backgroundColor:"#fff",
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 8,
    },
    sectionText:{
        fontSize:15,
        fontWeight:"bold",
        marginTop:5,
        color:"#4b24ab"
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

    },
    
})