// src/features/cart/CartIcon.jsx

import { useSelector } from 'react-redux';
import './CartIcon.css'; 
const CartIcon = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <div className="cart-icon">
      <i className="fas fa-shopping-cart"></i>
      {totalQuantity > 0 && <span className="badge">{totalQuantity}</span>}
    </div>
  );
};

export default CartIcon;
