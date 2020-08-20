import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'


export default function BodyItem({item, navigate}) {
    
    return (
        <TouchableOpacity onPress={()=>navigate(item)}>
        <View style={styles.container}>
            <Image source={{uri: item.image}} style={styles.image}/>
            <Text style={styles.title}>
                {item.title}
            </Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 20,
        width: 170,
        height: 230,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:7,
        marginLeft:15,
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 8,
        marginBottom:20
    },
    image:{
        width: 150,
        height:150,
        resizeMode:'cover',
        margin:15,
        borderRadius:80
    },
    title:{
        fontWeight:'bold',
        fontSize: 20,
        color:'#4b24ab'
    },
    
})