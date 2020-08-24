import React, {useState, useContext, useEffect} from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import BodyItem from './BodyItem'
import {ProductsContext} from '../contexts/ProductsContext'

export default function Favorites({navigation, route}) {
    const {savedItems} = useContext(ProductsContext)
    const order = route.params;
    const [data, setData] = useState([])

    useEffect(()=>{
        if(order.title==="Order"){
            setData(order.cart)
        }else{
            setData(savedItems)
        }
    }, [savedItems])
    
    const navigate =(item)=>{
        navigation.navigate("ItemDetails", item)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{order.title}</Text>
            <View style={styles.flatlist}>
            <FlatList
                data={data}
                numColumns={2}
                initialNumToRender={3}
                keyExtractor={item => item.id}
                renderItem={({item})=>(
                    <BodyItem item={item} navigate={navigate}/>
                )}
            />
            </View>
        </View>
    )
}
const {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex:1,
    },
    title:{
        fontSize:20,
        color:'#4b24ab',
        margin: 10,
        marginLeft:25,
        fontWeight:'bold'
    },
    flatlist:{
        backgroundColor:'#fff',
        width:width-10,
        padding:15,
        margin:5
        // margin:10,
        // marginBottom:20
    },
})