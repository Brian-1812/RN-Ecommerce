import React, {useContext} from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import OrderItem from './OrderItem'
import {ProductsContext} from '../contexts/ProductsContext'

export default function Orders({navigation}) {
    const {completedOrders, setCompletedOrders} = useContext(ProductsContext)

    const remove= async (item)=>{
        await setCompletedOrders(completedOrders=>completedOrders.filter(product=>product.id !== item.id))
    }
    return (
        <View style={styles.container}>
            <FlatList
            style={styles.flatList}
            data={completedOrders}
            keyExtractor={item=>item.id}
            initialNumToRender={4}
            renderItem={({item})=>(
                <OrderItem navigation={navigation} item={item} remove={remove}/>
            )}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    flatlist:{
        backgroundColor:'#fff',
        alignItems: 'center',
        width:"100%"
    },
})