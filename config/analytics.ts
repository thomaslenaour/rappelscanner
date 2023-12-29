export const analyticsConfig = {
  enabled:
    !['', undefined].includes(
      process.env?.NEXT_PUBLIC_SIMPLE_ANALYTICS_BASE_URL,
    ) &&
    !['', undefined].includes(
      process.env?.NEXT_PUBLIC_SIMPLE_ANALYTICS_SCRIPT_URL,
    ) &&
    !['', undefined].includes(
      process.env?.NEXT_PUBLIC_SIMPLE_ANALYTICS_HOSTNAME,
    ),
  baseUrl: process.env?.NEXT_PUBLIC_SIMPLE_ANALYTICS_BASE_URL,
  scriptUrl: process.env?.NEXT_PUBLIC_SIMPLE_ANALYTICS_SCRIPT_URL,
  hostname: process.env?.NEXT_PUBLIC_SIMPLE_ANALYTICS_HOSTNAME,
};
