import { BaseSection, PointerItem } from "@/types/product";
import { Check } from "lucide-react";

type Props = {
  keyPointers: BaseSection<PointerItem>;
};

type ItemProps = PointerItem;

function ProductKeyPointers({ keyPointers }: Props) {
  const { name, values } = keyPointers;

  return (
    <div className="my-8 flex w-full flex-col gap-4 md:my-10">
      <h3 className="text-2xl font-semibold text-black">{name}</h3>
      <div className="grid grid-cols-1 gap-4 rounded-md border bg-white p-5 text-gray-900 lg:gap-6 lg:p-6 xl:grid-cols-2">
        {values.map((pointer) => (
          <ProductPointerItem key={pointer.id} {...pointer} />
        ))}
      </div>
    </div>
  );
}

export default ProductKeyPointers;

function ProductPointerItem({ text }: ItemProps) {
  return (
    <div className="flex items-start gap-2">
      <Check className="h-5 w-5 shrink-0 text-blue-600" />
      <p className="text-base text-gray-900">{text}</p>
    </div>
  );
}
