import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from './cartSlice';
import { rimsData } from '../../data/rimsData';
import Header from '../../components/cart/Header'; 

const CartPage = () => {

  const items = useSelector((state) => state.cart.data);

  const dispatch = useDispatch( );

  const handleRemove = id => {
    dispatch(removeItem(id));
  };

  return (
    
    <div className="text-white  ">
      <Header className={""} />
      <div className="flex flex-col items-center text-[1.5rem] ">
        <h2>Cart</h2>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>

            { items.map((items) => (
              <li key={items.id}>
                <h3>{items.title}</h3>
                <h4>{items.name}</h4>
                <p>${items.price}</p>
                <button onClick={() => handleRemove(items.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CartPage;
