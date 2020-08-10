import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";


export default function ItemDetails({navigation, route}) {
    const item = route.params
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
            <Text>{item.title}</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
})