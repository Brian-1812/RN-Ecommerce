import nextId from "react-id-generator"

let Products = {Food:[
    {title:"Sandwich", uri:'https://source.unsplash.com/1600x900/?sandwich', images:[
        'https://source.unsplash.com/1600x900/?sandwich',
        'https://source.unsplash.com/1600x900/?sandwich',
        'https://source.unsplash.com/1600x900/?sandwich'
    ], id: nextId(), selected:false, price:12},
    {title:"Chicken", uri:'https://source.unsplash.com/1600x900/?chicken,meal,food', images:[
        'https://source.unsplash.com/1600x900/?chicken,meal,food',
        'https://source.unsplash.com/1600x900/?chicken,meal',
        'https://source.unsplash.com/1600x900/?chicken,meal'
    ],  id: nextId(), selected:false, price:12},
    {title:"Pasta", uri:'https://source.unsplash.com/1600x900/?pasta,meal', images:[
        'https://source.unsplash.com/1600x900/?pasta,meal,food',
        'https://source.unsplash.com/1600x900/?pasta,meal',
        'https://source.unsplash.com/1600x900/?pasta,meal,food'
    ],  id: nextId(), selected:false, price:12},
    {title:"Burger", uri:'https://source.unsplash.com/1600x900/?burger', images:[
        'https://source.unsplash.com/1600x900/?burger,meal',
        'https://source.unsplash.com/1600x900/?burger,food',
        'https://source.unsplash.com/1600x900/?burger,food,meal'
    ],  id: nextId(), selected:false, price:12},
    ],
    Drinks:[
    {title:"Pepsi", uri:'https://source.unsplash.com/1600x900/?pepsi,drinks', images:[
        'https://source.unsplash.com/1600x900/?pepsi,drins',
        'https://source.unsplash.com/1600x900/?drinks,pepsi',
        'https://source.unsplash.com/1600x900/?pepsi,drink'
    ],  id: nextId(), selected:false, price:12},
    {title:"Natural Tea", uri:'https://source.unsplash.com/1600x900/?tea,drink', images:[
        'https://source.unsplash.com/1600x900/?tea,coffee,cola',
        'https://source.unsplash.com/1600x900/?tea,drink',
        'https://source.unsplash.com/1600x900/?drink,tea,green'
    ],  id: nextId(), selected:false, price:12},
    {title:"Coffee", uri:'https://source.unsplash.com/1600x900/?drink,coffee', images:[
        'https://source.unsplash.com/1600x900/?coffee',
        'https://source.unsplash.com/1600x900/?drink,coffee',
        'https://source.unsplash.com/1600x900/?coffee,drink'
    ],  id: nextId(), selected:false, price:12},
    {title:"Coca-Cola", uri:'https://source.unsplash.com/1600x900/?coca-cola,drink', images:[
        'https://source.unsplash.com/1600x900/?coca-cola,drink',
        'https://source.unsplash.com/1600x900/?cocacola,drink',
        'https://source.unsplash.com/1600x900/?coca-cola,drink'
    ],  id: nextId(), selected:false, price:12},
    ],
    Clothes:[
    {title:"Shirt", uri:'https://source.unsplash.com/1600x900/?clothes,shirt', images:[
        'https://source.unsplash.com/1600x900/?shirt,wear',
        'https://source.unsplash.com/1600x900/?shirt,clothes',
        'https://source.unsplash.com/1600x900/?shirt,wear,clothes'
    ],  id: nextId(), selected:false, price:12},
    {title:"Jacket", uri:'https://source.unsplash.com/1600x900/?jacket,clothes',images:[
        'https://source.unsplash.com/1600x900/?clothes,jacket',
        'https://source.unsplash.com/1600x900/?jacket,wear',
        'https://source.unsplash.com/1600x900/?jacket,wear,clothes'
    ], id:nextId(), selected:false, price:12},
    {title:"Suit", uri:'https://source.unsplash.com/1600x900/?suit,clothes',images:[
        'https://source.unsplash.com/1600x900/?suit,wear',
        'https://source.unsplash.com/1600x900/?suit,clothes',
        'https://source.unsplash.com/1600x900/?suit,clothes,wear'
    ], id: nextId(), selected:false, price:12},
    {title:"Trouser", uri:'https://source.unsplash.com/1600x900/?trouser,clothes',images:[
        'https://source.unsplash.com/1600x900/?trouser,clothes',
        'https://source.unsplash.com/1600x900/?trouser,wear',
        'https://source.unsplash.com/1600x900/?trouser,clothes,wear'
    ], id: nextId(), selected:false, price:12},
    ],
    Parfumes:[
    {title:"Chanel", uri:'https://source.unsplash.com/1600x900/?Chanel,parfume', images:[
        'https://source.unsplash.com/1600x900/?parfumes,chanel',
        'https://source.unsplash.com/1600x900/?chanel,parfume',
        'https://source.unsplash.com/1600x900/?chanel,parfume,coco&chanel'
    ],  id:nextId(), selected:false, price:12},
    {title:"Dior", uri:'https://source.unsplash.com/1600x900/?dior,parfume', images:[
        'https://source.unsplash.com/1600x900/?dior,parfume',
        'https://source.unsplash.com/1600x900/?parfumes,dior',
        'https://source.unsplash.com/1600x900/?dior,parfume'
    ],  id: nextId(), selected:false, price:12},
    {title:"Chanel", uri:'https://source.unsplash.com/1600x900/?Chanel,parfume', images:[
        'https://source.unsplash.com/1600x900/?parfumes,chanel',
        'https://source.unsplash.com/1600x900/?chanel,parfume',
        'https://source.unsplash.com/1600x900/?chanel,parfume,coco&chanel'
    ],  id:nextId(), selected:false, price:12},
    {title:"Dior", uri:'https://source.unsplash.com/1600x900/?dior,parfume', images:[
        'https://source.unsplash.com/1600x900/?dior,parfume',
        'https://source.unsplash.com/1600x900/?parfumes,dior',
        'https://source.unsplash.com/1600x900/?dior,parfume'
    ],  id: nextId(), selected:false, price:12},
    ],
}
export default Products