import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

import { cn } from '@/lib/utils';

interface ProductNotFoundProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ProductNotFound({ className, ...props }: ProductNotFoundProps) {
  return (
    <div
      className={cn(
        'border rounded-lg p-5 flex flex-col items-center justify-center',
        className,
      )}
      {...props}
    >
      <CheckCircle className="h-16 w-16 text-primary mb-3" />
      <h2 className="text-xl font-medium text-center">
        Aucun rappel trouvé pour ce produit
      </h2>
      <p className="mt-3 text-slate-600">
        Nos systèmes n&apos;ont trouvé aucun rappel pour ce produit. Cependant,
        il se peut que les codes GTIN ne soient pas toujours fournis dans les
        informations de rappel. Nous vous recommandons de consulter la base de
        données officielle des rappels de produits{' '}
        <Link
          className="underline text-black"
          href="https://rappel.conso.gouv.fr"
          target="_blank"
        >
          RappelConso
        </Link>
        .
      </p>
    </div>
  );
}
