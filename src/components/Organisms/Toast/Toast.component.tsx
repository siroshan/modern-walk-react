import Snackbar from '@mui/material/Snackbar';
import React, { FC } from 'react';
import { ToastProps } from './Toast.type';

const Toast: FC<ToastProps> = ({ children, autoHideDuration=6000 }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={handleClose}>
      {children}
    </Snackbar>
  );
};

export default Toast;
