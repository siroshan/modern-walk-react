import { Logo } from '../../Molucules/Logo';
import { NavBar } from '../../Organisms/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import { User, UserCog, LogOut, ShoppingCart, X } from 'lucide-react';
import { Button } from '../../../components/Atoms/Button';
import { useUser } from '../../../context/user';
import { PopoverContent } from '../../Molucules/Popover/PopoverContent';
import { Popover } from '../../Organisms/Popover';
import { PopoverTrigger } from '../../Molucules/Popover/PopoverTrigger';
import { useQuery } from 'react-query';
import { ProductService } from '../../../services/product';
import { PopoverClose } from '../../Molucules/Popover/PopoverClose';
import { CartProductCard } from '../../Molucules/CartProductCard';
import { AlertDialogHeader } from '../../Molucules/AlertDialog/AlertDialogHeader';
import { AlertDialog } from '../../Molucules/AlertDialog/AlertDialog';
import AlertDialogTrigger from '../../Molucules/AlertDialog/AlertDialogTrigger/AlertDialogTrigger.component';
import { AlertDialogContent } from '../../Molucules/AlertDialog/AlertDialogContent';
import { AlertDialogTitle } from '../../Molucules/AlertDialog/AlertDialogTitle';
import { AlertDialogDescription } from '../../Molucules/AlertDialog/AlertDialogDescription';
import { AlertDialogCancel } from '../../Molucules/AlertDialog/AlertDialogCancel';
import { AlertDialogAction } from '../../Molucules/AlertDialog/AlertDialogAction';
import { AlertDialogFooter } from '../../Molucules/AlertDialog/AlertDialogFooter';

const NavBarTemplate = () => {
  const navigate = useNavigate();
  const UserCTX = useUser();
  const limit = 5;
  const { isLoading, error, data } = useQuery({
    queryKey: ['products', { limit }],
    queryFn: () => ProductService.getProducts(limit),
  });

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
          <div className='absolute left-[90%] top-1/2 -translate-x-[90%] -translate-y-1/2'>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  className='group mr-4 h-10 w-10 border-0 px-0'
                >
                  <ShoppingCart className='h-4 w-4 group-hover:fill-primary-hover group-focus:fill-primary-hover' />
                  <span className='sr-only'>Open User Cart</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent align='end' className='p-0'>
                <>
                  <div className='flex flex-row items-center justify-between p-2'>
                    <div className='p-2 font-bold'>Cart</div>
                    <PopoverClose>
                      <X className='h-6 w-6 stroke-gray-400' />
                    </PopoverClose>
                  </div>

                  <div>
                    {data?.map((product, i) => (
                      <CartProductCard product={product} />
                    ))}
                  </div>
                  <div className='rounded-b-2xl bg-gray-50 p-2'>
                    <div className='grid grid-cols-2 gap-4'>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant='dotted' size='sm'>
                            Clear
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Clear Cart</AlertDialogTitle>
                            <AlertDialogDescription>
                              All items iin your cart will be removed! Please
                              confirm to proceed.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>

                      <Button size='sm'>Checkout</Button>
                    </div>
                  </div>
                </>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  className='group h-10 w-10 border-0 px-0'
                >
                  <User className='h-4 w-4 group-hover:fill-primary-hover group-focus:fill-primary-hover' />
                  <span className='sr-only'>Open User Menu</span>
                </Button>
              </PopoverTrigger>
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
          </div>
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
