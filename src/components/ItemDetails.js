import React, {useState, useEffect, useContext} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import CartButton from './CartButton'
import {ProductsContext} from '../contexts/ProductsContext'


export default function ItemDetails({route}) {
    const [added, setAdded] = useState(false)
    const {cart, setCart} = useContext(ProductsContext)
    const item = route.params
    const user = auth().currentUser

    useEffect(()=>{
        const check = () =>{
            cart.map(product=>{
                if(product.id===item.id){
                    setAdded(true)
                }
            })
        }
        check()
    },[cart])

    const updateCartOnline = async ()=>{
        await firestore()
        .collection('users')
        .doc(user.uid)
        .update({
            cart:cart
        })
    }
    const addToCart = async ()=>{
        await setCart([item, ...cart])
        await updateCartOnline()
        alert(`${item.title} is added to your cart!`)
    }

    return (
        <View style={styles.container}>
            <ScrollView>
            <SliderBox
            images={item.images}
            sliderBoxHeight={400}
            paginationBoxStyle={{marginBottom:15}}
            autoPlay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'cover'}
            dotColor="#fff"
            inactiveDotColor="#4b24ab"
            // ImageComponentStyle={{marginTop: 1, marginBottom: 15}}
            imageLoadingColor="#4b24ab" />
            <Text style={styles.title}>{item.title}</Text>
            </ScrollView>
            <CartButton
            added={added}
            style={styles.button}
            onPress={addToCart}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    title: {
        color:'#4b24ab',
        fontSize:22,
        fontWeight: 'bold',
        margin:10
    }
})