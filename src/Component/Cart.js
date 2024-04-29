import React, { useState } from 'react';
import { useCart } from '../Context/CartContext'; 

function Cart() {
  const { cart, deleteOrder, updateQuantity,getTotalBill } = useCart(); 
  const [updatedQuantities, setUpdatedQuantities] = useState({}); 

  const handleQuantityChange = (productId, quantity) => {
    setUpdatedQuantities({ ...updatedQuantities, [productId]: quantity });
  };

  const handleUpdateQuantity = (productId) => {
    const newQuantity = updatedQuantities[productId];
    // Check if the new quantity is a valid number
    if (!isNaN(newQuantity) && newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
    // Reset updatedQuantities after updating quantity
    setUpdatedQuantities({});
  };

  const handleCheckout = () => {
    // Implement checkout logic here
    console.log("Checkout clicked!");
  };
  
  return (
    <div className="container w-4/5 mx-auto my-5 mt-8">
      <h1 className="text-2xl font-semibold mb-4 text-gray-600">YOUR CART</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <table className="w-full text-left">
            {/* Table header */}
            <thead>
              <tr className='border-b-2'>
                <th className="py-4">Product</th>
                <th className="py-4">Product Name</th>
                <th className="py-4">Price</th>
                <th className="py-4">Quantity</th>
                <th className="py-4">Total Price</th>
                <th className="py-4">Action</th>
              </tr>
            </thead>
            {/* Table body */}  
            <tbody>
              {cart.map(({ product, quantity }) => (
                <tr key={product.id} className="border-b-2">
                  <td className="font-semibold py-4">
                    <img src={product.url} className='h-12 w-12' alt="" />
                  </td>
                  <td className="font-semibold py-4">{product.title}</td>
                  <td className="text-gray-500 py-4">Price: ${product.price}</td>
                  <td className="text-gray-500 py-4" >
                    <input
                      type="number"
                      value={updatedQuantities[product.id] !== undefined ? updatedQuantities[product.id] : quantity}
                      onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                      className="w-16 p-1 border border-gray-300 rounded"
                    />
                  </td>
                  <td className="font-semibold">${product.price * (updatedQuantities[product.id] !== undefined ? updatedQuantities[product.id] : quantity)}</td>
                  <td className="py-4">
                    <button onClick={() => deleteOrder(product.id)} className="bg-gray-700 hover:bg-gray-600 text-white py-1 mx-2 px-2 rounded-sm transition duration-300">
                      <i className="ri-delete-bin-6-fill"></i>
                    </button>
                    <button onClick={() => handleUpdateQuantity(product.id)} className="bg-gray-700 hover:bg-gray-600 text-white py-1 mx-2 px-2 rounded-sm transition duration-300">
                      {updatedQuantities[product.id] !== undefined ? <i className="ri-check-line"></i> : <i className='ri-edit-2-line'></i>}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-8">
            <p className="text-lg font-semibold">Total Bill: ${getTotalBill().toFixed(2)}</p>
            <button onClick={handleCheckout} className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-sm mt-4 transition duration-300">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
