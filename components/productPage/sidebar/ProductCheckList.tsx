import { ProductData } from "@/types/product";
import Image from "next/image";

type Props = {
  checklist: ProductData["checklist"];
};

const ProductCheckList: React.FC<Props> = ({ checklist }) => {
  return (
    <div className="flex w-full flex-col gap-4 p-4">
      <h5 className="text-xl font-semibold text-gray-900">
        এই কোর্সে যা থাকছে
      </h5>
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
    </div>
  );
};

export default ProductCheckList;
