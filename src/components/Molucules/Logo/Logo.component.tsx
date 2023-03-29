import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LogoProps } from './Logo.type';

const Logo: FC<LogoProps> = ({ title, link }) => {
  return (
    <Box px={4} py={1} textAlign='center'>
      <Link to={link} className='nav-link'>
        <Typography
          fontSize={40}
          textAlign='center'
          fontWeight={600}
          textTransform='capitalize'
        >
          {title}
        </Typography>
      </Link>
    </Box>
  );
};

export default Logo;
