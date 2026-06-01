import { getRequestConfig } from 'next-intl/server';
import { locales } from '../../i18n';
import { headers } from 'next/headers';

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
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !locales.includes(locale as 'en' | 'zh')) {
    locale = await getLocaleFromHeaders();
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
