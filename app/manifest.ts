import { MetadataRoute } from 'next';

import { appDescription } from '@/config/constants';
import { rootThemeColor } from '@/config/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RappelScanner',
    short_name: 'RappelScanner',
    description: appDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: rootThemeColor,
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
