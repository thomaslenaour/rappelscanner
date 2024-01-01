import type { Metadata, Viewport } from 'next';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import { Logo } from '@/components/logo';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/footer';
import { SimpleAnalyticsScript } from '@/components/analytics/simple-analytics';
import { analyticsConfig } from '@/config/analytics';
import { rootMetadata, rootThemeColor } from '@/config/seo';
import { appTitle } from '@/config/constants';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: rootThemeColor,
};
export const metadata: Metadata = {
  ...rootMetadata,
  title: {
    default: appTitle,
    template: `${appTitle} - %s`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={cn('mx-auto px-4', inter.className)}>
        <header className="flex justify-center mt-10">
          <Logo />
        </header>
        {children}
        <Footer />
        <Toaster />
        {analyticsConfig.enabled && (
          <>
            <SimpleAnalyticsScript
              scriptSrc={analyticsConfig.scriptUrl}
              hostname={analyticsConfig.hostname}
            />
            <noscript>
              <Image
                src={`${analyticsConfig.baseUrl}/noscript.gif?hostname=${analyticsConfig.hostname}`}
                alt="Simple Analytics"
                width={1}
                height={1}
                referrerPolicy="no-referrer-when-downgrade"
                unoptimized
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
