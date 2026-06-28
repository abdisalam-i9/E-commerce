import { Routes, Route } from "react-router-dom"
import Header from "./Component/Header"
import Home from "./Component/Home"
import Data from "./Component/Data"
import Product from "./Component/Product"
import Footer from "./Component/Footer"
import View from "./Component/View"
import About from "./Component/About"

function App(){
   return <>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>} />
    {/* <Route path="/product"  element={<Product Data={Data}  />}  /> */}
    <Route path="/product/:id"  element={<View  />}  />

  </Routes>

  </>
}

export default App