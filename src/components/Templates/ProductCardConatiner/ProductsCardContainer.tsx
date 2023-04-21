import { Skeleton } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/system';
import { FC } from 'react';
import { IProduct } from '../../../models/Product';
import ProductCard from '../../Molucules/ProductCard/ProductCard.component';
import { ProductCardSkeleton } from '../../Molucules/ProductCardLoadingSkeleton';
import { ProductCardContainerProps } from './ProductCardContainer.type';

const ProductCardContainer: FC<ProductCardContainerProps> = ({
  products,
  isLoading,
}) => {
  if (!isLoading) {
    return (
      <Grid
        container
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        rowSpacing={4}
        columnSpacing={2}
      >
        {products.map((product, i) => (
          <Grid item key={product.id} xs={12} sm={6} md={6} lg={3} xl={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    );
  } else {
    return (
      <Grid
        container
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        rowSpacing={4}
        columnSpacing={2}
      >
        {Array(8)
          .fill(undefined)
          .map((dummy, i) => (
            <Grid item key={i} xs={12} sm={6} md={6} lg={3} xl={3}>
              <ProductCardSkeleton />
            </Grid>
          ))}
      </Grid>
    );
  }
};

export default ProductCardContainer;
