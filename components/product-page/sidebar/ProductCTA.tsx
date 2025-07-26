import { Button } from "@/components/ui/button";
import { ProductData } from "@/types/product";

type Props = {
  ctaDetails: ProductData["cta_text"];
};

function ProductCTA({ ctaDetails }: Props) {
  return (
    <div className="flex flex-col gap-5 p-4 py-8 md:py-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-semibold text-black">৳1000</span>
        <del className="text-lg font-medium text-gray-900">1500</del>
        <span className="rounded-full rounded-l-none bg-green-500 px-3 py-1 text-sm font-medium text-white">
          • 500 টাকা ছাড়
        </span>
      </div>
      <Button
        size="lg"
        className="h-11 w-full rounded-md border-b-4 border-green-700 bg-green-600 text-center text-base font-semibold whitespace-nowrap text-white hover:bg-green-700"
      >
        {ctaDetails.name}
      </Button>
    </div>
  );
}

export default ProductCTA;
