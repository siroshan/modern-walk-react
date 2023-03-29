import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { FC } from 'react';

const Loading: FC<{ size: number }> = ({ size }) => {
  return (
    <Box display={'flex'} alignItems='center' justifyContent='center' width={1}>
      <CircularProgress size={size} />
    </Box>
  );
};

export default Loading;
