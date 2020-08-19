import React, {useState, useContext, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import BodyItem from './BodyItem'
import {ProductsContext} from '../contexts/ProductsContext'

export default function BodyFlatlist({section, navigation}) {
    const {products} = useContext(ProductsContext)

    const navigate = (item) =>{
        navigation.navigate('ItemDetails', item)
    }
    return (
        <View>
            <Text style={styles.title}>{section}</Text>
            <FlatList
            styles={styles.flatlist}
                data={products[section]}
                horizontal={true}
                initialNumToRender={3}
                keyExtractor={item => item.id}
                renderItem={({item})=>(
                    <BodyItem item={item} navigate={navigate}/>
                )}
            />
            <TouchableOpacity><Text style={styles.more}>See all</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        color:'#4b24ab',
        margin: 10,
        marginLeft:15,
        fontWeight:'bold'
    },
    flatlist:{
        backgroundColor:'#fff',
        margin:10,
        marginBottom:20
    },
    more:{
        color:'#cb30ff',
        alignSelf:'flex-end',
        fontSize: 16,
        marginRight:12,
        marginBottom:15,
        marginTop:5
    }
})