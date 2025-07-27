import parse from "html-react-parser";
import { ProductData } from "@/types/product";

export interface Props {
  title: ProductData["title"];
  description: ProductData["description"];
}

function ProductDetails({ title, description }: Props) {
  return (
    <section className="flex h-auto w-full flex-col justify-center gap-2 text-gray-300 md:h-[320px] lg:h-[280px]">
      <h1 className="text-2xl font-semibold text-white md:text-4xl">{title}</h1>
      {parse(description)}
    </section>
  );
}

export default ProductDetails;
