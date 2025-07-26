import { fetchProductData } from '@/actions/product-actions';
import { getMetaContent } from '@/lib/utils';

import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
   const locale = await getLocale();
   const { seo } = await fetchProductData(locale);

   return {
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords.join(', '),
      openGraph: {
         title: getMetaContent(seo.defaultMeta, 'og:title'),
         images: [
            {
               url: getMetaContent(seo.defaultMeta, 'og:image'),
               type: getMetaContent(
                  seo.defaultMeta,
                  'og:image:type',
                  'image/jpeg'
               ),
               secureUrl: getMetaContent(
                  seo.defaultMeta,
                  'og:image:secure_url'
               ),
               alt: getMetaContent(
                  seo.defaultMeta,
                  'og:image:alt',
                  'Default image description'
               ),
            },
         ],
         description: getMetaContent(seo.defaultMeta, 'og:description'),
         locale: getMetaContent(seo.defaultMeta, 'og:locale', 'en_US'),
         url: getMetaContent(seo.defaultMeta, 'og:url'),
      },
   };
}

export default async function HomePage() {
   const locale = await getLocale();
   const data = await fetchProductData(locale);

   return <h1>{data.title}</h1>;
}
