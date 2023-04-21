import { FC, ReactNode } from 'react';

const MaxWidthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className='mx-auto w-full max-w-screen-lg'>{children}</div>;
};

export default MaxWidthLayout;
