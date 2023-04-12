import { ReactElement } from 'react';

export type ToastProps = {
  children: ReactElement<any, any> | undefined;
  autoHideDuration?: number;
};
