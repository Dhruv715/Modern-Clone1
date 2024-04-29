import React from 'react';

function Footer() {
  return (
    <> 
        <div className='w-4/5 py-14 border-t-2 mx-auto flex'>
            <div className='w-1/4'>
                <h1 className='mt-5 mb-8 font-semibold text-lg' style={{letterSpacing:'2px',cursor:'pointer'}}>CUSTOMER SERVICES</h1>
                <ul className='text-gray-400  text-normal' style={{cursor:'pointer'}}>
                    <li className='py-1'>Help & Contact Us</li>
                    <li className='py-1'>Resturn & Refunds</li>
                    <li className='py-1'>Online Stores</li>
                    <li className='py-1'>Terms & Conditions</li>
                </ul>
            </div>
            <div className='w-1/4'>
                <h1 className='mt-5 mb-8 font-semibold text-lg' style={{letterSpacing:'2px',cursor:'pointer'}}>COMPANY</h1>
                <ul className='text-gray-400  text-normal' style={{cursor:'pointer'}}>
                    <li className='py-1'>What We Do</li>
                    <li className='py-1'>Available Services</li>
                    <li className='py-1'>Latest Post</li>
                    <li className='py-1'>FAQs</li>
                </ul>
            </div>
            <div className='w-1/4'>
                <h1 className='mt-5 mb-8 font-semibold text-lg' style={{letterSpacing:'2px',cursor:'pointer'}}>SOCIAL MEDIA</h1>
                <ul className='text-gray-400  text-normal' style={{cursor:'pointer'}}>
                    <li className='py-1'>Twitter</li>
                    <li className='py-1'>Instagram</li>
                    <li className='py-1'>Linkedin</li>
                    <li className='py-1'>Facebook</li>
                </ul>
            </div>
            <div className='w-1/4'>
                <h1 className='mt-5 mb-8 font-semibold text-lg' style={{letterSpacing:'2px',cursor:'pointer'}}>PROFILE</h1>
                <ul className='text-gray-400  text-normal' style={{cursor:'pointer'}}>
                    <li className='py-1'>My Account</li>
                    <li className='py-1'>Checkout</li>
                    <li className='py-1'>Order  Tracking</li>
                    <li className='py-1'>Help & Support</li>
                </ul>
            </div>
        </div>
        <div className='w-4/5 justify-between py-4 border-t-2 mx-auto flex items-center'>
            <div>
            <p className='text-sm text-gray-400'>@2024 Qide Intractive. All Rights Reserved</p>
            </div>
            <div className='flex items-center text-sm space-x-4'>
                <p className='text-gray-400' style={{cursor:'pointer'}}>Follow Us</p>
                <i class="ri-twitter-fill"></i>
                <i class="ri-instagram-line"></i>
                <i class="ri-facebook-box-fill"></i>
            </div>
        </div>
    </>
  );
}

export default Footer;
