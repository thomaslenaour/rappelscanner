import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="max-w-2xl mx-auto my-10 sm:my-16">
      <h1 className="font-bold text-3xl">Page introuvable...</h1>
      <p className="text-slate-600 mt-3">
        La page que vous recherchez n&apos;existe pas. Vous pouvez retourner à
        la page d&apos;accueil en cliquant sur le bouton ci-dessous.
      </p>
      <Button className="mt-3" asChild>
        <Link href="/">Retour à l&apos;accueil</Link>
      </Button>
    </main>
  );
}
