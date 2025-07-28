import {
  AboutItem,
  BaseSection,
  ExclusiveFeatureItem,
  FeatureItem,
  Instructor,
  PointerItem,
  ProductData,
} from "@/types/product";
import ProductDetails from "./ProductDetails";
import ProductInstructor from "./ProductInstructor";
import ProductFeatures from "./ProductFeatures";
import ProductKeyPointers from "./ProductKeyPointers";
import ProductExclusiveFeatures from "./ProductExclusiveFeatures";
import ProductAbout from "./ProductAbout";

export interface Props {
  title: ProductData["title"];
  description: ProductData["description"];
  instructor?: BaseSection<Instructor>;
  features?: BaseSection<FeatureItem>;
  keyPointers?: BaseSection<PointerItem>;
  exclusiveFeatures?: BaseSection<ExclusiveFeatureItem>;
  aboutInformation?: BaseSection<AboutItem>;
}

function ProductMainWrapper({
  title,
  description,
  instructor,
  features,
  keyPointers,
  exclusiveFeatures,
  aboutInformation,
}: Props) {
  return (
    <div className="col-span-2 w-full px-4 md:pr-8 xl:pr-16">
      <div className="hidden md:block">
        <ProductDetails title={title} description={description} />
      </div>
      {instructor && <ProductInstructor instructor={instructor} />}
      {features && <ProductFeatures features={features} />}
      {keyPointers && <ProductKeyPointers keyPointers={keyPointers} />}
      {exclusiveFeatures && (
        <ProductExclusiveFeatures exclusiveFeatures={exclusiveFeatures} />
      )}
      {aboutInformation && <ProductAbout aboutInformation={aboutInformation} />}
    </div>
  );
}

export default ProductMainWrapper;
