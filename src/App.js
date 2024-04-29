import React from 'react';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import { Routes, Route ,Navigate} from "react-router-dom"
import Home from './Component/Home';
import ProductPage from './Component/ProductPage';
import ProductData from './Data/ProductData';
import Cart from './Component/Cart';
import { CartProvider } from './Context/CartContext';
import Product from './Component/Product';

function App() {
  return (
    <CartProvider>
    <>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/product/:id' element={<ProductPage ProductData={ProductData}/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<Navigate to="/cart" />}></Route>
          </Routes>
        <Footer/>
    </>
    </CartProvider>
  );
}

export default App;
