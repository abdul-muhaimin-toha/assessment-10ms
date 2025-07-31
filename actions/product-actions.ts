"use server";

import { ProductData } from "@/types/product";

const API_URL =
  "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course";

export const fetchProductData = async (
  locale: string,
): Promise<ProductData> => {
  try {
    const res = await fetch(`${API_URL}?lang=${locale}`, {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const json = await res.json();

    if (!json?.data) {
      throw new Error("Invalid API response format");
    }

    return json.data as ProductData;
  } catch (err) {
    console.error("fetchProductData error:", err);
    throw err;
  }
};
