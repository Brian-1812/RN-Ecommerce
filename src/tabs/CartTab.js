import React, {useState, useEffect, useContext} from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import CartItem from '../components/CartItem'
import CartFooter from '../components/CartFooter'
import {ProductsContext} from '../contexts/ProductsContext'

export default function CartTab() {
    const {cart, setCart} = useContext(ProductsContext)
    // console.log(cart)
    
    
    return (
        <View style={styles.container}>
            <FlatList
            style={styles.flatList}
            data={cart}
            keyExtractor={item=>item.id}
            initialNumToRender={4}
            renderItem={({item})=>(
                <CartItem item={item}/>
            )}/>
            <CartFooter cart={cart}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    flatlist:{
        backgroundColor:'#fff',
        alignItems: 'center',
        width:"100%"
    },
})