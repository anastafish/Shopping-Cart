import '../styles/shop.css'
import Navbar from './navbar'
import Card from './Card'
import { useState } from 'react'

export default function Shop(props){    
    const [checkOut, setCheckOut] = useState(false)
    const [total, setTotal] = useState(false)

    const [items, setItems ] = useState([{
        title:'Power Bank',
        price:50,
        img:"item1.jpg",        
    },
    {
        title:'Iphone 14',
        price:799,
        img:"iphone14.jpg", 
    },
    {
        title:'USB C Cable',
        price:15,
        img:"cable.jpg", 
    },
    {
        title:'Ipad 2022',
        price:699,
        img:"ipad.jpg", 
    },
    {
        title:'AirPods',
        price:299,
        img:"airpods.jpg", 
    }
]) 
    const cards = items.map((item, index) => {
        return <Card key={index} cart={props.cart} setCart={props.setCart} info={item} setInfo={setItems}/>
    }) 

    function pay(){
        if (total != 0){
            setTotal(0)
        }
        for(const item of props.cart){
            setTotal(prevTotal => prevTotal + Number(item[1]) * Number(item[3]))
          }
          setCheckOut(prevCheckOut => !prevCheckOut)
    }

    return(
        <div className="shop-container">
            <Navbar setCartPop={props.setCartPop} cart={props.cart} setCart={props.setCart}/>
            <div className="shop-content">
                {props.cartPop &&
                 <div className='cart-Container'>
                    <h1>Cart</h1>
                    {props.cartElements}
                    <button onClick={pay}>Check Out</button>
                    </div>}              
                <div className="cards">{cards}</div>
            </div>
            {checkOut && <div className='checkout'>
                        <h1>Your total is: ${total}</h1>
                        </div>}    
        </div>
    )
}