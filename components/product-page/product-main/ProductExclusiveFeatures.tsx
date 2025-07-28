import { BaseSection, ExclusiveFeatureItem } from "@/types/product";
import { Check } from "lucide-react";
import Image from "next/image";

type Props = {
  exclusiveFeatures: BaseSection<ExclusiveFeatureItem>;
};

type FeatureProps = {
  feature: ExclusiveFeatureItem;
};

type ChecklistProps = {
  items: string[];
};

export default function ProductExclusiveFeatures({ exclusiveFeatures }: Props) {
  const { name, values } = exclusiveFeatures;

  return (
    <section className="my-8 flex w-full flex-col gap-4 md:my-10">
      <h3 className="text-2xl font-semibold text-black">{name}</h3>
      <div className="flex flex-col gap-4 rounded-md border bg-white p-5 text-gray-900 lg:gap-6 lg:p-6">
        {values.map((feature) => (
          <ExclusiveFeature key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
}

function ExclusiveFeature({ feature }: FeatureProps) {
  const { title, checklist, file_type, file_url } = feature;

  return (
    <div className="flex flex-col-reverse gap-6 border-b pb-4 last:border-0 last:pb-0 lg:flex-row lg:items-start lg:gap-6 lg:pb-6">
      <div className="flex-1">
        <h4 className="mb-2 text-base font-semibold text-gray-900">{title}</h4>
        <Checklist items={checklist} />
      </div>

      {file_type === "image" && file_url && (
        <div className="w-full shrink-0 lg:h-48 lg:w-48">
          <div className="aspect-video overflow-hidden rounded-sm lg:aspect-square">
            <Image
              src={file_url}
              alt={title}
              width={192}
              height={192}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function Checklist({ items }: ChecklistProps) {
  return (
    <ul className="flex flex-col gap-2 text-sm text-gray-900">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <Check className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
