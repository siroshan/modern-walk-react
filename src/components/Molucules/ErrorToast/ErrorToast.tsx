import { AxiosError } from 'axios';
import { FC, useState } from 'react';
import { CustomError } from '../../../services/api';
import { Alert } from '../../Atoms/Alert';
import { Toast } from '../../Organisms/Toast';
import { ErrorToastProps } from './ErrorToast.type';

const ErrorToast: FC<ErrorToastProps> = ({ error }) => {
  const err = error as CustomError;
  return (
    <Toast>
      <Alert severity='error' sx={{ width: '100%' }}>
        {err.message}
      </Alert>
    </Toast>
  );
};

export default ErrorToast;
