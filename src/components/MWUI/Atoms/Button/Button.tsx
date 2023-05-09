import * as React from 'react';
import { ButtonProps } from './Button.type';
import { cva } from 'class-variance-authority';
import { cn } from '../../../../lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded text-base font-bold leading-6 transition-colors focus-visible:ring-2 focus-visible:ring-ring  disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary-hover hover:shadow active:bg-primary-active disabled:bg-primary-disabled focus:bg-primary-selected focus:shadow',
        outline:
          'border border-primary text-primary hover:bg-primary-disabled hover:border-primary-hover hover:text-primary-hover focus:bg-primary-disabled-selected focus:text-primary-selected',
        dotted:
          'border border-dashed border-primary text-primary hover:bg-primary-disabled hover:border-primary-hover hover:text-primary-hover focus:bg-primary-disabled-selected focus:text-primary-selected',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        danger:
          'bg-danger text-primary-foreground hover:bg-danger-hover hover:shadow active:bg-danger-active disabled:bg-danger-disabled focus:bg-danger-selected focus:shadow',
      },
      size: {
        default: 'pt-3.5 pb-2.5 px-6',
        sm: 'py-2 px-4',
        lg: 'py-3.5 px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
