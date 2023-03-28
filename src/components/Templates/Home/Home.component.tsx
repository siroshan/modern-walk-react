import { useEffect, useState } from 'react';
import axios from 'axios';
import { IProduct } from '../../../types/models/Product';
import { ProductCardContainer } from '../../Molucules/ProductCardConatiner';

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  if (products?.length > 0) {
    return <ProductCardContainer products={products} />;
  }
  return <h4>Loading</h4>;
};

export default Home;
