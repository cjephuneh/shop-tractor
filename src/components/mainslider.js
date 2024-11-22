import React from 'react';
import Image4 from '../assets/images/3.png';

function MainSlider() {
  return (
    <div className="mx-auto max-w-[440px] sm:max-w-[768px] sm:p-8 md:p-12 md:max-w-[802px] lg:max-w-[1000px] xl:max-w-[1410px] h-full border border-gray-200 rounded-lg shadow bg-gray-500 flex items-center justify-center overflow-hidden">
      <div className='flex flex-col lg:flex-row items-center justify-between p-4 sm:p-8 md:p-12 space-y-4 lg:space-y-0 lg:space-x-4'>
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          <span className='text-black text-sm font-semibold'>SPECIAL PRODUCTS</span>
          <h2 className='text-black uppercase mb-2 text-2xl sm:text-3xl md:text-4xl font-bold'>
          Request this item its free
          </h2>
          <button
             className='bg-black text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg uppercase font-semibold transition-colors'>
            <a href="/shop" >Request</a>          
          </button>
        </div>
        <div className='mt-4 lg:mt-0 w-full flex justify-center'>
          <img src={Image4} alt='Accessory' className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  )
}

export default MainSlider;
