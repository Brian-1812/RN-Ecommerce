import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function Button({text, textColor, buttonColor, onPress}) {
    const styles = StyleSheet.create({
        container:{
            width:220,
            height:50,
            borderRadius:30,
            marginRight:15,
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
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
