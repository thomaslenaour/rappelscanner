export const analyticsConfig = {
  enabled: !['', undefined].includes(
    process.env?.NEXT_PUBLIC_SIMPLE_ANALYTICS_HOSTNAME,
  ),
  baseUrl: 'https://queue.simpleanalyticscdn.com',
  scriptUrl: 'https://scripts.simpleanalyticscdn.com/latest.js',
  hostname: process.env?.NEXT_PUBLIC_SIMPLE_ANALYTICS_HOSTNAME,
};
