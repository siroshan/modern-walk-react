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
import { ErrorToast } from '../../../Molucules/ErrorToast';

const CategoryPage = () => {
  const { cat } = useParams();
  const category = categories.find((category) => category.link === cat);
  const [products, setProducts] = useState<IProduct[]>([]);

  const { isLoading, error, data } = useQuery('products', () =>
    ProductService.getProductsByCategory(category?.title || '')
  );

  useEffect(() => {
    if (!isLoading && Array.isArray(data)) {
      setProducts(data);
    }
  }, [isLoading, data]);

  if (error && !isLoading) return <ErrorToast error={error} />;

  return (
    <>
      <MaxWidthLayout>
        <SectionLayout heading={category?.title || ''}>
          <ProductCardContainer products={products} isLoading={isLoading} />
        </SectionLayout>
      </MaxWidthLayout>
      {error && !isLoading && <ErrorToast error={error} />}
    </>
  );
};

export default CategoryPage;
