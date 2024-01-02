import type { Metadata, Viewport } from 'next';
import type { StaticImageData } from 'next/image';
import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import type { Twitter } from 'next/dist/lib/metadata/types/twitter-types';

import opengraphBaseImage from '../app/opengraph-image.png';
import { appDescription, appSeoEnabled, appTitle, appUrl } from './constants';

type PageMeta = {
  title?: string;
  description?: string;
  url?: string;
  image?: StaticImageData | string;
  date?: string;
  author?: string;
};

export const rootThemeColor = '#17a349';

export const rootOpenGraph: OpenGraph = {
  type: 'website',
  url: appUrl,
  siteName: appTitle,
  title: appTitle,
  description: appDescription,
};

export const rootTwitter: Twitter = {
  card: 'summary_large_image',
  creator: '@lenaourthomas',
  title: appTitle,
  description: appDescription,
};

export const rootViewport: Viewport = {
  themeColor: rootThemeColor,
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: appTitle,
  description: appDescription,
  generator: 'Next.js',
  applicationName: appTitle,
  openGraph: rootOpenGraph,
  twitter: rootTwitter,
  referrer: 'origin-when-cross-origin',
  keywords: [
    'scanner de code barres',
    'verification rappel produits',
    'rappel de produits',
    'sécurité des produits de consommation',
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: appSeoEnabled,
    follow: appSeoEnabled,
    'max-image-preview': 'large',
  },
};

function getImage(image?: StaticImageData | string) {
  if (!image) return null;

  if (typeof image === 'string') {
    return {
      url: image,
    };
  }

  return {
    url: image.src,
    width: image.width,
    height: image.height,
    alt: appTitle,
  };
}

export function generatePageMeta({
  title = appTitle,
  description = appDescription,
  url,
  image,
  date,
  author,
}: PageMeta = {}) {
  const metadata: Metadata = {
    ...rootMetadata,
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...rootOpenGraph,
      ...(url && { url }),
      title,
      description,
    },
    twitter: {
      ...rootTwitter,
      title,
      description,
    },
  };

  if (date && author) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime: date,
      authors: [author],
    };
  }

  const img = getImage(image || opengraphBaseImage);
  if (img) {
    metadata.openGraph!.images = [img];
    metadata.twitter!.images = [img];
  }

  return metadata;
}
