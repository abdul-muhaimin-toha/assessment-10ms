import {
  BaseSection,
  ExclusiveFeatureItem,
  FeatureItem,
  Instructor,
  PointerItem,
  ProductData,
} from "@/types/product";
import ProductSidebarWrapper from "./sidebar/ProductSidebarWrapper";
import ProductMainWrapper from "./product-main/ProductMainWrapper";

type Props = {
  course: ProductData;
};

function ProductLayout({ course }: Props) {
  const instructor = course.sections.find(
    (section) => section.type === "instructors",
  ) as BaseSection<Instructor> | undefined;

  const features = course.sections.find(
    (section) => section.type === "features",
  ) as BaseSection<FeatureItem> | undefined;

  const keyPointers = course.sections.find(
    (section) => section.type === "pointers",
  ) as BaseSection<PointerItem> | undefined;

  const exclusiveFeatures = course.sections.find(
    (section) => section.type === "feature_explanations",
  ) as BaseSection<ExclusiveFeatureItem> | undefined;

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
