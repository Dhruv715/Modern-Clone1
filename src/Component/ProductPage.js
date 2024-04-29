import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useCart } from '../Context/CartContext';

function ProductPage({ ProductData }) {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = ProductData.find(item => item.id === productId);
  const [quantity, setQuantity] = useState(1);
  const { addOrder } = useCart();

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    addOrder(product, quantity);
    console.log(`Added ${quantity} ${product.title}(s) to cart.`);
  };


  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="h-screen w-4/5 mx-auto flex justify-center items-center">
        <img src={product.url} alt={product.title} className="w-full h-96 object-contain mb-4 rounded-lg" />
        <div className="w-full">
          <h1 className="text-4xl py-5 font-semibold">{product.title}</h1>
          <h3 className="text-xl py-5 text-gray-600 mb-4">${product.price}</h3>
          <div className="flex flex-col w-full items-center justify-center mb-4">
            <label htmlFor="quantity" className="my-1 font-semibold w-full">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-full border-2 border-black-600 p-2 "
            />
          </div>
          <Link 
            to="/cart" 
            onClick={handleAddToCart}
            className="bg-black w-full text-white px-10 py-2 transition duration-300"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
