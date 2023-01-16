import '../styles/shop.css'
import Navbar from './navbar'
import Card from './Card'

export default function Shop(props){    
    const items = [{
        title:'power bank',
        price:50,
        img:"item1.jpg",        
    },
    {
        title:'iphone 11',
        price:299,
        img:"item1.jpg", 
    },
    {
        title:'charger',
        price:15,
        img:"item1.jpg", 
    }
] 
    const cards = items.map((item, index) => {
        return <Card key={index} cart={props.cart} setCart={props.setCart} info={item}/>
    }) 

    return(
        <div className="shop-container">
            <Navbar setCartPop={props.setCartPop} cart={props.cart} setCart={props.setCart}/>
            <div className="shop-content">
                {props.cartPop &&
                 <div className='cart-Container'>
                    <h1>Cart</h1>
                    {props.cartElements}
                    </div>}
                <div className="cards">{cards}</div>
            </div>
        </div>
    )
}