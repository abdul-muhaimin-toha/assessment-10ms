import '../globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/common/header/Header';

const inter = Inter({
   subsets: ['latin'],
   variable: '--font-inter',
   display: 'swap',
});

export const metadata: Metadata = {
   title: '10 Minute School - The Largest Online Classroom of Bangladesh',
   description:
      '10 Minute School is the largest online education platform in Bangladesh, with over 17M+ students accessing quality education through our website, app, and social media.',
};

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
            <NextIntlClientProvider>
               <Header />
               {children}
            </NextIntlClientProvider>
         </body>
      </html>
   );
}
