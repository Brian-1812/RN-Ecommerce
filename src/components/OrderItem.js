import React, {useState, useEffect} from 'react'
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const {height, width} = Dimensions.get("window")
export default function OrderItem({navigation, remove, item}) {
    const [data, setData] = useState(item.cart)
    
    return (
        <View style={styles.container}>
        <Pressable onPress={()=>navigation.navigate("Favorites", {cart:data, title:"Order"})} style={styles.left}>
            <View style={{flexDirection:"row", alignItems: "center", justifyContent:"center"}}>
            <Icon name={item.delivered?"truck-check":"truck-fast"} size={36} color="#4b24ab"/>
            <Text style={{fontSize:18, color:"#710096", marginHorizontal:10}}>
                For {item.location.city}
            </Text>
            </View>
            <View>
            {item.delivered?
            <Text color="#000">Delivered</Text>:
            <Text color="#000">Pending</Text>}
            </View>
        </Pressable>
        <View style={styles.right}>
        <Pressable onPress={()=>remove(item)}>
            <View style={styles.remove}>
            <Icon name="delete" size={25} style={styles.icon}/>
            </View>
        </Pressable>
        </View>
        </View>
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
        height:70,
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
        color: '#b0002f',
        margin:3,
    },
    left:{
        marginHorizontal:10,
        padding:5,
        // alignItems:'center',
        justifyContent:'center',
    },
    right:{
        flexDirection:"row",
        height:"100%",
        alignItems:'center',
        justifyContent:'center',
    },
    remove: {
        backgroundColor:"#fff",
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        height:"100%",
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:2
    },
 })