import { BaseSection, Instructor, ProductData } from "@/types/product";
import ProductSidebarWrapper from "./sidebar/ProductSidebarWrapper";
import ProductMainWrapper from "./product-main/ProductMainWrapper";

type Props = {
  course: ProductData;
};

function ProductLayout({ course }: Props) {
  const instructor = course.sections.find(
    (section) => section.type === "instructors",
  ) as BaseSection<Instructor> | undefined;

  return (
    <main className="relative w-full">
      <div className="product-bg h-80" />
      <div className="container-content relative z-10">
        <div className="grid w-full grid-cols-[1fr_1fr_400px] pt-10">
          <ProductMainWrapper
            title={course.title}
            description={course.description}
            instructor={instructor}
          />
          <ProductSidebarWrapper
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
