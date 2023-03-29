import { useEffect, useState } from 'react';
import axios from 'axios';
import { IProduct } from '../../../../types/models/Product';
import { ProductCardContainer } from '../../ProductCardConatiner';
import { Box } from '@mui/material';
import { Categories } from '../../../Molucules/Categories';

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        const products = res.data.filter(
          (prod: IProduct) =>
            prod.category === "men's clothing" ||
            prod.category === "women's clothing"
        );
        setProducts(products);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  return (
    <Box width={1} maxWidth={1100} mx='auto' mt={4}>
      {products.length > 0 && <ProductCardContainer products={products} />}
      <Categories />
    </Box>
  );
};

export default HomePage;