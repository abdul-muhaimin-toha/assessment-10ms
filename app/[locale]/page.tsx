import { fetchProductData } from "@/actions/product-actions";
import ProductLayout from "@/components/product-page/ProductLayout";
import { ProductData } from "@/types/product";
import { getMetaContent } from "@/lib/utils";

import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import Head from "next/head";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { seo }: Pick<ProductData, "seo"> = await fetchProductData(locale);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords.join(", "),
    openGraph: {
      title: getMetaContent(seo.defaultMeta, "og:title", seo.title),
      description: getMetaContent(
        seo.defaultMeta,
        "og:description",
        seo.description,
      ),
      url: getMetaContent(
        seo.defaultMeta,
        "og:url",
        "https://10minuteschool.com",
      ),
      locale: getMetaContent(seo.defaultMeta, "og:locale", "en_US"),
      images: [
        {
          url: getMetaContent(seo.defaultMeta, "og:image", "/default-og.jpg"),
          type: getMetaContent(seo.defaultMeta, "og:image:type", "image/jpeg"),
          secureUrl: getMetaContent(seo.defaultMeta, "og:image:secure_url"),
          alt: getMetaContent(
            seo.defaultMeta,
            "og:image:alt",
            "IELTS Course Cover",
          ),
        },
      ],
    },
  };
}

export default async function HomePage() {
  const locale = await getLocale();
  const data: ProductData = await fetchProductData(locale);
  // Filter valid schema objects and parse JSON
  const schemas = data.seo.schema
    .filter((item) => item.meta_value.trim() !== "")
    .map((item) => {
      try {
        return JSON.parse(item.meta_value);
      } catch {
        console.warn("Invalid JSON in schema:", item.meta_value);
        return null;
      }
    })
    .filter(Boolean);

  return (
    <>
      <Head>
        {schemas.map((schema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            // JSON stringify the parsed object with indentation for readability
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema, null, 2),
            }}
          />
        ))}
      </Head>
      <ProductLayout course={data} />
    </>
  );
}
