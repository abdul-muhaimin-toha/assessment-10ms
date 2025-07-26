import parse from "html-react-parser";

export interface CourseAboutProps {
  title: string;
  description: string;
}

function CourseAbout({ title, description }: CourseAboutProps) {
  return (
    <div className="col-span-2 flex w-full flex-col gap-2 text-gray-500">
      <h1 className="text-4xl font-semibold text-black">{title}</h1>
      {parse(description)}
    </div>
  );
}

export default CourseAbout;
