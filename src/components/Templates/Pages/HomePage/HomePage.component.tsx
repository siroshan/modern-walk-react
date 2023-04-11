import { useEffect, useState } from 'react';
import { IProduct } from '../../../../models/Product';
import { ProductCardContainer } from '../../ProductCardConatiner';
import Stack from '@mui/material/Stack';
import { SectionLayout } from '../../../Layouts/SectionLayout';
import { CategoryCard } from '../../../Molucules/CategoryCard';
import { categories } from '../../../../config/config';
import { MaxWidthLayout } from '../../../Layouts/MaxWidthLayout';
import { useQuery } from 'react-query';
import { ProductService } from '../../../../services/product';
import { ErrorToast } from '../../../Molucules/ErrorToast';

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const { isLoading, error, data } = useQuery(
    'products',
    ProductService.getProducts
  );

  useEffect(() => {
    if (!isLoading && Array.isArray(data)) {
      const products = data.filter(
        (prod: IProduct) =>
          prod.category === "men's clothing" ||
          prod.category === "women's clothing"
      );
      setProducts(products);
    }
  }, [isLoading, data]);

  if(error && !isLoading) return (<ErrorToast error={error}/>)

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
