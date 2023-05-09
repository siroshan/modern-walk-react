import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LogoProps } from './Logo.type';
import { Typography } from '../../Atoms/Typography';

const Logo: FC<LogoProps> = ({ title, link }) => {
  return (
    <div className='px-4 py-2 text-center'>
      <Link to={link} className='text-inherit no-underline'>
        <Typography variant='h1' className='text-center'>{title}</Typography>
      </Link>
    </div>
  );
};

export default Logo;
