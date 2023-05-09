import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../../../../config/config';
import { IProduct } from '../../../../models/Product';
import { ProductCardContainer } from '../../ProductCardConatiner';
import { SectionLayout } from '../../../Layouts/SectionLayout';
import { MaxWidthLayout } from '../../../Layouts/MaxWidthLayout';
import { ProductService } from '../../../../services/product';
import { useQuery } from 'react-query';
import { CustomError } from '../../../../services/api';
import { useToast } from '../../../MWUI/Organisms/Toast/Toaster';
import { ToastAction } from '../../../MWUI/Molucules/Toast/ToastAction';

const CategoryPage = () => {
  const { toast } = useToast();
  const { cat } = useParams();
  const category = categories.find((category) => category.link === cat);
  const [products, setProducts] = useState<IProduct[]>([]);

  const { isLoading, error, data } = useQuery(
    ['products', { category: category?.title }],
    () => ProductService.getProductsByCategory(category?.title || '')
  );

  useEffect(() => {
    if (!isLoading && Array.isArray(data)) {
      setProducts(data);
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
        <SectionLayout heading={category?.title || ''}>
          <ProductCardContainer products={products} isLoading={isLoading} />
        </SectionLayout>
      </MaxWidthLayout>
    </>
  );
};

export default CategoryPage;
