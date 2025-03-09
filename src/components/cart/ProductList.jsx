// import { rimsData } from '../../data/rimsData';
import { rimsImages } from '../RimsListShop';
import Product from './Product';

const ProductList = () => {
  return (
    <div className="product-list">
      {rimsImages.map(rim => (
        <Product key={rim.id} product={rim} />
      ))}
    </div>
  );
};

export default ProductList;
