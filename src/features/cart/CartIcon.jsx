import { useSelector } from 'react-redux';
import { FaOpencart } from "react-icons/fa6";

import './CartIcon.css'; 
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const openCartPage = () => {
    window.location.href = '/features/cart/CartPage'; // Replace with the actual URL of your cart page
  };

  return (
    <Link to="cartpage" className="cart-icon ">
      <FaOpencart className='text-[#801d19]  w-[2rem]'/>
      {/* <i className="fa6 bg-white"></i> */}
      {totalQuantity > 0 && <span className="badge">{totalQuantity}</span>}
    </Link>
  );
};

export default CartIcon;
