import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

function Navbar() {

const { getTotalBill,getTotalFavorites } = useCart();
  return (
    <>
            <div className='flex justify-around items-center h-24 bg-white '> 
                <div>
                    <ul className='flex items-center space-x-4 menuitems' style={{cursor:'pointer'}}>
                        <Link to="home">HOME</Link>
                        <Link to="product">SHOP</Link>
                        <li>PAGES</li>
                        <li>ELEMENTS</li>
                    </ul>
                </div>
                <div className='logo'>
                    <h1>DEPOT</h1>
                </div>
                <div>
                    <ul className='flex items-center space-x-5 menuitems'>
                        <Link to="cart">CART ({`$${getTotalBill().toFixed(2)}`})</Link>
                        <li><i class="ri-heart-line"></i>  ({getTotalFavorites()})</li>
                        <li><i class="ri-user-2-line"></i> LOGIN</li>
                        <li><i class="ri-search-2-line"></i></li>
                        <li><i class="ri-menu-line"></i></li>
                    </ul>
                </div>
            </div>
    </>
  );
}

export default Navbar;
