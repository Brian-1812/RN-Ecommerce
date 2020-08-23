import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import BodyItem from './BodyItem'

export default function VerticalFlatList({route, navigation}) {
    const data = route.params
    const navigate =(item)=>{
        navigation.navigate('ItemDetails', item)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data[0].section}</Text>
            <FlatList
            styles={styles.flatlist}
                data={data}
                numColumns={2}
                initialNumToRender={3}
                keyExtractor={item => item.id}
                renderItem={({item})=>(
                    <BodyItem item={item} navigate={navigate}/>
                )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex:1,
        alignItems: "center"
    },
    title:{
        fontSize:20,
        color:'#4b24ab',
        margin: 10,
        // marginLeft:15,
        fontWeight:'bold'
    },
    flatlist:{
        backgroundColor:'#fff',
        // margin:10,
        // marginBottom:20
    },
})