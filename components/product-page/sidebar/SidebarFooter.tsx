import { Link } from "@/i18n/navigation";
import { Phone } from "lucide-react";

function SidebarFooter() {
  return (
    <div className="mt-4 hidden w-full flex-wrap items-center justify-between gap-2 text-sm text-gray-500 md:flex">
      <p>কোর্সটি সম্পর্কে বিস্তারিত জানতে</p>
      <Link
        href="tel:16910"
        aria-label="16910 নম্বরে কল করুন"
        className="text inline-flex items-center gap-2 font-semibold text-green-500 underline"
      >
        <Phone className="h-3.5 w-3.5 text-green-500" />
        <span>ফোন করুন (16910)</span>
      </Link>
    </div>
  );
}

export default SidebarFooter;
