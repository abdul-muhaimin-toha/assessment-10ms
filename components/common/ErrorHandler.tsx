import Image from "next/image";
import React from "react";

type ErrorHandlerProps = {
  message?: string;
};

export default function ErrorHandler({
  message = "Something went wrong.",
}: ErrorHandlerProps) {
  return (
    <div className="flex min-h-[calc(100vh-56px)] w-full flex-col items-center justify-center bg-white px-6 text-center">
      <Image
        src="/error.jpg"
        width={500}
        height={500}
        alt="Error illustration"
        className="mb-10 h-auto w-2/3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm"
      />

      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 uppercase drop-shadow-sm md:text-5xl">
        Oops!
      </h2>

      <p className="mb-6 max-w-md text-lg leading-relaxed font-medium text-gray-700">
        {message}
      </p>
    </div>
  );
}
