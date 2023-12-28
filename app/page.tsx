import { ProductSection } from './components/product-section';

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto my-16">
      <h1 className="font-bold text-3xl">
        Scannez le code barre de votre produit, découvrez s&apos;il fait objet
        d&apos;un rappel
      </h1>
      <p className="text-slate-600 mt-3">
        Chaque année, des centaines de produits font l&apos;objet de rappels à
        la consommation pour des raisons de sécurité. RappelScanner vous permet
        de vérifier si le produit que vous possédez est rappelé.
      </p>
      <ProductSection className="mt-5" />
    </main>
  );
}
