'use client';

import * as React from 'react';
import Script from 'next/script';

interface SimpleAnalyticsProps {
  hostname?: string;
}

export function SimpleAnalyticsScript({ hostname }: SimpleAnalyticsProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !hostname) {
    return null;
  }

  return (
    <Script
      async
      defer
      data-hostname={hostname}
      src="https://scripts.simpleanalyticscdn.com/latest.js"
    />
  );
}
