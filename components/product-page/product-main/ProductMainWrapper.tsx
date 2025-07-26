import { BaseSection, Instructor, ProductData } from "@/types/product";
import ProductDetails from "./ProductDetails";
import ProductInstructor from "./ProductInstructor";

export interface Props {
  title: ProductData["title"];
  description: ProductData["description"];
  instructor?: BaseSection<Instructor>;
}

function ProductMainWrapper({ title, description, instructor }: Props) {
  return (
    <div className="col-span-2 w-full px-4 md:pr-8 xl:pr-16">
      <div className="hidden md:block">
        <ProductDetails title={title} description={description} />
      </div>
      {instructor && <ProductInstructor instructor={instructor} />}
    </div>
  );
}

export default ProductMainWrapper;
