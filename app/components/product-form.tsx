'use client';

import * as React from 'react';
import { ScanBarcode, Search } from 'lucide-react';

import { SubmitButton } from '@/components/submit-button';
import { Input } from '@/components/ui/input';
import { BarcodeScanner } from '@/components/barcode-scanner';
import { Button } from '@/components/ui/button';
import { getProductAction } from '@/app/_actions/product';
import { ProductSchema } from '@/app/_schemas/form';
import { useToast } from '@/components/ui/use-toast';
import { Product } from '@/types/product';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface ProductFormProps {
  onSubmitCompleted: (data: {
    productFound: boolean;
    product?: Product;
  }) => void;
}

export function ProductForm({ onSubmitCompleted }: ProductFormProps) {
  const { toast } = useToast();
  const submitButtonRef = React.useRef<HTMLButtonElement>(null);
  const gtinInputRef = React.useRef<HTMLInputElement>(null);
  const [showBarcodeScanner, setShowBarcodeScanner] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  async function clientAction(formData: FormData) {
    setErrorMessage('');

    const values = Object.fromEntries(formData.entries());
    const parseResult = ProductSchema.safeParse(values);

    if (!parseResult.success) {
      const errors = parseResult.error.flatten().fieldErrors;
      setErrorMessage(errors?.gtin?.at(0) || 'Ce champs est invalide');
      return;
    }

    const response = await getProductAction(parseResult.data);
    if (!response.success) {
      toast({
        variant: 'destructive',
        title: 'Une erreur est survenue!',
        description: response.error,
      });
    } else {
      onSubmitCompleted({
        productFound: response.data.productFound,
        product: response.data?.product,
      });
    }
  }

  function handleDecodeResult(result: string) {
    if (!gtinInputRef?.current) return;

    gtinInputRef.current.value = result;
    setErrorMessage('');
    setShowBarcodeScanner(false);
    submitButtonRef?.current?.click();
  }

  return (
    <>
      <form
        action={clientAction}
        className="flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row sm:gap-x-2 sm:items-start"
        noValidate
      >
        <div className="w-full">
          <Input
            ref={gtinInputRef}
            name="gtin"
            type="text"
            placeholder="Numéro de code barre (GTIN)"
            onChange={() => {
              setErrorMessage('');
            }}
            required
          />
          {errorMessage && (
            <p className="text-sm font-medium text-destructive mt-1">
              {errorMessage}
            </p>
          )}
        </div>
        <div className="flex items-center gap-x-2">
          <Dialog
            open={showBarcodeScanner}
            onOpenChange={setShowBarcodeScanner}
          >
            <DialogTrigger asChild>
              <Button type="button" className="w-full">
                Scanner
                <ScanBarcode className="h-4 w-4 ml-1" />
              </Button>
            </DialogTrigger>
            <DialogContent className="h-full sm:h-auto sm:max-w-2xl">
              <BarcodeScanner
                onDecodeResult={handleDecodeResult}
                className="mt-5"
              />
            </DialogContent>
          </Dialog>
          <SubmitButton ref={submitButtonRef} className="w-full">
            Rechercher
            <Search className="h-4 w-4 ml-1" />
          </SubmitButton>
        </div>
      </form>
    </>
  );
}
