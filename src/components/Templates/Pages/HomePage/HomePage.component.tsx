import { useEffect, useState } from 'react';
import axios from 'axios';
import { IProduct } from '../../../../types/models/Product';
import { ProductCardContainer } from '../../ProductCardConatiner';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { SectionLayout } from '../../SectionLayout';
import { CategoryCard } from '../../../Molucules/CategoryCard';
import { categories } from '../../../../config/config';

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
      <SectionLayout heading='Flash Sale'>
        {products.length > 0 && <ProductCardContainer products={products} />}
      </SectionLayout>
      <SectionLayout heading='Categories'>
        <Stack direction='row' alignItems='center' spacing={4} width={1}>
          {categories.map((category, i) => (
            <CategoryCard key={i} category={category} />
          ))}
        </Stack>
      </SectionLayout>
    </Box>
  );
};

export default HomePage;
