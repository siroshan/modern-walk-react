import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React from 'react';
import { Logo } from '../../Molucules/Logo';

const NavBar = () => {
  return (
    <Box
      width={1}
      position='sticky'
      bgcolor='#f5f5f5'
      top={0}
      zIndex={100}
      borderColor='#D9D9D9'
      borderBottom={2}
    >
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='center'
        width={1}
        mx='auto'
        maxWidth={1100}
      >
        <Logo title='Modern Walk' link='/'/>
      </Stack>
    </Box>
  );
};

export default NavBar;
