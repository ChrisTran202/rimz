
import React from 'react'

const Nav = () => {
  return (
    <div>
      <div className='text-center'>
        <h1 className='text-5xl font-bold text-white'>
          Rimz
        </h1>
        <h2 className='text-1xl text-white'>
          Make it look good, going fast!
        </h2>
      </div>
      
      <ul className='bg-gray-500 flex fle-row gap-2 pr-4 text-2xl justify-end '>
        <li>Home</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Nav
