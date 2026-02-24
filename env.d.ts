type Environment = 'production' | 'preview' | 'development';

namespace NodeJS {
  interface ProcessEnv {
    readonly UPSTASH_REDIS_REST_URL?: string;
    readonly UPSTASH_REDIS_REST_TOKEN?: string;
    readonly RAPPEL_CONSO_API_URL?: string;
    readonly NEXT_PUBLIC_SIMPLE_ANALYTICS_BASE_URL?: string;
    readonly NEXT_PUBLIC_SIMPLE_ANALYTICS_SCRIPT_URL?: string;
    readonly NEXT_PUBLIC_SIMPLE_ANALYTICS_HOSTNAME?: string;

    // Vercel Environment Variables
    readonly NEXT_PUBLIC_VERCEL_URL?: string;
    readonly NEXT_PUBLIC_VERCEL_ENV?: Environment;
  }
}
