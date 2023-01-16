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
            <h1 className='store-name'>Tech Store</h1>
            <div className="nav-right">
            <div className='nav-btn'>
                <a href="/">
                        <h2>Home</h2>
                        <img src="../../images/home.svg" alt="" />
                </a>
                </div>
                <div className='nav-btn'>
                <a href="/shop">                    
                        <h2>Shop</h2>
                        <img src="../../images/shop.svg" alt="" />                        
                </a>
                </div>
                <div className='nav-btn'>
                    <button onClick={() => props.setCartPop(prev => !prev)}>
                        Cart
                        <img src="../../images/cart.svg" alt="" />
                        </button>                    
                    </div>                
            </div>
        </nav>
    )}
