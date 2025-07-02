import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { removeItem } from './cartSlice';
import { rimsData } from '../../data/rimsData';
import Header from '../../components/cart/Header'; 



const CartPage = () => {
  
  const cartItems = useSelector((state) => state.cart.data );
  const [cartItemsState, setCartItemsState] = useState(cartItems);
  useEffect(() => {
    setCartItemsState(cartItems);
    }, [cartItems]);
    if (!cartItems || cartItems.length === 0) {
      return (
        <div className='text-white text-[1.5rem] flex flex-col items-center m-[5rem]'>
          <p> Your cart is empty!</p>
        </div>
        
      )
      
    }
  const dispatch = useDispatch();

  
  const handleRemoveFromCart = (item) => {
          dispatch(removeItem(item));
        };
  
  
 

 

  return (
    
    <div className="text-white  ">
      <Header />
      <div className="flex flex-col items-center text-[1.5rem] ">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>

            { cartItems.map((item) => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <button onClick={() => {
                  console.log('item:', item);
                  dispatch(removeItem(item))}}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CartPage;