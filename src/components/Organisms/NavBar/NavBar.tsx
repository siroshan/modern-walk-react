import Box from '@mui/material/Box';
import { FC, ReactNode } from 'react';
import { MaxWidthLayout } from '../../Layouts/MaxWidthLayout';

const NavBar: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box
      width={1}
      position='sticky'
      bgcolor='#f5f5f5'
      top={0}
      zIndex={100}
      borderColor='#D9D9D9'
      borderBottom={2}
      px={4}
      boxSizing='border-box'
    >
      {children}
    </Box>
  );
};

export default NavBar;
