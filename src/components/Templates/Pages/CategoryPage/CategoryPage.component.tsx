import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../../../../config/config';
import { IProduct } from '../../../../types/models/Product';
import { Loading } from '../../../Molucules/Loading';
import { ProductCardContainer } from '../../ProductCardConatiner';
import { SectionLayout } from '../../../Layouts/SectionLayout';
import { MaxWidthLayout } from '../../../Layouts/MaxWidthLayout';
import { ProductService } from '../../../../services/product';
import { useQuery } from 'react-query';

const CategoryPage = () => {
  
  const { cat } = useParams();
  const category = categories.find((category) => category.link === cat);
  const [products, setProducts] = useState<IProduct[]>([]);
  const productService = ProductService.getInstance();

  const { isLoading, error } = useQuery<IProduct[], Error>(
    'products',
    async () => {
      return await productService.getProductsByCategory(category?.title || '');
    },
    { onSuccess: (res) => setProducts(res) }
  );

  return (
    <MaxWidthLayout>
      <SectionLayout heading={category?.title || ''}>
        <ProductCardContainer products={products} isLoading={isLoading} />
      </SectionLayout>
    </MaxWidthLayout>
  );
};

export default CategoryPage;
