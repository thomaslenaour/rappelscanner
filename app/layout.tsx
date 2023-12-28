import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Logo } from '@/components/logo';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/footer';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: 'RappelScanner',
  description: 'Generated by create next app',
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
      </body>
    </html>
  );
}
