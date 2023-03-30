import { useEffect, useState } from 'react';
import axios from 'axios';
import { IProduct } from '../../../../types/models/Product';
import { ProductCardContainer } from '../../ProductCardConatiner';
import Stack from '@mui/material/Stack';
import { SectionLayout } from '../../../Layouts/SectionLayout';
import { CategoryCard } from '../../../Molucules/CategoryCard';
import { categories } from '../../../../config/config';
import { Loading } from '../../../Molucules/Loading';
import { MaxWidthLayout } from '../../../Layouts/MaxWidthLayout';

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true)
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
      })
      .finally(()=>{
        setIsLoading(false)
      })
  }, []);

  return (
    <MaxWidthLayout>
      <SectionLayout heading='Flash Sale'>
        <ProductCardContainer products={products} isLoading={isLoading}/>
      </SectionLayout>
      <SectionLayout heading='Categories'>
        <Stack direction='row' alignItems='center' spacing={4} width={1}>
          {categories.map((category, i) => (
            <CategoryCard key={i} category={category} />
          ))}
        </Stack>
      </SectionLayout>
    </MaxWidthLayout>
  );
};

export default HomePage;
