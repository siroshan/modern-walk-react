import Box from '@mui/material/Box';
import { FC, ReactNode } from 'react';

const MaxWidthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box maxWidth={1100} width={1} mx='auto'>
      {children}
    </Box>
  );
};

export default MaxWidthLayout;
