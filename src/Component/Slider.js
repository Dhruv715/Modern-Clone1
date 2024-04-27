import React from 'react';
import img from '../Img/chair1.png'
function Slider() {
  return (
    <>
        <div className='w-4/5 bg-neutral-200 flex   mx-auto' style={{height:'80vh'}}>
            <div className='w-2/4 pb-20 ps-20 self-end'>
            <h1 className=' text-3xl pb-3' style={{letterSpacing:'2px'}}>THINK DIFFERENT</h1>
        <p className='text-base font-light leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, earum eos repellat, officiis accusantium facere quisquam id magnam, officia autem cupiditate nobis. Incidunt soluta deleniti dignissimos minima, ipsa repellendus eveniet.</p>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    </>
  );
}

export default Slider;
