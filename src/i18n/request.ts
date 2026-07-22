import { getRequestConfig } from 'next-intl/server';
import { locales } from '../../i18n';
import { headers } from 'next/headers';

async function getLocaleFromPath(): Promise<string | undefined> {
  try {
    const headersList = await headers();
    // In Next.js dev with turbopack, the original pathname is exposed via this header
    const pathname =
      headersList.get('x-pathname') ||
      headersList.get('x-invoke-path') ||
      '';
    const match = pathname.match(new RegExp(`^/(${locales.join('|')})(?:/|$)`));
    if (match) {
      return match[1];
    }
  } catch {
    // headers() not available in this context
  }
  return undefined;
}

async function getLocaleFromHeaders(): Promise<string> {
  try {
    const headersList = await headers();
    const acceptLanguage = headersList.get('accept-language') || '';
    const langs = acceptLanguage
      .split(',')
      .map(part => part.split(';')[0].trim().toLowerCase());

    if (langs.some(l => l === 'zh' || l.startsWith('zh-'))) {
      return 'zh';
    }
  } catch {
    // headers() not available in this context
  }
  return 'en';
}

export default getRequestConfig(async ({ requestLocale }) => {
  // 1) Prefer the [locale] segment passed by next-intl
  let locale = await requestLocale;

  // 2) Fall back to the URL pathname when the segment is not provided
  if (!locale || !locales.includes(locale as 'en' | 'zh')) {
    locale = (await getLocaleFromPath()) ?? undefined;
  }

  // 3) Final fallback: browser Accept-Language
  if (!locale || !locales.includes(locale as 'en' | 'zh')) {
    locale = await getLocaleFromHeaders();
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
