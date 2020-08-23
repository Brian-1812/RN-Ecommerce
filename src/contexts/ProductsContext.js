import React, {useState, useEffect, createContext} from 'react'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { withSafeAreaInsets } from 'react-native-safe-area-context'

export const ProductsContext = createContext()

export default function ProductsContextProvider(props) {
    var user = auth().currentUser
    const [products, setProducts] = useState({})
    const [cart, setCart] = useState([])
    const [completedOrders, setCompletedOrders] = useState([])
    const [savedItems, setSavedItems] = useState([])
    const [wait, setWait] = useState(true)
    
    
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
                setWait(false)
            }
        }
        fetchData()
    }, [user])

    useEffect(()=>{
        const updateCart = async()=>{
            if(user){
                await firestore()
                .collection('users')
                .doc(user.uid)
                .update({
                    cart:cart
                })
            }
        }
        if(!wait){
            updateCart()
        }
    }, [cart, wait])
    useEffect(()=>{
        const updateSavedItems = async()=>{
            if(user){
                await firestore()
                .collection('users')
                .doc(user.uid)
                .update({
                    savedItems:savedItems
                })
            }
        }
        if(!wait){
        updateSavedItems()
        }
    }, [savedItems, wait])

    useEffect(()=>{
        const updateCompletedOrders = async()=>{
            if(user){
                await firestore()
                .collection('users')
                .doc(user.uid)
                .update({
                    completedOrders:completedOrders
                })
            }
        }
        if(!wait){
        updateCompletedOrders()
        }
    }, [completedOrders, wait])
    return (
        <ProductsContext.Provider value={{products, cart, setCart, completedOrders, setCompletedOrders, savedItems, setSavedItems}}>
            {props.children}
        </ProductsContext.Provider>
    )
}
