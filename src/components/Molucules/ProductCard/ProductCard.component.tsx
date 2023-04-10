import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { IProduct } from '../../../models/Product';

const ProductCard: FC<{ product: IProduct }> = ({ product }) => {
  const getBgColor = () => {
    if (product.category === "men's clothing") {
      return '#2BD9AF';
    } else if (product.category === "women's clothing") {
      return '#FF5E84';
    }
    return 'coral';
  };
  return (
    <div vocab='https://schema.org/' typeof='Product' className='product-card'>
      <Box p={2}>
        <Typography
          textAlign='center'
          textTransform='capitalize'
          property='name'
          height={72}
          fontWeight={500}
        >
          {product.title}
        </Typography>
        <div className='img-wrap'>
          <img src={product.image} alt='product image' property='image' />
        </div>
      </Box>
      <Box
        bgcolor={getBgColor}
        borderRadius='50px'
        p={2}
        position='absolute'
        bottom={0}
        width={1}
        boxSizing='border-box'
      >
        <Stack direction='column' alignItems='center' spacing={1}>
          <Typography property='price' color='blue'>
            Rs {(Math.round(product.price * 100) / 100).toFixed(2)}
          </Typography>
          <Typography
            property='description'
            textAlign='center'
            className='prod-desc'
            fontSize={14}
            maxWidth={200}
          >
            {product.description}
          </Typography>
        </Stack>
      </Box>
    </div>
  );
};

export default ProductCard;
