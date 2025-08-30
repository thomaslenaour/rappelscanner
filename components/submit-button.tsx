import React from 'react';
import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';

import { Button, ButtonProps } from './ui/button';

export const SubmitButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const { pending } = useFormStatus();

    return (
      <Button
        ref={ref}
        {...props}
        aria-disabled={props?.disabled || pending}
        disabled={props?.disabled || pending}
      >
        {pending && <Loader2 className="mr-1 h-4 w-4 animate-spin" />}
        {props.children}
      </Button>
    );
  },
);

SubmitButton.displayName = 'SubmitButton';
