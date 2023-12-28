import Link from 'next/link';
import { AlertCircle, Link as LucideLink } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Product } from '@/types/product';

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
}

export function ProductCard({
  product,
  className,
  ...props
}: ProductCardProps) {
  return (
    <div
      className={cn(
        'border rounded-lg p-5 flex flex-col items-center justify-center',
        className,
      )}
      {...props}
    >
      <AlertCircle className="h-16 w-16 text-destructive mb-3" />
      <h2 className="text-xl font-medium text-center text-destructive">
        Un rappel concerne potentiellement ce produit
      </h2>
      <p className="mt-3 text-slate-600">
        Nos systèmes ont détecté que que ce produit fait potentiellement
        l&apos;objet d&apos;un rappel à la consommation. Nous vous recommnandons
        de consulter la fiche du rappel sur{' '}
        <Link
          className="underline text-black"
          href="https://rappel.conso.gouv.fr"
          target="_blank"
        >
          RappelConso
        </Link>{' '}
        en cliquant sur le bouton ci-dessous.
      </p>
      {product?.rappelConsoUrl && (
        <Button variant="secondary" className="mt-3" asChild>
          <Link href={product.rappelConsoUrl} target="_blank">
            <LucideLink className="mr-1 h-4 w-4" />
            Voir la fiche du rappel
          </Link>
        </Button>
      )}
    </div>
  );
}
