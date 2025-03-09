// src/features/cart/CartPage.jsx

import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from './cartSlice';

const CartPage = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <h4>{item.name}</h4>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
