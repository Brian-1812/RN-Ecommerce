import React, {useEffect, useContext, useState} from 'react'
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native'
import {ProductsContext} from '../contexts/ProductsContext'
import Checkout from './Checkout'

export default function CartFooter() {
    const {cart} = useContext(ProductsContext)
    const [total, setTotal] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [color, setColor] = useState('#63088c')
    
    useEffect(()=>{
        let cost = 0
        cart.map(product=>{
            cost += product.count*product.price
        })

        setTotal(cost)
    }, [cart])
    
    useEffect(()=>{
        const disableButton=()=>{
            if(cart.length===0){
                setDisabled(true)
                setColor('#876b99')
            }else{
                setDisabled(false)
                setColor('#63088c')
            }
        }
        disableButton()

    }, [cart])

    const checkout = ()=>{
        setIsVisible(true)
    }
    return (
       <View style={styles.container}>
           <Text style={styles.text}>Total: ${total}</Text>
           <Pressable onPress={checkout} disabled={disabled}>
               <View style={[styles.button, {backgroundColor:color}]}>
                    <Text style={styles.buttonText}>Checkout</Text>
               </View>
           </Pressable>
           <Modal
                animationType="slide"
                transparent={false}
                visible={isVisible}
            >
                <Checkout setIsVisible={setIsVisible}/>
            </Modal>
       </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        height:60,
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderTopRightRadius:10,
        borderTopLeftRadius:10
    },
    text: {
        fontSize:20,
        marginHorizontal:15,
        color: '#7b1fcc',
        fontWeight:"bold"     
    },
    buttonText: {
        color:"#fff"
    },
    button:{
        width:150,
        height:40,
        borderRadius:30,
        marginRight:15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 8,
    }
})