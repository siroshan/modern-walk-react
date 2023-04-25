import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Person2TwoToneIcon from '@mui/icons-material/Person2TwoTone';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { useState } from 'react';
import { Logo } from '../../Molucules/Logo';
import { NavBar } from '../../Organisms/NavBar';
import { ProfileMenu } from '../../Organisms/ProfileMenu';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../../../components/Atoms/Button';
import { useUser } from '../../../context/user';

const NavBarTemplate = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isProfileMenuOpen = Boolean(anchorEl);
  const UserCTX = useUser();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    handleClose();
    UserCTX.signOut();
    navigate('/signin');
  };
  return (
    <NavBar>
      <div className='relative h-16 w-full'>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Logo title='Modern Walk' link='/' />
        </div>
        {!!UserCTX.user ? (
          <>
            <div className='absolute left-[90%] top-1/2 -translate-x-[90%] -translate-y-1/2'>
              <div className='h-12 w-12 rounded-full border-2'>
                <IconButton
                  aria-label='more'
                  id='profile-button'
                  aria-controls={isProfileMenuOpen ? 'profile-menu' : undefined}
                  aria-expanded={isProfileMenuOpen ? 'true' : undefined}
                  aria-haspopup='true'
                  onClick={handleClick}
                >
                  <Person2TwoToneIcon fontSize='large' />
                </IconButton>
              </div>
            </div>
            <ProfileMenu
              anchorEl={anchorEl}
              handleClose={handleClose}
              isOpen={isProfileMenuOpen}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <AccountCircleTwoToneIcon />
                </ListItemIcon>
                Profile
              </MenuItem>
              <MenuItem onClick={handleLogOut}>
                <ListItemIcon>
                  <LogoutTwoToneIcon />
                </ListItemIcon>
                Logout
              </MenuItem>
            </ProfileMenu>
          </>
        ) : (
          <div className='absolute left-[90%] top-1/2 -translate-x-[90%] -translate-y-1/2'>
            <Link to='/signin'>
              <Button>Sign In</Button>
            </Link>
          </div>
        )}
      </div>
    </NavBar>
  );
};

export default NavBarTemplate;
