import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CategoryCardProps } from './CategoryCard.type';

const CategoryCard: FC<{ category: CategoryCardProps }> = ({ category }) => {

  return (
    <Link
      to={`categories/${category.link}`}
      className='nav-link'
      style={{ width: '100%' }}
    >
      <Box
        width={1}
        height='200px'
        bgcolor={category.title === "men's clothing" ? '#2BD9AF' : '#FF5E84'}
        borderRadius='20px'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Typography
          textTransform='capitalize'
          fontSize={32}
          fontWeight={600}
          color='common.white'
        >
          {category.title}
        </Typography>
      </Box>
    </Link>
  );
};

export default CategoryCard;
