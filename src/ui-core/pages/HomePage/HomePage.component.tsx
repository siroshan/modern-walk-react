import { useEffect, useState } from 'react';
import { IProduct } from '../../../models/Product';
import { ProductCardContainer } from '../../templates/ProductCardConatiner';
import { SectionLayout } from '../../layout/SectionLayout';
import { categories } from '../../../config/config';
import { MaxWidthLayout } from '../../layout/MaxWidthLayout';
import { useQuery } from 'react-query';
import { ProductService } from '../../../services/product';
import { CustomError } from '../../../services/api';
import { useToast } from '../../components/Organisms/Toast/Toaster';
import { ToastAction } from '../../components/Molucules/Toast/ToastAction';
import { CategoryCard } from '../../components/Molucules/CategoryCard';

const HomePage = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState<IProduct[]>([]);

  const { isLoading, error, data } = useQuery({
    queryKey: ['products', { limit: 20 }],
    queryFn: () => ProductService.getProducts(20),
  });

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

  useEffect(() => {
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: new CustomError(error).message,
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
      });
    }
  }, [error, isLoading]);

  return (
    <>
      <MaxWidthLayout>
        <SectionLayout heading='Flash Sale'>
          <ProductCardContainer products={products} isLoading={isLoading} />
        </SectionLayout>
        <SectionLayout heading='Categories'>
          <div className='grid w-full grid-cols-2 items-center justify-center gap-5'>
            {categories.map((category, i) => (
              <CategoryCard key={i} category={category} />
            ))}
          </div>
        </SectionLayout>
      </MaxWidthLayout>
    </>
  );
};

export default HomePage;
