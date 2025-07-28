import Image from "next/image";
import { BaseSection, FeatureItem } from "@/types/product";

type Props = {
  features: BaseSection<FeatureItem>;
};

type ItemProps = FeatureItem;

function ProductFeatures({ features }: Props) {
  const { name, values } = features;

  return (
    <div className="my-8 flex w-full flex-col gap-4 md:my-10">
      <h3 className="text-2xl font-semibold text-black">{name}</h3>

      <div className="grid grid-cols-1 gap-10 rounded-md bg-gray-900 p-5 text-gray-400 lg:grid-cols-2 lg:gap-8 lg:p-6">
        {values.map((item) => (
          <ProductFeatureItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ProductFeatures;

function ProductFeatureItem({ icon, title, subtitle }: ItemProps) {
  return (
    <div className="flex items-start gap-3 lg:flex-col lg:gap-6 xl:flex-row xl:gap-3">
      <Image
        src={icon}
        alt={title}
        width={36}
        height={36}
        className="h-9 w-9 object-contain"
      />

      <div className="flex flex-col gap-2">
        <h4 className="text-base font-medium text-white lg:text-lg">{title}</h4>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  );
}
