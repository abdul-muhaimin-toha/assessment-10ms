import parse from "html-react-parser";
import { ProductData } from "@/types/product";

export interface Props {
  title: ProductData["title"];
  description: ProductData["description"];
}

function ProductDetails({ title, description }: Props) {
  return (
    <div className="flex h-[280px] w-full flex-col justify-center gap-2 text-gray-400">
      <h1 className="text-4xl font-semibold text-white">{title}</h1>
      {parse(description)}
    </div>
  );
}

export default ProductDetails;
