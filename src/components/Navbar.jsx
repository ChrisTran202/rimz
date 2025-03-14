import logo from '../assets/images/wheellogo.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../features/cart/CartIcon.jsx';
import CartPage from '../features/cart/CartPage.jsx';
const Navbar = () => {

  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  //  Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  }
  const [handleCartPage, setHandleCartPage] = useState(false);
  const openCartPage = () => {
      setHandleCartPage(!handleCartPage); 
    };


  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' , to: '/'},
    { id: 2, text: 'Shop' , to: '/shop'},
    { id: 3, text: 'Contact ' , to: '/contact'},
    
  ];

  

  return (
    
    <div className='bg-[RGBA(0,0,0,.40)] flex justify-between items-center h-22 max-auto mx-auto px-4 text-white z-30 sticky top-0    '>
      {/* Logo */}
      <div className='w-[50vw]'>
        <h1 className='w-[13vw] md:w-[15vw] '><img src={logo} alt="logo" /></h1>
      </div>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex md:items-center '>
        {navItems.map(item => (
          <Link to={item.to}
            key={item.id} 
            className='p-4 hover:bg-[#ff4444] rounded-xl m-2 cursor-pointer duration-400 hover:scale-200 ease-in-out text-[1.8rem] xl:text-4xl font-bold text-red-900 hover:text-white'
          >
            {item.text}
          </Link>
        ))}
      </nav>

      {/* Cart Icon */}
      <Link to = '/cartPage'>
        <CartIcon openCartPage={openCartPage} />
      </Link>

        
        
          
      

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden bg-[#ff454570] p-4 rounded-xl  items-center justify-center  '>
        {nav ? <AiOutlineClose size={20}  /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : ' ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl  text-[#df0000] m-4'><img src={logo} alt="logo" /></h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link to={item.to}
            key={item.id}
            onClick={handleNav}
            className='flex p-4 border-b rounded-xl text-[30px]  text-red-900 hover:bg-[#df0000] duration-300 hover:text-white cursor-pointer border-gray-600'
          >
            {item.text}
          </Link>
        ))}
      </ul>
    </div>
    
  );
};

export default Navbar;

