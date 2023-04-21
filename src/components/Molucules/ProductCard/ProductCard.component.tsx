import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { IProduct } from '../../../models/Product';

const ProductCard: FC<{ product: IProduct }> = ({ product }) => {
  const bgColor = product.category === "men's clothing" ? '#2BD9AF' : '#FF5E84';

  return (
    <div
      vocab='https://schema.org/'
      typeof='Product'
      className='product-card relative mx-auto h-96 w-full rounded-3xl bg-white shadow'
    >
      <div className='p-2'>
        <div
          className='h-20 text-center font-medium capitalize'
          property='name'
        >
          {product.title}
        </div>
        <div className='w-full'>
          <img
            className='mx-auto h-auto max-h-32 w-full object-contain'
            src={product.image}
            alt='product'
            property='image'
          />
        </div>
      </div>
      <div
        className={`absolute bottom-0 box-border w-full rounded-3xl p-2 bg-[${bgColor}]`}
      >
        <div className='flex flex-col items-center'>
          <div property='price' className='text-blue-700'>
            Rs {(Math.round(product.price * 100) / 100).toFixed(2)}
          </div>
          <div
            property='description'
            className='line-clamp-4 max-w-[200px] text-ellipsis text-center text-sm'
          >
            {product.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
