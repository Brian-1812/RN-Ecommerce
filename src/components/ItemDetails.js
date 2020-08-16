import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import Button from './Button'


export default function ItemDetails({navigation, route}) {
    const item = route.params
    const text = `Add to Cart: $${item.price}`
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
            <Button
            style={styles.button}
            text={text}
            textColor="#fff"
            buttonColor="#4b24ab"
            onPress={()=>console.log(item.price)}/>
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