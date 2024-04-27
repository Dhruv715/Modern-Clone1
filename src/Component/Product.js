import React from 'react';

function Product({ProductData}) {
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
        <div className='flex flex-wrap justify-between w-4/5 my-2 pb-20 mx-auto text-center'>
              {
                ProductData.map((item)=>(
                    <div className='w-72 my-2'>
                    <img src={item.url} className='h-96 object-cover ' alt="" />
                    <h1 className='mb-1 mt-5 headingproduct text-sm font-semibold' style={{letterSpacing:'2px'}} >{item.title}</h1>
                    <h3 className='py-1 text-gray-400'>{item.price}</h3>
                </div>
                ))
              }
        </div>
    </>
  );
}

export default Product;
