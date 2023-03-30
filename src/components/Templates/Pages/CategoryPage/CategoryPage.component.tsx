import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../../../../config/config';
import { IProduct } from '../../../../types/models/Product';
import { Loading } from '../../../Molucules/Loading';
import { ProductCardContainer } from '../../ProductCardConatiner';
import { SectionLayout } from '../../../Layouts/SectionLayout';
import { MaxWidthLayout } from '../../../Layouts/MaxWidthLayout';

const CategoryPage = () => {
  const { cat } = useParams();
  const category = categories.find((category) => category.link === cat);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/category/${category?.title}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log('error', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <MaxWidthLayout>
      <SectionLayout heading={category?.title || ''}>
        <ProductCardContainer products={products} isLoading={isLoading} />
      </SectionLayout>
    </MaxWidthLayout>
  );
};

export default CategoryPage;
