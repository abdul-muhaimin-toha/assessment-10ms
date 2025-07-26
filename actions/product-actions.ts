"use server";

import { ProductData } from "@/types/product";

const API_URL =
  "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course";

export const fetchProductData = async (
  locale: string,
): Promise<ProductData> => {
  try {
    const response = await fetch(`${API_URL}?lang=${locale}`, {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
      next: { revalidate: 3600 },
    });
    const data = await response.json();

    return data.data as ProductData;
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error;
  }
};
