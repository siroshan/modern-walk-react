import Stack from '@mui/material/Stack';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { useState } from 'react';
import { Logo } from '../../Molucules/Logo';
import { NavBar } from '../../Organisms/NavBar';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useUser } from '../../../context/user';
import { Popover } from '@headlessui/react';
import { PopoverPanel } from '../../Organisms/ProfileMenu';

const NavBarTemplate = () => {
  const navigate = useNavigate();

  const UserCTX = useUser();

  const handleLogOut = () => {
    UserCTX.signOut();
    navigate('/signin');
  };
  return (
    <NavBar>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Stack direction='row' justifyContent='space-between'>
          <Logo title='Modern Walk' link='/' />
        </Stack>
        <Popover className='relative'>
          <Popover.Button className='rounded-full'>
            <AccountCircleTwoToneIcon fontSize='large'/>
          </Popover.Button>
          <PopoverPanel>
            <div className='flex flex-row my-4'>
              <div className='basis-1/4 mr-4'>
                <AccountCircleTwoToneIcon />
              </div>
              <div className='basis-3/4'>Profile</div>
            </div>
            <div className='flex flex-row my-4' onClick={handleLogOut}>
              <div className='basis-1/4 mr-4'>
                <LogoutTwoToneIcon />
              </div>
              <div className='basis-3/4'>Logout</div>
            </div>
          </PopoverPanel>
        </Popover>
      </Stack>
    </NavBar>
  );
};

export default NavBarTemplate;
