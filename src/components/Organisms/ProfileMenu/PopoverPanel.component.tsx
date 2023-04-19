import { Popover, Transition } from '@headlessui/react';
import { FC, Fragment } from 'react';
import { PopoverPanelProps } from './Popover.type';

const PropoverPanel: FC<PopoverPanelProps> = ({ children }) => {
  return (
    <Transition
      as={Fragment}
      enter='transition ease-out duration-200'
      enterFrom='opacity-0 translate-y-1'
      enterTo='opacity-100 translate-y-0'
      leave='transition ease-in duration-150'
      leaveFrom='opacity-100 translate-y-0'
      leaveTo='opacity-0 translate-y-1'
    >
      <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-3/4 transform px-4 sm:px-0 lg:max-w-fit'>
        <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
          <div className='relative bg-white p-2'>
            {children}
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default PropoverPanel;
