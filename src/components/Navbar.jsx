import logo from '../assets/images/wheellogo.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import React, { useState } from 'react';
const Navbar = () => {

  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  //  Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  }

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home'},
    { id: 1, text: 'Shop'},
    { id: 1, text: 'Contact'},
    
  ];

  return (
    <div className='bg-[RGBA(0,0,0,.40)] flex justify-between items-center h-24 max-auto mx-auto px-4 text-white z-30 sticky top-0  '>
      {/* Logo */}
      <h1 className='w-[30vw] md:w-[15vw]  text-3xl font-bold text-[#df000000]'><img src={logo} alt="logo" /></h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#ff4444] rounded-xl m-2 cursor-pointer duration-400 hover:scale-200 ease-in-out md:text:1xl xl:text-2xl hover:text-white'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden bg-[#ff454570] p-4 rounded-xl fflex items-center justify-center  '>
        {nav ? <AiOutlineClose size={20}  /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#df0000] m-4'><img src={logo} alt="logo" /></h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#df0000] duration-300 hover:text-white cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

