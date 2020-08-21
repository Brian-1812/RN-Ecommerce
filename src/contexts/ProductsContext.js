import React, {useState, useEffect, createContext} from 'react'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

export const ProductsContext = createContext()

export default function ProductsContextProvider(props) {
    const [products, setProducts] = useState({})
    const [cart, setCart] = useState([])
    const [completedOrders, setCompletedOrders] = useState([])
    const [savedItems, setSavedItems] = useState([])
    var user = auth().currentUser
    
    const getproduct = (product) => {
        var section = []
        firestore()
        .collection(product)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                section.push(documentSnapshot.data())
            });
        });
        return section
    }
    useEffect(()=>{
        const food = getproduct('food')
        const drinks = getproduct('drinks')
        const clothes = getproduct('clothes')
        const parfumes = getproduct('parfumes')
        setProducts({Food:food,Drinks:drinks,Clothes:clothes,Parfumes:parfumes})

    },[])

    useEffect(()=>{
        const fetchData = async ()=>{
            if(user){
                const doc = await firestore()
                .collection('users')
                .doc(user.uid)
                .get()
                const data = await doc.data()
                await setCart(data.cart)
                await setCompletedOrders(data.completedOrders)
                await setSavedItems(data.savedItems)
            }
        }
        fetchData()
    },[user])

    return (
        <ProductsContext.Provider value={{products, cart, setCart, completedOrders, setCompletedOrders, savedItems, setSavedItems}}>
            {props.children}
        </ProductsContext.Provider>
    )
}
