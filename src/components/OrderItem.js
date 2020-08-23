import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const {height, width} = Dimensions.get("window")
export default function OrderItem({navigation, item}) {
    const data =item.cart
    console.log(item)
    return (
        <TouchableOpacity onPress={()=>navigation.navigate("SeeAll", data)} style={styles.container}>
            <View style={styles.left}>
            <View style={{marginLeft:7}}>
                <Icon name={item.delivered?"truck-check":"truck-fast"} size={30} color="black"/>
                <Text style={{fontSize:18, color:"black"}}>{item.location}</Text>
                {/* <Text>Total Cost: ${item.price}</Text> */}
            </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:"center",
        justifyContent: "space-between",
        width:width-5,
        backgroundColor: 'white',
        height:90,
        borderRadius:25,
        shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2,
         },
         shadowOpacity: 0.23,
         shadowRadius: 2.62,
 
         elevation: 4,
         margin:5,
         paddingRight:0
    },
    rightPrice:{
        marginHorizontal:8,
        fontSize:18
    },
    icon:{
        color: 'white',
        margin:3,
    },
    left:{
        flexDirection:"row",
        marginHorizontal:5,
        alignItems:'center',
        justifyContent:'center',
    },
    right:{
        flexDirection:"row",
        height:"100%",
        alignItems:'center',
        justifyContent:'center',
    }
 })