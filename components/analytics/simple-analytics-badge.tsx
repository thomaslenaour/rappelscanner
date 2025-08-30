import { rootThemeColor } from '@/config/seo';

const simpleAnalyticsColor = rootThemeColor.replace('#', '');

interface SimpleAnalyticsBadgeProps {
  hostname?: string;
}

export function SimpleAnalyticsBadge({ hostname }: SimpleAnalyticsBadgeProps) {
  if (!hostname) return null;

  return (
    <a
      href={`https://simpleanalytics.com/${hostname}?utm_source=${hostname}&utm_content=badge`}
      referrerPolicy="origin"
      target="_blank"
      rel="noreferrer"
    >
      <picture>
        <source
          srcSet={`https://simpleanalyticsbadges.com/${hostname}?mode=light&logo=${simpleAnalyticsColor}&text=${simpleAnalyticsColor}&radius=6`}
          // media="(prefers-color-scheme: dark)"
        />
        <img
          src={`https://simpleanalyticsbadges.com/${hostname}?mode=light&logo=${simpleAnalyticsColor}&text=${simpleAnalyticsColor}&radius=6`}
          loading="lazy"
          referrerPolicy="no-referrer"
          alt="Simple Analytics badge"
          crossOrigin="anonymous"
        />
      </picture>
    </a>
  );
}
