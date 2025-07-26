"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { ChevronLeft, ChevronRight, CirclePlay } from "lucide-react";
import type { MediaItem, ProductData } from "@/types/Product";

type Props = {
  media: ProductData["media"];
};

const MediaViewer = ({
  item,
  index,
  isActive,
}: {
  item: MediaItem;
  index: number;
  isActive: boolean;
}) => {
  const isVideo = item.resource_type === "video";
  const thumbnail = item.thumbnail_url || item.resource_value;

  if (!isVideo) {
    return (
      <Image
        src={item.resource_value}
        alt={`Image ${index + 1}`}
        width={800}
        height={450}
        className="aspect-video h-full w-full object-cover"
      />
    );
  }

  return isActive ? (
    <iframe
      src={`https://www.youtube.com/embed/${item.resource_value}?autoplay=1`}
      title={`Course Video ${index + 1}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="aspect-video h-full w-full object-cover"
    />
  ) : (
    <div className="relative h-full w-full cursor-pointer">
      <Image
        src={thumbnail}
        alt={`Video thumbnail ${index + 1}`}
        width={800}
        height={450}
        className="aspect-video h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/60">
        <CirclePlay className="h-14 w-14 fill-white stroke-green-500" />
      </div>
    </div>
  );
};

const NavigationButtons = () => (
  <>
    <div className="absolute top-1/2 left-2 z-10 -translate-y-1/2">
      <div className="my-custom-prev-button flex cursor-pointer items-center justify-center rounded-full bg-white p-1 shadow-md transition-all duration-200 hover:bg-green-100 active:scale-90">
        <ChevronLeft className="h-5 w-5 text-green-500" />
      </div>
    </div>
    <div className="absolute top-1/2 right-2 z-10 -translate-y-1/2">
      <div className="my-custom-next-button flex cursor-pointer items-center justify-center rounded-full bg-white p-1 shadow-md transition-all duration-200 hover:bg-green-100 active:scale-90">
        <ChevronRight className="h-5 w-5 text-green-500" />
      </div>
    </div>
  </>
);

const CourseSidebar: React.FC<Props> = ({ media }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  return (
    <div className="col-span-1 flex w-full flex-col gap-4">
      <div className="relative">
        <NavigationButtons />

        <Swiper
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs, Navigation]}
          navigation={{
            nextEl: ".my-custom-next-button",
            prevEl: ".my-custom-prev-button",
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            setActiveVideoIndex(null);
          }}
          className="w-full overflow-hidden"
        >
          {media.map((item, index) => (
            <SwiperSlide key={`main-${index}`}>
              <div
                className="relative aspect-video w-full overflow-hidden"
                onClick={() => setActiveVideoIndex(index)}
              >
                <MediaViewer
                  item={item}
                  index={index}
                  isActive={activeVideoIndex === index}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress
        modules={[Thumbs]}
        className="w-full"
      >
        {media.map((item, index) => {
          const thumbSrc = item.thumbnail_url || item.resource_value;
          const isActive = activeIndex === index;

          return (
            <SwiperSlide key={`thumb-${index}`}>
              <div
                className={`max-h-8 max-w-15 overflow-hidden border-2 transition-all duration-200 ${
                  isActive
                    ? "border-green-500 shadow-md"
                    : "border-transparent hover:border-green-400"
                }`}
              >
                <Image
                  src={thumbSrc}
                  alt={`Thumbnail ${index + 1}`}
                  width={160}
                  height={90}
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CourseSidebar;
