import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from './cartSlice';
import { rimsData } from '../../data/rimsData';
const CartPage = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
console.log(items);
  const handleRemove = id => {
    dispatch(removeItem(id));
  };

  return (
    <div className="">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {rimsData.map((data) => (
            <li key={data.id}>
              <h3>{data.title}</h3>
              <h4>{data.name}</h4>
              <p>${data.price}</p>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
