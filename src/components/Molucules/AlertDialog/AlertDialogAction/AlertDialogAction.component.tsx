import { forwardRef } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { cn } from '../../../../lib/utils';
import { buttonVariants } from '../../../Atoms/Button';

const AlertDialogAction = forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action className={cn(className)} ref={ref} {...props} />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

export default AlertDialogAction;
