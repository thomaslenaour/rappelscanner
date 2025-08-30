import { Barcode } from 'lucide-react';

import { cn } from '@/lib/utils';

export function Logo({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex items-center gap-x-2', className)} {...props}>
      <div className="rounded-full w-16 h-16 bg-primary relative flex items-center justify-center">
        <Barcode className="text-white w-9 h-9" />
      </div>
      <span className="font-bold text-2xl">RappelScanner</span>
    </div>
  );
}
