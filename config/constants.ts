function getAppUrl() {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  } else if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  } else {
    return 'http://localhost:3000';
  }
}

export const appUrl = getAppUrl();
export const appTitle = 'RappelScanner';
export const appDescription =
  "RappelScanner vous permet de vérifier si le produit que vous possédez est rappelé. Scannez le code barre de votre produit ou saisissez son code GTIN pour découvrir s'il fait l'objet d'un rappel.";
export const appIsProduction =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';
export const appSeoEnabled = appIsProduction && !appUrl.includes('vercel');
