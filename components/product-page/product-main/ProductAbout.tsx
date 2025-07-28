import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import parse from "html-react-parser";
import { AboutItem, BaseSection } from "@/types/product";

type Props = {
  aboutInformation: BaseSection<AboutItem>;
};

function ProductAbout({ aboutInformation }: Props) {
  const { name, values } = aboutInformation;

  return (
    <section className="my-8 flex w-full flex-col gap-4 md:my-10">
      <h3 className="text-2xl font-semibold text-black">{name}</h3>
      <div className="flex flex-col gap-4 rounded-md border bg-white p-5 text-gray-900 lg:gap-6 lg:p-6">
        <Accordion className="w-full" type="single" collapsible>
          {values.map((value) => (
            <AccordionItem value={value.id} key={value.id} className="w-full">
              <AccordionTrigger className="text-base font-medium text-gray-900 hover:no-underline lg:text-lg">
                {parse(value.title)}
              </AccordionTrigger>
              <AccordionContent className="w-full">
                <div className="prose prose-li:marker:text-black prose-ul:list-decimal prose-p:my-2 prose-li:my-1 space-y-3 text-sm lg:text-base">
                  {parse(value.description)}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default ProductAbout;
