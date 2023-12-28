'use client';

import { useZxing } from 'react-zxing';

interface BarcodeScannerProps extends React.HTMLAttributes<HTMLVideoElement> {
  onDecodeResult: (result: string) => void;
}

export function BarcodeScanner({
  onDecodeResult,
  ...props
}: BarcodeScannerProps) {
  const { ref } = useZxing({
    onDecodeResult(result) {
      onDecodeResult(result.getText());
    },
  });

  return <video ref={ref} {...props} />;
}
