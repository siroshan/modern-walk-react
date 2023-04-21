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
      <Box position='relative' width={1} height={60}>
        <Box
          position='absolute'
          left='50%'
          top='50%'
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <Logo title='Modern Walk' link='/' />
        </Box>
        {!!UserCTX.user ? (
          <>
            <Box
              position='absolute'
              left='90%'
              top='50%'
              style={{ transform: 'translate(-90%, -50%)' }}
            >
              <Box
                borderRadius='50%'
                width={50}
                height={50}
                border={2}
                borderColor='primary.light'
              >
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
              </Box>
            </Box>
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
          <Box
            position='absolute'
            left='90%'
            top='50%'
            style={{ transform: 'translate(-90%, -50%)' }}
          >
            <Link to='/signin'>
              <Button>Sign In</Button>
            </Link>
          </Box>
        )}
      </Box>
    </NavBar>
  );
};

export default NavBarTemplate;
