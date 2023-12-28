'use client';

import * as React from 'react';
import { useZxing } from 'react-zxing';
import { CameraOff, Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils';

interface BarcodeScannerProps extends React.HTMLAttributes<HTMLDivElement> {
  onDecodeResult: (result: string) => void;
}

export function BarcodeScanner({
  onDecodeResult,
  className,
  ...props
}: BarcodeScannerProps) {
  const [error, setError] = React.useState('');
  const { ref } = useZxing({
    onDecodeResult(result) {
      onDecodeResult(result.getText());
    },
    onError(err) {
      if (err instanceof DOMException) {
        setError(err.message);
        return;
      }

      setError('Unknown error');
    },
  });

  console.log('ref', ref);

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center w-full relative',
        className,
      )}
      {...props}
    >
      {error ? (
        <div className="max-w-md">
          <div className="flex justify-center mb-3">
            <CameraOff className="h-10 w-10" />
          </div>
          <p className="text-center">
            L&apos;accès à votre caméra est{' '}
            <span className="text-destructive font-bold">bloqué</span>. Vous
            devez autoriser l&apos;accès à votre caméra dans les paramètres de
            votre navigateur pour pouvoir utiliser le scanner.
          </p>
        </div>
      ) : (
        <>
          {!ref?.current && (
            <div className="absolute inset-O">
              <Loader2 className="h-7 w-7 animate-spin" />
            </div>
          )}
          <video ref={ref} />
        </>
      )}
    </div>
  );
}
