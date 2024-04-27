import React from 'react';

function Navbar() {
  return (
    <>
            <div className='flex justify-around items-center h-24 bg-white '> 
                <div>
                    <ul className='flex items-center space-x-4 menuitems'>
                        <li>HOME</li>
                        <li>SHOP</li>
                        <li>PAGES</li>
                        <li>ELEMENTS</li>
                    </ul>
                </div>
                <div className='logo'>
                    <h1>DEPOT</h1>
                </div>
                <div>
                    <ul className='flex items-center space-x-5 menuitems'>
                        <li>CART ($0)</li>
                        <li><i class="ri-heart-line"></i> (0)</li>
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
