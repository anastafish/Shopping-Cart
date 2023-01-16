import { useState } from 'react'
import '../styles/navbar.css'

export default function Navbar(props){
    const [cartPop, setCartPop] = useState(false)
    const cart = props.cart.map(item => {
        return(
            <div className='cart-item'>
                <img src={`../../images/${item[2]}`} alt="" />
                <div className="item-info">
                    <p>{item[0]}</p>
                    <p>${item[1]}</p>
                </div>
            </div>
        )
    })
        return(
        <nav className="navbar-container">           
            <h1>Anas Store</h1>
            <div className="nav-right">
                <div><h2><a href="/">Home</a></h2></div>
                <div><h2><a href="/shop">Shop</a></h2></div>
                <div><button onClick={() => props.setCartPop(prev => !prev)}>Cart</button></div>                
            </div>
        </nav>
    )}
