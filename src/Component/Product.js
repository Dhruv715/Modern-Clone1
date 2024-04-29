import React from 'react';
import { Link } from "react-router-dom";
import { useCart } from '../Context/CartContext';
import ProductData from '../Data/ProductData';
function Product() {
  const { getTotalFavorites, updateFavorites } = useCart();

  const handleFavoriteClick = (productId) => {
    // Toggle favorite status
    updateFavorites(productId);
  };



  return (
    <>
        <div className='flex justify-between mt-24 py-10 w-4/5 mx-auto' >
                <div>
                    <ul className='flex justify-center menuitems space-x-4'>
                        <li>ALL</li>
                        <li>HOME DECOR</li>
                        <li>LIGHTING</li>
                        <li>DECORATION</li>
                        <li>VASES</li>
                        <li>BASICS</li>
                    </ul>
                </div>
                <div>
                    <h1 className='menuitems'>FILTER <i class="ri-arrow-down-s-fill"></i></h1>
                </div>
        </div> 
        {/* Product Section */}
        <div className='flex flex-wrap justify-between w-4/5 my-2 pb-20 mx-auto'>
        

        
              {
                ProductData.map((item)=>(
                  <div className='border w-72 my-2' key={item.id}>
                    <Link to={`/product/${item.id}`} >
                    <img src={item.url} className='h-96 object-cover ' alt="" />
                    </Link>
                    <div className='flex items-center justify-between px-4'>
                    <h1 className='mb-1 mt-5 headingproduct text-sm font-semibold' style={{letterSpacing:'2px'}} >{item.title}</h1>
                    <i className={`ri-heart-${item.isFavorite ? 'fill' : 'line'} my-5 mb-1`} onClick={() => handleFavoriteClick(item.id)}></i>
                    </div>
                    <h3 className='py-1 px-4 text-gray-400'>${item.price}</h3>
                    </div>
                
                ))
              }
        </div>
    </>
  );
}

export default Product;
