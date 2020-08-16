import React, {useState, useEffect} from 'react'
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Products from '../components/Products'
import BodyItem from '../components/BodyItem'

export default function Search() {
    // const [isLoading, setisLoading] = useState(true)
    const [query, setQuery] = useState('')
    
    // const products = Object.values(Products)
    
    // const results = []
    // const filter = (items, index) =>{
    //     setItems(items.filter((item)=>{
    //         if(item.title===query){
    //             results.push(item)
    //         }
    //     }))
    // }

    // useEffect(() => {
    //     if(query===''){
    //       setisLoading(false)
    //     }else{setisLoading(true)}
        
        
    //     setItems(a.map((item, index)=>{
    //        filter(item, index)
    //     }))


    //   }, [query])
    // let data = Products
    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.textInput}
            placeholder="Search..."
            placeholderTextColor="#4b24ab"
            onChangeText={(input)=>setQuery(input)}
            value={query}/>
            <Text style={styles.text}>Search results</Text>
            {/* <FlatList
            data={items}
            numColumns={2}
            keyExtractor={item => item.title}
            renderItem={({item})=>{
                return (
                    <BodyItem item={item}/>
                )
            }}/> */}
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        flex:1
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
        margin:15,
        padding:10,
        color:"#4b24ab"

    },
    text:{
        color:"#4b24ab",
        fontSize:18,
        margin:3,
        marginLeft:20,
        fontWeight:'bold'
    }
})