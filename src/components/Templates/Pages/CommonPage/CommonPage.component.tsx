import Box from '@mui/material/Box';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../../../../config/config';
import { IProduct } from '../../../../types/models/Product';
import { ProductCardContainer } from '../../ProductCardConatiner';
import { SectionLayout } from '../../SectionLayout';

const CommonPage = () => {
  const { cat } = useParams();
  const category = categories.find((category) => category.link === cat);

  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category?.title}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  return (
    <Box width={1} maxWidth={1100} mx='auto'>
      <SectionLayout heading={category?.title || ''}>
        {products.length > 0 && <ProductCardContainer products={products} />}
      </SectionLayout>
    </Box>
  );
};

export default CommonPage;
