import { ProductData } from "@/types/product";
import Image from "next/image";

type Props = {
  checklist: ProductData["checklist"];
};

function ProductCheckList({ checklist }: Props) {
  return (
    <section className="flex w-full flex-col gap-4 p-4 py-8 md:py-4">
      <h4 className="text-xl font-semibold text-black">এই কোর্সে যা থাকছে</h4>
      <div className="flex w-full flex-col gap-3">
        {checklist?.map((item) => (
          <div key={item.id} className="flex w-full items-center gap-4">
            {item.icon && (
              <Image
                src={item.icon}
                alt="Checklist icon"
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
            )}
            <span className="text-base text-gray-900">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCheckList;
