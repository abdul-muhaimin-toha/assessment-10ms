import {
  AboutItem,
  BaseSection,
  ExclusiveFeatureItem,
  FeatureItem,
  Instructor,
  PointerItem,
  ProductData,
} from "@/types/product";
import ProductDetails from "./product-main/ProductDetails";
import ProductInstructor from "./product-main/ProductInstructor";
import ProductFeatures from "./product-main/ProductFeatures";
import ProductKeyPointers from "./product-main/ProductKeyPointers";
import ProductExclusiveFeatures from "./product-main/ProductExclusiveFeatures";
import ProductAbout from "./product-main/ProductAbout";

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
      {instructor && instructor.values && instructor.values.length > 0 && (
        <ProductInstructor instructor={instructor} />
      )}
      {features && features.values && features.values.length > 0 && (
        <ProductFeatures features={features} />
      )}
      {keyPointers && keyPointers.values && keyPointers.values.length > 0 && (
        <ProductKeyPointers keyPointers={keyPointers} />
      )}
      {exclusiveFeatures &&
        exclusiveFeatures.values &&
        exclusiveFeatures.values.length > 0 && (
          <ProductExclusiveFeatures exclusiveFeatures={exclusiveFeatures} />
        )}
      {aboutInformation &&
        aboutInformation.values &&
        aboutInformation.values.length > 0 && (
          <ProductAbout aboutInformation={aboutInformation} />
        )}
    </div>
  );
}

export default ProductMainWrapper;
