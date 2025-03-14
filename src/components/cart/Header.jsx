// src/components/Header.jsx
import { Link } from 'react-router-dom';
import CartIcon from '../../features/cart/CartIcon';

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center m-5 ">
      <Link to="/shop">
        <h1 className='text-[2rem] md:text-[5rem]'>Shopping Cart</h1>
      </Link>
    </header>
  );
};

export default Header;
