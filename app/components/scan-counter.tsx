import { kv } from '@vercel/kv';

import { cn } from '@/lib/utils';

export async function ScanCounter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const scans = await kv.get<string | null>('scans');

  return (
    <div className={cn('', className)} {...props}>
      <p className="font-bold text-2xl text-center">
        Déjà{' '}
        <span className="relative px-2 py-1 text-white before:bg-primary before:content-[''] before:absolute before:w-full before:h-full before:left-0 before:top-0 before:-z-10 before:-rotate-3">
          {scans || 0}
        </span>{' '}
        produits scannés
      </p>
    </div>
  );
}
