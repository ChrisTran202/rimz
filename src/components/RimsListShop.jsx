import React, { useState } from 'react'
import { rimsData } from '../data/rimsData'
import { useDispatch } from 'react-redux';
import { addItem, addToCart, } from '../features/cart/cartSlice';
import PropTypes from 'prop-types';




const  RimsListShop = () => {
  const [selectedSize, setSelectedSize] = useState('');

  const dispatch = useDispatch();
  
  
     const handleAddToCart = (rim, size ) => {
      const selectedSize = rim.sizes.find((s) => s.size === size);
      const itemToAdd = { 
        ...rim, 
        size: selectedSize.size, 
        price: selectedSize.pricePerRim,
       };
          dispatch(addItem({ ...itemToAdd, quantity: 1 }));
        };

  return (
    <div className=' flex flex-col items-center  mt-[3rem] md:mt-[8rem] lg:mt-[20rem] md:p-10'>
      <div to='/list' className='flex flex-row text-center'>
        <p className='text-[#ffffff] text-[1.3rem] w-[100vw] md:text-5xl lg:text-7xl  pb-[5vh] md:pb-[20vh] '>
          Beauty is in the eye of the beholder!
        </p>
      </div>
      
      <div className='bg-[rgb(255,255,255)] md:w-[80vw] lg:w-[60vw] rounded-2xl pt-5 border-red-900 border-2  '>
        <div className=' flex-col grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 pt-10   justify-center content-center '>
          { rimsData.map((rim) => (
          <div key={rim.id} className='m-1 md:m-2 rounded-2xl flex flex-col text-center contents-center  text-xl font-semibold  hover:bg-[#8c8c8c] hover:scale-110 transition-all duration-500 ease-out cursor-pointer '>
            <img src={rim.img} alt={rim.title} className='h-[vh] w-[30vw]flex justify-center '/>
            <h1 className='text-[1.3rem] md:text-[1.8rem] pt-1 md:pt-3 tracking-tighter md:tracking-normal'>{rim.title}</h1>
              <h1 className='text-[.8rem]'>{rim.name}</h1>
                <div className='flex flex-col items-center'>
                  <h1 className=' font-[SchibstedGrotesk] weight-bold  text-[.6rem] md:text-[.8rem] tracking-[.02rem] md:tracking-normal w-[12rem] md:w-[10rem] m-2'>{rim.description}</h1>
                </div>
                <div>
                  
                  {/* <select>
                    {rim.sizes.map((size) => (
                      <option 
                        key={size.id}
                        value={size.size}>
                        {size.size} - ${size.pricePerRim.toFixed(2) }
                      </option>
                    ))}
                    
                  </select> */}
                  <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                    {rim.sizes.map((size) => (
                    <option key={size.id} value={size.size}>
                      {size.size} - ${size.pricePerRim.toFixed(2)}
                    </option>
                     ))}
                  </select>
                  
                  <button onClick={() => dispatch(addItem(rim, selectedSize.size))}  className='tracking-[.01rem] text-[#7d1e1c] text-[13px] md:text-[1.3rem] p-2 rounded-md w-[13vw]'>Add To Cart</button>
                </div>
              </div>
          
        )) }
        </div>
      </div>
    </div> 
    
  )
}

export default RimsListShop