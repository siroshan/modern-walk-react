import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { IProduct } from '../../../types/models/Product';
import { ProductCardContainer } from '../ProductCardConatiner';
import { categories } from '../../../config/config';
import Typography from '@mui/material/Typography';

const Categories = () => {
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
    <Box width={1} maxWidth={1100} mx='auto' mt={4}>
        <Typography variant='h4' textTransform='capitalize' mb={4}> {category?.title} </Typography>
      {products.length > 0 && <ProductCardContainer products={products} />}
    </Box>
  );
};

export default Categories;
