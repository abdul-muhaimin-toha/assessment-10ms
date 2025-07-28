import parse from "html-react-parser";
import { BaseSection, Instructor } from "@/types/product";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";

type Props = {
  instructor: BaseSection<Instructor>;
};

function ProductInstructor({ instructor }: Props) {
  return (
    <div className="my-8 flex w-full flex-col gap-4 md:my-10">
      <h3 className="text-2xl font-semibold text-black">{instructor.name}</h3>
      {instructor.values.map((item, idx) => (
        <InstructorCard key={idx} item={item} />
      ))}
    </div>
  );
}

export default ProductInstructor;

const InstructorCard = ({ item }: { item: Instructor }) => {
  return (
    <section className="flex w-full flex-col items-start gap-4 rounded border p-5 sm:flex-row sm:items-center">
      <Image
        src={item.image}
        alt={item.name}
        width={80}
        height={80}
        className="h-20 w-20 rounded-full object-cover"
      />
      <div className="flex flex-col gap-2 text-sm text-gray-900">
        <Link
          href={`https://10minuteschool.com/skills/instructors/${item.slug}`}
          className="inline-flex items-center gap-1 text-lg font-semibold hover:text-green-500"
        >
          <span>{item.name}</span>
          <ChevronRight className="h-5 w-5" />
        </Link>
        {parse(item.description)}
      </div>
    </section>
  );
};
