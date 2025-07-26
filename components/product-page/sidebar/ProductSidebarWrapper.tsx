import type { ProductData } from "@/types/product";
import ProductCheckList from "./ProductCheckList";
import ProductCTA from "./ProductCTA";
import SidebarFooter from "./SidebarFooter";
import ProductShowcase from "./ProductShowcase";

type Props = {
  media: ProductData["media"];
  cta: ProductData["cta_text"];
  checklist: ProductData["checklist"];
};

function ProductSidebarWrapper({ media, cta, checklist }: Props) {
  return (
    <aside className="col-span-1 w-full">
      <div className="w-full border bg-white">
        <ProductShowcase media={media} />
        <ProductCTA ctaDetails={cta} />
        <ProductCheckList checklist={checklist} />
      </div>
      <SidebarFooter />
    </aside>
  );
}

export default ProductSidebarWrapper;
