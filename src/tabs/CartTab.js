import React, { useContext} from 'react'
import {View, FlatList, StyleSheet} from 'react-native'
import CartItem from '../components/CartItem'
import CartFooter from '../components/CartFooter'
import {ProductsContext} from '../contexts/ProductsContext'

export default function CartTab() {
    const {cart} = useContext(ProductsContext)
    
    
    return (
        <View style={styles.container}>
            <FlatList
            style={styles.flatList}
            data={cart}
            keyExtractor={item=>item.id}
            initialNumToRender={4}
            renderItem={({item})=>(
                <CartItem item={item}/>
            )}/>
            <CartFooter/>
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