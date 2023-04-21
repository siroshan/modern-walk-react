import { FC, ReactNode } from 'react';

const MaxWidthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='w-full max-w-screen-lg mx-auto'>
      {children}
    </div>
  );
};

export default MaxWidthLayout;
