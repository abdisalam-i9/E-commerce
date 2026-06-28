import { Routes, Route } from "react-router-dom"
import Header from "./Component/Header"
import Home from "./Component/Home"
import Data from "./Component/BlogData"
import Product from "./Component/Product"
import Footer from "./Component/Footer"
import View from "./Component/View"
import About from "./Component/Blog"
import Blog from "./Component/Blog"

function App(){
   return <>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>} />
    {/* <Route path="/product"  element={<Product/>}  /> */}
    <Route path="/Blog"  element={<Blog/>}  />

    <Route path="/Blog/:id"  element={<View  />}  />

  </Routes>

  </>
}

export default App