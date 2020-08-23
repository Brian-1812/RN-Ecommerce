import React, {useState,useEffect, useContext} from 'react'
import { View, Text, TextInput, StyleSheet,TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import BodyItem from '../components/BodyItem'
import {ProductsContext} from '../contexts/ProductsContext'

export default function Search({navigation}) {
    const [data, setData] = useState([])
    const [items, setItems] = useState([])
    const [query, setQuery] = useState('')
    const {products} = useContext(ProductsContext)

    useEffect(()=>{
        setData([...products.Food, ...products.Clothes, ...products.Drinks, ...products.Parfumes])
    }, [products])

    const search = (input) => {
        setQuery(input)
        let filteredData = data.filter(function (item) {
          return item.title.toLowerCase().includes(query.toLowerCase());
        });
      
        setItems(filteredData)
      };
    const navigate = (item) =>{
        navigation.navigate('ItemDetails', item)
    }
    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.textInput}
            placeholder="Search..."
            placeholderTextColor="#4b24ab"
            onChangeText={(input)=>search(input)}
            value={query}/>
            <Text style={styles.text}>Search results</Text>
            <View style={styles.flatlist}>
            <FlatList
            data={query.length>0?items:data}
            numColumns={2}
            keyExtractor={item => item.title}
            renderItem={({item})=>{
                return (
                    <BodyItem item={item} navigate={navigate}/>
                )
            }}/>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        flex:1,
    },
    textInput: {
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 8,
        borderRadius:30,
        margin:10,
        padding:10,
        color:"#4b24ab"

    },
    text:{
        color:"#4b24ab",
        fontSize:18,
        margin:3,
        marginLeft:20,
        fontWeight:'bold'
    },
    flatlist:{
        alignItems:'center',
        marginTop:15
    }
})