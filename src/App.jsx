import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Home from "./components/Home";
import Shop from "./components/Shop";

function App() {
  const [cart, setCart] = useState([])
  const [cartPop, setCartPop] = useState(false)
  const cartElements = cart.map(item => {
      return(
          <div className="item-Container">
                  <img src={`../../images/${item[2]}`} alt="" />
                  <div className="item-info">
                      <p>{item[0]}</p>
                      <p>${item[1]}</p>
                      <p>{item[3]} pcs</p>
                  </div>
          </div>
      )
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home cartPop={cartPop} setCartPop={setCartPop} cartElements={cartElements} cart={cart} setCart={setCart}/>}></Route>
        <Route path={'/shop'} element={<Shop cartPop={cartPop} setCartPop={setCartPop} cartElements={cartElements} cart={cart} setCart={setCart}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

