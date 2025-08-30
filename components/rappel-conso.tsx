import Link from 'next/link';
import { Info } from 'lucide-react';

import { cn } from '@/lib/utils';

export function RappelConso({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'bg-muted w-full rounded-md p-5 flex items-start gap-x-2',
        className,
      )}
      {...props}
    >
      <Info className="flex-none h-5 w-5" />
      <p className="font-medium">
        Consultez la liste des rappels de produits sur le site officiel du
        gouvernement français 🇫🇷 :{' '}
        <Link
          href="https://rappel.conso.gouv.fr"
          target="_blank"
          className="underline"
        >
          rappel.conso.gouv.fr
        </Link>
        .
      </p>
    </div>
  );
}
