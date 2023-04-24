import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CategoryCardProps } from './CategoryCard.type';

const CategoryCard: FC<{ category: CategoryCardProps }> = ({ category }) => {
  const bgColor = category.title === "men's clothing" ? 'bg-[#2BD9AF]' : 'bg-[#FF5E84]';
  return (
    <Link
      to={`categories/${category.link}`}
      className='text-inherit no-underline'
      style={{ width: '100%' }}
    >
      <div
        className={`flex h-52 w-full flex-row items-center justify-center rounded-3xl ${bgColor}`}
      >
        <h2 className='text-3xl font-extrabold capitalize tracking-tight text-white'>
          {category.title}
        </h2>
      </div>
    </Link>
  );
};

export default CategoryCard;
