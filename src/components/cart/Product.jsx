import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';
import PropTypes from 'prop-types';


const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Dispatch the rim product object to be added to the cart.
    dispatch(addItem(product));
    Product.propTypes = {
    product: PropTypes.object.isRequired,
    };
  };
  

  return (
    <div  className=''>
      <img src={product.image} alt={product.name} width={150} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
