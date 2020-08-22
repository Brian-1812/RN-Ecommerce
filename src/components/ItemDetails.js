import React, {useState, useEffect, useContext} from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { SliderBox } from "react-native-image-slider-box";
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import CartButton from './CartButton'
import {ProductsContext} from '../contexts/ProductsContext'


export default function ItemDetails({route}) {
    const [added, setAdded] = useState(false)
    const [saved, setSaved] = useState(false)
    const {cart, setCart, savedItems, setSavedItems} = useContext(ProductsContext)
    const item = route.params
    const user = auth().currentUser

    useEffect(()=>{
        const checkCart = () =>{
            cart.map(product=>{
                if(product.id===item.id){
                    setAdded(true)
                }
                
            })
        }
        checkCart()
    },[cart])
    
    useEffect(()=>{
        setSaved(false)
        const checkSaved=()=>{
            savedItems.map(product=>{
                if (product.id===item.id){
                    setSaved(true)
                }
            })
        }
        checkSaved()
    }, [savedItems])

    // const updateCartOnline = async ()=>{
    //     await firestore()
    //     .collection('users')
    //     .doc(user.uid)
    //     .update({
    //         cart:cart
    //     })
    // }
    const addToCart = async ()=>{
        await setCart([item, ...cart])
        // await updateCartOnline()
        alert(`${item.title} is added to your cart!`)
    }
    const save= ()=>{
        setSavedItems([item, ...savedItems])
        // firestore()
        // .collection('users')
        // .doc(user.uid)
        // .update({
        //     savedItems:savedItems
        // })
    }
    const unsave= () =>{
        setSavedItems(savedItems=>savedItems.filter(product=>product.id !== item.id))
        // firestore()
        // .collection('users')
        // .doc(user.uid)
        // .update({
        //     savedItems:savedItems
        // })
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
            <View>
            <Text style={styles.title}>{item.title}</Text>
            {saved?
            <TouchableOpacity onPress={unsave}>
            <Icon name="bookmark" size={22}/>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={save}>
            <Icon name="bookmark-outline" size={22}/>
            </TouchableOpacity>
            }
            
            </View>
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