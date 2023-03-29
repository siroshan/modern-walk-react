import Grid from '@mui/material/Grid';
import { FC } from 'react';
import { IProduct } from '../../../types/models/Product';
import ProductCard from '../ProductCard/ProductCard.component';

const ProductCardContainer: FC<{ products: IProduct[] }> = ({
  products,
}) => {
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
};

export default ProductCardContainer;
