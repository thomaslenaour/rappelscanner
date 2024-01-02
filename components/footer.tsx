import Image from 'next/image';
import Link from 'next/link';

import { SimpleAnalyticsBadge } from '@/components/analytics/simple-analytics-badge';
import { analyticsConfig } from '@/config/analytics';

const currentYear = new Date().getFullYear();
const socialNetworks = [
  {
    name: 'Github',
    url: 'https://github.com/thomaslenaour/rappelscanner',
    iconUrl: '/icons/github.svg',
  },
  {
    name: 'X',
    url: 'https://x.com/lenaourthomas',
    iconUrl: '/icons/x.svg',
  },
];

export function Footer() {
  return (
    <footer className="flex items-start justify-between max-w-2xl mx-auto text-xs border-t py-5">
      <div>
        <p>&copy; {currentYear} RappelScanner</p>
        <p className="text-slate-600 mt-2">
          Made with ❤️ by{' '}
          <Link
            href="https://x.com/lenaourthomas"
            target="_blank"
            className="font-bold"
          >
            @lenaourthomas
          </Link>
        </p>
        {analyticsConfig.enabled && (
          <div className="mt-3">
            <SimpleAnalyticsBadge hostname={analyticsConfig.hostname} />
          </div>
        )}
      </div>
      <div className="flex flex-col items-end">
        <ul className="flex items-center gap-x-3">
          {socialNetworks.map((socialNework, i) => (
            <li key={`footer-social-network-${i}`}>
              <Link href={socialNework.url} target="_blank">
                <div className="relative w-5 h-5 hover:opacity-75">
                  <Image
                    src={socialNework.iconUrl}
                    alt={`${socialNework.name} icon`}
                    className="object-contain"
                    fill
                    priority
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-3 text-right space-y-1">
          <li>
            <Link
              href="https://rappel.conso.gouv.fr"
              target="_blank"
              className="text-slate-600 hover:text-black"
            >
              RappelConso
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
