import { fetchProductData } from '@/actions/product-actions';
import CourseLayout from '@/components/product/CourseLayout';
import { getMetaContent } from '@/lib/utils';
import { ProductData } from '@/types/Product';

import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
   const locale = await getLocale();
   const { seo }: Pick<ProductData, 'seo'> = await fetchProductData(locale);

   return {
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords.join(', '),
      openGraph: {
         title: getMetaContent(seo.defaultMeta, 'og:title', seo.title),
         description: getMetaContent(
            seo.defaultMeta,
            'og:description',
            seo.description
         ),
         url: getMetaContent(
            seo.defaultMeta,
            'og:url',
            'https://10minuteschool.com'
         ),
         locale: getMetaContent(seo.defaultMeta, 'og:locale', 'en_US'),
         images: [
            {
               url: getMetaContent(
                  seo.defaultMeta,
                  'og:image',
                  '/default-og.jpg'
               ),
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
                  'IELTS Course Cover'
               ),
            },
         ],
      },
   };
}

export default async function HomePage() {
   const locale = await getLocale();
   const data: ProductData = await fetchProductData(locale);

   return <CourseLayout course={data} />;
}
