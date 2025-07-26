import { ProductData } from "@/types/product";
import CourseAbout from "./CourseAbout";
import ProductSidebarWrapper from "./sidebar/ProductSidebarWrapper";

type Props = {
  course: ProductData;
};

function ProductLayout({ course }: Props) {
  return (
    <main className="w-full">
      <div className="container-content">
        <div className="grid w-full grid-cols-3">
          <CourseAbout title={course.title} description={course.description} />
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
