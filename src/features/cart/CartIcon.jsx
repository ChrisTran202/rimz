import { useSelector } from 'react-redux';
import { FaOpencart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './CartIcon.css';
const CartIcon = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  

  return (
    <Link to='/cartPage'  className="cart-icon ">
      <FaOpencart className='text-[#801d19]  w-[2rem] hover:scale-110 hover:text-[#ffffff]'/>
      
      {totalQuantity > 0 && <span className="badge">{totalQuantity}</span>}
    </Link>
  );
};

export default CartIcon;
