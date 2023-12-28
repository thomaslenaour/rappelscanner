'use client';

import * as React from 'react';
import { RotateCcw } from 'lucide-react';

import { ProductForm } from '@/app/components/product-form';
import { Product } from '@/types/product';
import { ProductNotFound } from './product-not-found';
import { Button } from '@/components/ui/button';

import { ProductCard } from './product-card';

type ProductResult = {
  productFound: boolean;
  product?: Product;
};

interface ProductSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ProductSection(props: ProductSectionProps) {
  const [productResult, setProductResult] =
    React.useState<ProductResult | null>(null);

  function handleSubmitComplete(data: typeof productResult) {
    setProductResult(data);
  }

  return (
    <section {...props}>
      {!productResult ? (
        <ProductForm onSubmitCompleted={handleSubmitComplete} />
      ) : (
        <div className="flex justify-center">
          <Button onClick={() => setProductResult(null)}>
            <RotateCcw className="mr-1 h-4 w-4" />
            Scanner un autre produit
          </Button>
        </div>
      )}

      {productResult && !productResult.productFound && (
        <ProductNotFound className="mt-5" />
      )}
      {productResult && productResult?.product && (
        <ProductCard className="mt-5" product={productResult?.product} />
      )}
    </section>
  );
}
