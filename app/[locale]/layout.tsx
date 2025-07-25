import '../globals.css';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const inter = Inter({
   subsets: ['latin'],
   variable: '--font-inter',
   display: 'swap',
});

export default async function LocaleLayout({
   children,
   params,
}: {
   children: React.ReactNode;
   params: Promise<{ locale: string }>;
}) {
   const { locale } = await params;

   if (!hasLocale(routing.locales, locale)) {
      notFound();
   }

   return (
      <html lang={locale}>
         <body className={`${inter.className} font-sans antialiased`}>
            <NextIntlClientProvider>{children}</NextIntlClientProvider>
         </body>
      </html>
   );
}
