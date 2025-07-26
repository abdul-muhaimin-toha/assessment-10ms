import { ProductData } from "@/types/Product";
import CourseAbout from "./CourseAbout";
import CourseSidebar from "./CourseSidebar";

type Props = {
  course: ProductData;
};

function CourseLayout({ course }: Props) {
  return (
    <main className="w-full">
      <div className="container-content">
        <div className="grid w-full grid-cols-3 gap-14">
          <CourseAbout title={course.title} description={course.description} />
          <CourseSidebar media={course.media} />
        </div>
      </div>
    </main>
  );
}

export default CourseLayout;
