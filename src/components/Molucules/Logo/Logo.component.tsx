import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LogoProps } from './Logo.type';

const Logo: FC<LogoProps> = ({ title, link }) => {
  return (
    <div className='px-4 py-2 text-center'>
      <Link to={link} className='text-inherit no-underline'>
        <h1 className='text-center text-5xl font-bold capitalize'>{title}</h1>
      </Link>
    </div>
  );
};

export default Logo;
