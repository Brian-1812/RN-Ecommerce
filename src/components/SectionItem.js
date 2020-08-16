import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'


export default function SectionItem({item, changeSelected}) {

    return (
        <TouchableOpacity onPress={()=>changeSelected(item)}>
        <View style={item.selected?styles.selected:styles.container}>
            <Image source={{uri: item.uri}} style={styles.image}/>
            <Text style={item.selected?styles.selectedTitle:styles.title}>
                {item.title}
            </Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 20,
        width: 120,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:5,
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 8,
        marginBottom:10,
    },
    image:{
        width: 90,
        height:90,
        resizeMode:'cover',
        margin:5,
        borderRadius:50
    },
    title:{
        fontWeight:'bold',
        fontSize: 20,
        color:'#4b24ab'
    },
    selected:{
        borderRadius: 20,
        width: 120,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:5,
        backgroundColor:'#4b24ab',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 8,
        marginBottom:10
        // transform: [{ scale: 1.05 }],
        
    },
    selectedTitle:{
        fontWeight:'bold',
        fontSize: 20,
        color:'#fff'
    }
})