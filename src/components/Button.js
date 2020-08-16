import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function Button({text, textColor, buttonColor, onPress}) {
    const styles = StyleSheet.create({
        container:{
            width:250,
            height:60,
            marginBottom:12,
            marginRight:12,
            borderRadius:30,
            alignSelf:'flex-end',
            backgroundColor:buttonColor,
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
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
