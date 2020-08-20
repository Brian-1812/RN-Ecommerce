import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'

export default function CartFooter({cart}) {
    const [total, setTotal] = useState(0)
    useEffect(()=>{
        let cost = 0
        cart.map(item=>{
            cost += item.count*item.price
        })
        setTotal(cost)
    }, [cart])

    return (
       <View style={styles.container}>
           <Text style={styles.text}>Total: ${total}</Text>
           <Button
           style={styles.button}
           text="Checkout"
           textColor="#fff"
           buttonColor="#63088c"
           onPress={()=>console.log("salom")}/>
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
    }
})