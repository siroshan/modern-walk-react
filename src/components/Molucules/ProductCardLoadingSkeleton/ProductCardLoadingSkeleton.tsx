import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { FC } from 'react';
import { ProductCardSkeletonProps } from './ProductCardSkeleton.type';

const ProductCardLoadingSkeleton: FC<ProductCardSkeletonProps> = ({
  width,
  height,
}) => {
  return (
    <Stack spacing={1}>
      <Skeleton variant='rectangular' width={width} height={height} />
    </Stack>
  );
};
export default ProductCardLoadingSkeleton;
