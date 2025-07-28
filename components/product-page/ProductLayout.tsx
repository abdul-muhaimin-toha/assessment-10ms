import {
  AboutItem,
  BaseSection,
  ExclusiveFeatureItem,
  FeatureItem,
  Instructor,
  PointerItem,
  ProductData,
} from "@/types/product";
import ProductSidebarWrapper from "./sidebar/ProductSidebarWrapper";
import ProductMainWrapper from "./product-main/ProductMainWrapper";
import { getSectionByType } from "@/lib/utils";

type Props = {
  course: ProductData;
};

function ProductLayout({ course }: Props) {
  const instructor = getSectionByType(course.sections, "instructors");
  const features = getSectionByType(course.sections, "features");
  const keyPointers = getSectionByType(course.sections, "pointers");
  const exclusiveFeatures = getSectionByType(
    course.sections,
    "feature_explanations",
  );
  const aboutInformation = getSectionByType(course.sections, "about");

  return (
    <main className="relative w-full">
      <div className="product-bg absolute top-0 left-0 hidden md:block md:h-[360px] lg:h-80" />
      <div className="container-content relative z-10 px-0 md:px-4">
        <div className="relative flex w-full flex-col-reverse md:grid md:grid-cols-[1fr_1fr_350px] md:items-start md:pt-10 lg:grid-cols-[1fr_1fr_400px]">
          <ProductMainWrapper
            title={course.title}
            description={course.description}
            instructor={instructor}
            features={features}
            keyPointers={keyPointers}
            exclusiveFeatures={exclusiveFeatures}
            aboutInformation={aboutInformation}
          />
          <ProductSidebarWrapper
            title={course.title}
            description={course.description}
            media={course.media}
            cta={course.cta_text}
            checklist={course.checklist}
          />
        </div>
      </div>
    </main>
  );
}

export default ProductLayout;
