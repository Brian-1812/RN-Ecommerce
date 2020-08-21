import React, {useState, useEffect, useContext} from 'react'
import { View, Text, StyleSheet,TouchableOpacity,Pressable, Image, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import {ProductsContext} from '../contexts/ProductsContext'

const {height, width} = Dimensions.get("window")
export default function CartItem({item}) {
    const {cart, setCart} = useContext(ProductsContext)
    const [disabled, setDisabled] = useState(false)
    
    useEffect(()=>{
        if(item.count===1){
            setDisabled(true)
        }else{
            setDisabled(false)
        }
    }, [item.count])
    
    const plus =async ()=>{
        await setCart(cart=>cart.map(product => {
            if(product.id===item.id){
                product.count += 1
            }
            return product
        }))
    }
    
    const minus =async ()=>{
        await setCart(cart=>cart.map(product => {
            if(product.id===item.id){
                product.count -= 1
            }
            return product
        }))
    }

    const remove=async ()=>{
        await setCart(cart=>cart.filter(product=>product.id !== item.id))
    }
    return (
        <View style={styles.container}>
            <View style={styles.left}>
            <Image source={{uri:item.image}} style={styles.image}/>
            <View style={{marginLeft:7}}>
                <Text style={{fontSize:18}}>{item.title}</Text>
                <Text>Each: ${item.price}</Text>
            </View>
            </View>
            <View style={styles.center}>
                <Pressable disabled={disabled} onPress={minus}>
                <Icon name="minus" size={18} style={styles.icon}/>
                </Pressable >
                <Text style={styles.count} style={[styles.icon, {fontSize:15}]}>{item.count}</Text>
                <TouchableOpacity onPress={plus}>
                <Icon name="plus" size={18} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            <View style={styles.right}>
                <Text style={styles.rightPrice}>${item.price*item.count}</Text>
                <TouchableOpacity onPress={remove}>
                <View style={styles.remove}>
                <Icon name="close" size={18} style={styles.icon}/>
                </View>
                </TouchableOpacity>
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
   remove: {
       backgroundColor:"#b0002f",
       borderTopRightRadius:20,
       borderBottomRightRadius:20,
       height:"100%",
       alignItems:'center',
       justifyContent:'center',
       paddingHorizontal:2
   },
   icon:{
       color: 'white',
       margin:3,
   },
   image:{
       width:75,
       height:75,
       borderRadius:25,
       marginLeft:3
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
   },
   center:{
    flexDirection:"row",
    backgroundColor:'#710096',
    padding:7,
    paddingHorizontal:15,
    borderRadius:20
   }
})