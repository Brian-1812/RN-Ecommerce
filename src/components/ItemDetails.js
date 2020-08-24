import React, {useState, useEffect, useContext} from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { SliderBox } from "react-native-image-slider-box";
import CartButton from './CartButton'
import {ProductsContext} from '../contexts/ProductsContext'
import BodyFlatlist from './BodyFlatlist'


export default function ItemDetails({route, navigation}) {
    const [added, setAdded] = useState(false)
    const [saved, setSaved] = useState(false)
    const {cart, setCart, savedItems, setSavedItems, products} = useContext(ProductsContext)
    const item = route.params

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

    const addToCart = async ()=>{
        await setCart([item, ...cart])
        alert(`${item.title} is added to your cart!`)
    }
    const save= ()=>{
        setSavedItems([item, ...savedItems])
    }
    const unsave= () =>{
        setSavedItems(savedItems=>savedItems.filter(product=>product.id !== item.id))
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
            imageLoadingColor="#4b24ab" />
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.title}>${item.price}</Text>
            </View>
            <View>
                <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus sem nisi, iaculis sit amet nibh sed, iaculis tempus nunc.
                Proin in tortor sed mauris consectetur gravida. Etiam sit amet dolor in
                felis eleifend pharetra id sit amet tortor. Quisque vitae quam porttitor,
                laoreet nisi vel, rutrum purus.
                Nullam sit amet nisl in felis feugiat bibendum.
                </Text>
            </View>
            </ScrollView>
            <View style={styles.footer}>
            {saved?
            <View style={styles.save}>
            <TouchableOpacity onPress={unsave}>
            <Icon name="heart" size={30} color="#d11925"/>
            </TouchableOpacity>
            </View>
            :
            <View style={styles.save}>
            <TouchableOpacity onPress={save}>
            <Icon name="heart-outline" size={30} color="#d11925"/>
            </TouchableOpacity>
            </View>
            }
            <CartButton
            added={added}
            style={styles.button}
            onPress={addToCart}/>
            </View>
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
    },
    footer:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"space-between"
    },
    save:{
        width:50,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'#fff',
        borderRadius:50,
        marginBottom:7,
        marginLeft:15,
        shadowColor: "#000",
            shadowOffset: {
                width: 4,
                height: 4,
            },
            shadowOpacity: 0.56,
            shadowRadius: 3.62,

            elevation: 8,
    },
    description:{
        margin:10,
        marginLeft:15,
        fontSize:17,
        color:"#333",
        alignItems:"center",
        justifyContent:"center",
        width:"80%"
    }
})