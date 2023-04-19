import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CategoryCardProps } from './CategoryCard.type';

const CategoryCard: FC<{ category: CategoryCardProps }> = ({ category }) => {
  return (
    <Link
      to={`categories/${category.link}`}
      className='nav-link category-card-wrap'
      style={{ width: '100%' }}
    >
      <div
        className='title-wrap'
        style={{
          backgroundColor:
            category.title === "men's clothing" ? '#2BD9AF' : '#FF5E84',
        }}
      >
        <div className='title'>{category.title}</div>
      </div>
    </Link>
  );
};

export default CategoryCard;
