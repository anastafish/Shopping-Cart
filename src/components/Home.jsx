import '../styles/home.css'
import Navbar from './navbar'

export default function Home(props){
    return(
        <div className="home-container">
            <Navbar setCartPop={props.setCartPop} cart={props.cart} setCart={props.setCart}/>
            {props.cartPop && <div className='cart-Container'>
                    <h1>Cart {
                    props.cart && <div>
                        <p>Your Cart is Empty!</p>
                        <h2 className='cart-shop'><a href="/shop">Shop Now!</a></h2>
                    </div>
                    }</h1>
                </div>}
            <div className="home-content">
                <div>
                    <h1 className='welcome'>Welcome to Tech Store!</h1>
                </div>
                <div className='sales'>
                    <h1>30%-70% off
                    Sale, Don't miss out!
                    </h1>
                    <h1 className='shop-link'><a href="/shop">SHOP NOW!</a></h1>
                    <p>Offer valid on selected items or while stock lasts.</p> 
                </div>
            </div>
        </div>
    )
}