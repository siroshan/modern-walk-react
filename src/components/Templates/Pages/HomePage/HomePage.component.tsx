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
import { ToastAction } from '../../../Molucules/Toast/ToastAction';
import { CustomError } from '../../../../services/api';
import { useToast } from '../../../../config/useToast';

const HomePage = () => {
  const { toast } = useToast();
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
      setProducts(products.slice(0, 4));
    }
  }, [isLoading, data]);

  useEffect(()=> {
    if(error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: new CustomError(error).message ,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  },[error, isLoading])

  return (
    <>
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
    </>
  );
};

export default HomePage;
