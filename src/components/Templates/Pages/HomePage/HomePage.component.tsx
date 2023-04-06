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
import { ProductService } from '../../../../services/product';
import { useQuery } from 'react-query';

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const productService = ProductService.getInstance();

  const { isLoading, error } = useQuery<IProduct[], Error>(
    'products',
    async () => {
      return await productService.getProducts();
    },
    {
      onSuccess: (res) => {
        const products = res.filter(
          (prod: IProduct) =>
            prod.category === "men's clothing" ||
            prod.category === "women's clothing"
        );
        setProducts(products);
      },
    }
  );


  return (
    <MaxWidthLayout>
      <SectionLayout heading='Flash Sale'>
        <ProductCardContainer products={products} isLoading={isLoading} />
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
