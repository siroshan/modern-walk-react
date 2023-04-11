import { AxiosError } from 'axios';
import { FC, useState } from 'react';
import { Alert } from '../../Atoms/Alert';
import { Toast } from '../../Organisms/Toast';
import { ErrorToastProps } from './ErrorToast.props';

const ErrorToast: FC<ErrorToastProps> = ({ errMessage, error }) => {
  const setMessage = (): string => {    
    if (errMessage) {
      return errMessage;
    }
    const err = error as AxiosError;
    if (!err.isAxiosError) {
      return 'Sorry something went wrong from our side, please try again';
    }
    if (err.code === 'ERR_NETWORK') {
      return 'Sorry something went wrong from our side, please try again';
    }
    if (err.response) {
      if (err.response.status === 400) {
        return 'Bad Request';
      }
      if (err.response.status === 401) {
        return 'Your session has expired. Please sign in again!';
      }
      if (err.response.status === 404) {
        return 'Requested resource not found!';
      }
      if (err.response.status === 500) {
        return 'Sorry something went wrong from our side, please try again';
      }
    }
    return 'Sorry something went wrong from our side, please try again';
  };

  return (
    <Toast message='Requested resource not found!' severity='error'>
      <Alert severity='error' sx={{ width: '100%' }}>
        {setMessage()}
      </Alert>
    </Toast>
  );
};

export default ErrorToast;
