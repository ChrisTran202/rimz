// src/components/Header.jsx
import { Link } from 'react-router-dom';
import CartIcon from '../../features/cart/CartIcon';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1>My Shop</h1>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">
          <CartIcon />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
