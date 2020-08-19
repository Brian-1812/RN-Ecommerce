import nextId from "react-id-generator"

let Products = {
    Food:[
        {title:"Sandwich", id: nextId(), price:8, section:'Food'},
        {title:"Chicken",  id: nextId(), price:12, section:'Food'},
        {title:"Pasta", id: nextId(), price:15, section:'Food'},
        {title:"Burger", id: nextId(), price:10, section:'Food'},
        ],
    Drinks:[
        {title:"Pepsi", id: nextId(), price:3, section:'Drinks'},
        {title:"Natural Tea",  id: nextId(), price:2, section:'Drinks'},
        {title:"Coffee", id: nextId(), price:3, section:'Drinks'},
        {title:"Coca-Cola", id: nextId(), price:3, section:'Drinks'},
        ],
    Clothes:[
        {title:"Shirt", id: nextId(), price:13, section:'Clothes'},
        {title:"Jacket",  id: nextId(), price:60, section:'Clothes'},
        {title:"Suit", id: nextId(), price:150, section:'Clothes'},
        {title:"Trouser", id: nextId(), price:40, section:'Clothes'},
        ],
    Parfumes:[
        {title:"Chanel", id: nextId(), price:30, section:'Parfumes'},
        {title:"Dior",  id: nextId(), price:25, section:'Parfumes'},
        {title:"Chanel", id: nextId(), price:32, section:'Parfumes'},
        {title:"Dior", id: nextId(), price:30, section:'Parfumes'},
        ],
}
export default Products