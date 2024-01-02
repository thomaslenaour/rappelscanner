'use client';

import * as React from 'react';
import Script from 'next/script';

interface SimpleAnalyticsProps {
  scriptSrc?: string;
  hostname?: string;
}

export function SimpleAnalyticsScript({
  scriptSrc,
  hostname,
}: SimpleAnalyticsProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !scriptSrc || !hostname) {
    return null;
  }

  return <Script async defer data-hostname={hostname} src={scriptSrc} />;
}
