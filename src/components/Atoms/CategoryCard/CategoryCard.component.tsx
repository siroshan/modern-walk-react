import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { CategoryCardProps } from './CategoryCard.type';

const CategoryCard: FC<{ category: CategoryCardProps }> = ({ category }) => {
  const getBgColor = () => {
    if (category.title === "men's clothing") {
      return '#2BD9AF';
    } else if (category.title === "women's clothing") {
      return '#FF5E84';
    }
  };
  return (
    <a href={`/${category.link}`} className='nav-link' style={{width: '100%'}}>
      <Box
        width={1}
        height='200px'
        bgcolor={getBgColor}
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
    </a>
  );
};

export default CategoryCard;
