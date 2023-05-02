import { Logo } from '../../Molucules/Logo';
import { NavBar } from '../../Organisms/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import { User, UserCog, LogOut } from 'lucide-react';
import { Button } from '../../../components/Atoms/Button';
import { useUser } from '../../../context/user';
import { PopoverContent } from '../../Organisms/Popover/PopoverContent';
import { Popover } from '../../Organisms/Popover/Popover';
import { PopoverTrigger } from '../../Organisms/Popover/PopoverTrigger';

const NavBarTemplate = () => {
  const navigate = useNavigate();
  const UserCTX = useUser();

  const handleLogOut = () => {
    UserCTX.signOut();
    navigate('/signin');
  };
  return (
    <NavBar>
      <div className='relative h-16 w-full'>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Logo title='Modern Walk' link='/' />
        </div>
        {!UserCTX.user ? (
          <Popover>
            <div className='absolute left-[90%] top-1/2 -translate-x-[90%] -translate-y-1/2'>
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  className='h-10 w-10 rounded-full px-0'
                >
                  <User className='h-4 w-4' />
                  <span className='sr-only'>Open User Menu</span>
                </Button>
              </PopoverTrigger>
            </div>
            <PopoverContent align='end' className='grid w-fit gap-2'>
              <Button variant='ghost' className='flex justify-start p-2'>
                <UserCog className='mr-2 h-4 w-4' />
                Profile
              </Button>
              <Button
                variant='ghost'
                className='flex justify-start p-2'
                onClick={handleLogOut}
              >
                <LogOut className='mr-2 h-4 w-4' />
                Logout
              </Button>
            </PopoverContent>
          </Popover>
        ) : (
          <div className='absolute left-[90%] top-1/2 -translate-x-[90%] -translate-y-1/2'>
            <Link to='/signin'>
              <Button>Sign In</Button>
            </Link>
          </div>
        )}
      </div>
    </NavBar>
  );
};

export default NavBarTemplate;
