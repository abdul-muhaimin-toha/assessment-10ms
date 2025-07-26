'use server';

const API_URL =
   'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course';

export const fetchProductData = async (locale: string) => {
   const response = await fetch(`${API_URL}?lang=${locale}`, {
      headers: {
         'X-TENMS-SOURCE-PLATFORM': 'web',
         Accept: 'application/json',
      },
      next: { revalidate: 3600 },
   });

   if (!response.ok) {
      throw new Error('Failed to fetch product data');
   }

   const data = await response.json();
   return data.data;
};
