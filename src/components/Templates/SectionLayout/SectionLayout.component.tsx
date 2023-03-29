import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { FC } from 'react';
import { SectionLayoutProps } from './SectionLayout.type';

const SectionLayout: FC<SectionLayoutProps> = ({ children, heading }) => {
  return (
    <Box mt={4}>
      <Typography variant='h4' textTransform='capitalize' mb={4}>
        {heading}
      </Typography>
      <Stack direction='row' alignItems='center' spacing={4}>
        {children}
      </Stack>
    </Box>
  );
};

export default SectionLayout;
