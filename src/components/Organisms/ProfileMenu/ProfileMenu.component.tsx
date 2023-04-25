import Menu from '@mui/material/Menu';
import { FC } from 'react';
import { ProfileMenuProps } from './ProfileMenu.type';

const ProfileMenu: FC<ProfileMenuProps> = ({
  children,
  anchorEl,
  isOpen,
  handleClose,
}) => {
  return (
    <Menu
      id='profile-menu'
      MenuListProps={{
        'aria-labelledby': 'profile-button',
      }}
      anchorEl={anchorEl}
      open={isOpen}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      {children}
    </Menu>
  );
};

export default ProfileMenu;
