import React, {useState} from 'react'
import { FlatList, StyleSheet } from 'react-native'
import nextId from "react-id-generator"
import SectionItem from './SectionItem'

export default function SectionFlatlist({setSection}) {
    const [menu, setMenu] = useState([
        {title:"Food", image:'https://source.unsplash.com/1600x900/?meal,soup', id: nextId(), selected:false},
        {title:"Drinks", image:'https://source.unsplash.com/1600x900/?tea,coffee,cola', id: nextId(), selected:false},
        {title:"Clothes", image:'https://source.unsplash.com/1600x900/?clothes,shirt', id: nextId(), selected:false},
        {title:"Parfumes", image:'https://source.unsplash.com/1600x900/?parfume', id: nextId(), selected:false},
    ])
    const changeSelected = (product)=>{
        setMenu(menu.map(item => {
            if(item.id === product.id){
                item.selected = true
                setSection(item.title)
            }else{
                item.selected = false
            }
            return item
        }))
    }

    return (
        <FlatList
        style={styles.flatlist}
        data={menu}
        initialNumToRender={3}
        horizontal={true}
        keyExtractor={item => item.id}
        renderItem={({item})=>(
            <SectionItem item={item} changeSelected={changeSelected}/>
        )}
      />

    )
}
const styles = StyleSheet.create({
    flatlist:{
        backgroundColor:'#fff',
        margin:10,
        marginBottom:15
    }
})