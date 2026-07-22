import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { defaultLocale } from '../../i18n';

async function detectLocale(): Promise<string> {
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
  return defaultLocale;
}

export default async function RootPage() {
  const locale = await detectLocale();
  redirect(`/${locale}`);
}
