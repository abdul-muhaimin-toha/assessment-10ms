import type { ProductData } from "@/types/product";
import ProductCheckList from "./ProductCheckList";
import ProductCTA from "./ProductCTA";
import SidebarFooter from "./SidebarFooter";
import ProductShowcase from "./ProductShowcase";
import ProductDetails from "../product-main/ProductDetails";

type Props = {
  title: ProductData["title"];
  description: ProductData["description"];
  media: ProductData["media"];
  cta: ProductData["cta_text"];
  checklist: ProductData["checklist"];
};

function ProductSidebarWrapper({
  title,
  description,
  media,
  cta,
  checklist,
}: Props) {
  return (
    <aside className="col-span-1 w-full">
      <div className="w-full md:border md:bg-white">
        <div className="product-bg flex flex-col gap-8 px-4 py-10 md:gap-0 md:bg-none md:px-0 md:py-0">
          <ProductShowcase media={media} />
          <div className="block md:hidden">
            <ProductDetails title={title} description={description} />
          </div>
        </div>
        <ProductCTA ctaDetails={cta} />
        <ProductCheckList checklist={checklist} />
      </div>
      <SidebarFooter />
    </aside>
  );
}

export default ProductSidebarWrapper;
