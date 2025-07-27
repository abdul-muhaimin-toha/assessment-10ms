import {
  BaseSection,
  FeatureItem,
  Instructor,
  PointerItem,
  ProductData,
} from "@/types/product";
import ProductDetails from "./ProductDetails";
import ProductInstructor from "./ProductInstructor";
import ProductFeatures from "./ProductFeatures";
import ProductKeyPointers from "./ProductKeyPointers";

export interface Props {
  title: ProductData["title"];
  description: ProductData["description"];
  instructor?: BaseSection<Instructor>;
  features?: BaseSection<FeatureItem>;
  keyPointers?: BaseSection<PointerItem>;
}

function ProductMainWrapper({
  title,
  description,
  instructor,
  features,
  keyPointers,
}: Props) {
  console.log(keyPointers);
  return (
    <div className="col-span-2 w-full px-4 md:pr-8 xl:pr-16">
      <div className="hidden md:block">
        <ProductDetails title={title} description={description} />
      </div>
      {instructor && <ProductInstructor instructor={instructor} />}
      {features && <ProductFeatures features={features} />}
      {keyPointers && <ProductKeyPointers keyPointers={keyPointers} />}
    </div>
  );
}

export default ProductMainWrapper;
