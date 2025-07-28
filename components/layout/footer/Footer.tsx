import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="shado w-full border-t bg-gray-100 text-gray-500">
      <div className="container-screen">
        <div className="flex flex-col items-start justify-between gap-5 py-8 md:flex-row md:items-end">
          <div className="flex flex-col items-start gap-5 text-left">
            <Link href="/">
              <Image
                src="/10mslogo.svg"
                width={120}
                height={32}
                alt="10ms logo"
                className="h-auto w-[120px] object-contain"
                priority
              />
            </Link>
            <p>
              Developed by{" "}
              <Link
                href="https://abdulmuhaimintoha.vercel.app"
                className="text-blue-500"
              >
                Abdul Muhaimin Toha
              </Link>
            </p>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} 10 Minute School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
