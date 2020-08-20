import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function CartButton({added, onPress}) {
    var color="#4b24ab"
    var textColor="#fff"
    if(added){
        color = '#876b99',
        textColor='#fff'
    }
    const styles = StyleSheet.create({
        container:{
            width:250,
            height:60,
            marginBottom:12,
            marginRight:12,
            borderRadius:30,
            alignSelf:'flex-end',
            backgroundColor:color,
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
        },
        text: {
            color:textColor,
            fontSize:16,
            fontWeight: 'bold'
        }
    })
    return (
        <Pressable onPress={onPress} disabled={added}>
            <View style={styles.container}>
                <Text style={styles.text}>{added?"Already added":"Add to cart"}</Text>
            </View>
        </Pressable>
    
    )
}
