import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { FC } from 'react';
import { SectionLayoutProps } from './SectionLayout.type';

const SectionLayout: FC<SectionLayoutProps> = ({ children, heading }) => {
  return (
    <div className='mt-8'>
      <h2 className='scroll-m-20 text-3xl font-extrabold tracking-tight mb-8'>
        {heading}
      </h2>
      <div>{children}</div>
    </div>
  );
};

export default SectionLayout;
