import { Routes, Route } from "react-router-dom"
import Header from "./Component/Header"
import Home from "./Component/Home"
import View from "./Component/View"
import Blog from "./Component/Blog"
import Product from "./Component/Product"

function App(){
   return <>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path="/product"  element={<Product/>}  />
    <Route path="/product/:id"  element={<View  />}  />
    <Route path="/Blog"  element={<Blog/>}  />
    <Route path="/Blog/:id"  element={<View  />}  />

  </Routes>

  </>
}

export default App