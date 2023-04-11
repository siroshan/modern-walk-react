import { ReactElement } from "react";

export type ToastProps = {
  message: string;
  severity: 'error' | 'warning' | 'success' | 'info';
  children: ReactElement<any, any> | undefined
};
