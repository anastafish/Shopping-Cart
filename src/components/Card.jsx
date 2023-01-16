import { useState } from 'react'
import '../styles/card.css'

export default function Card(props){
    const [pcs, setPcs] = useState(1)
    function Pcs(event){
        setPcs(event.target.value)
    }

    function addToCart(event){
        const obj = event.target.getAttribute("itemdetails").split(',')
        obj.push(pcs)
        props.setCart(prevCart => {
            return [...prevCart, obj]
            })     
       
        }         

                     
                  

    function increase(){
        setPcs(prevPcs => prevPcs+1)
    }

    function decrease(){
        setPcs(prevPcs => {
            if (prevPcs > 1) {
                return prevPcs-1
            }
            else return 1
        })
    }

    return(
        <div className="card-container">
            <img src={`../../images/${props.info.img}`} alt="" />
            <div className="card-details">
                <h2>{props.info.title}</h2>
                <h2>${props.info.price}</h2>
            </div>
            <input value={pcs} onChange={Pcs} type="number" name="pcs" id="pcs" placeholder='how many?' />
            <div className="card-btns">
                <button className='decrease' onClick={decrease}>-</button>
                <button className='increase' onClick={increase}>+</button>
            </div>
            <button className='add-btn' itemdetails={[props.info.title, props.info.price, props.info.img]} onClick={addToCart}>Add TO Cart</button>
        </div>
    )
}