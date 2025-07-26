import { ProductData } from "@/types/Product";

type Props = {
  course: ProductData;
};

function CourseLayout({ course }: Props) {
  return (
    <main className="w-full">
      <div className="container-content">
        <div className="grid w-full grid-cols-3 gap-14"></div>
      </div>
    </main>
  );
}

export default CourseLayout;
