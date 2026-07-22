import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale, getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '../../../i18n';

export const metadata: Metadata = {
  title: "WeLean Technology",
  description: "本服务器由 WeLean Technology 运营，用于合法的个人及商业服务。",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as 'en' | 'zh')) {
    notFound();
  }

  // Synchronize the locale so that `requestLocale` resolves correctly
  // in `getRequestConfig` (src/i18n/request.ts).
  setRequestLocale(locale);

  // Get messages for NextIntlClientProvider
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
