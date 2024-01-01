import { MetadataRoute } from 'next';

import { appSeoEnabled } from '@/config/constants';
import { absoluteUrl } from '@/lib/utils';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: appSeoEnabled ? '' : '/',
    },
    sitemap: absoluteUrl('/sitemap.xml'),
  };
}
