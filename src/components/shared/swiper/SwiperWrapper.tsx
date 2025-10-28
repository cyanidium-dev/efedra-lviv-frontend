"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ReactNode, useRef, useEffect, useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import Image from "next/image";

interface SwiperWrapperProps {
  children: ReactNode;
  breakpoints: SwiperOptions["breakpoints"];
  swiperClassName?: string;
  wrapperClassName?: string;
  buttonsWrapperClassName?: string;
  loop?: boolean;
  isPagination?: boolean;
  autoplay?: SwiperOptions["autoplay"];
  variant?: "blue" | "beige";
}

export default function SwiperWrapper({
  children,
  breakpoints,
  swiperClassName = "",
  wrapperClassName = "",
  buttonsWrapperClassName = "",
  loop = false,
  isPagination = false,
  autoplay = false,
  variant = "blue",
}: SwiperWrapperProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Прив'язуємо кнопки навігації після рендеру
  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      swiperInstance.params.navigation
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();

      // початковий стан кнопок
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);

      // оновлюємо стан кнопок при зміні слайду
      swiperInstance.on("slideChange", () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }
  }, [swiperInstance]);

  return (
    <div className={wrapperClassName}>
      <Swiper
        onSwiper={setSwiperInstance} // отримуємо екземпляр після рендеру
        pagination={isPagination}
        breakpoints={breakpoints}
        loop={loop}
        speed={1000}
        autoplay={autoplay}
        modules={[Navigation, Pagination, Autoplay]}
        className={swiperClassName}
      >
        {children}
      </Swiper>

      <div
        className={`flex items-center lg:items-end justify-center gap-2.5 ${buttonsWrapperClassName}`}
      >
        <button
          ref={prevRef}
          disabled={isBeginning}
          className={`enabled:cursor-pointer w-[30px] h-[30px] rounded-full flex items-center justify-center pointer-events-auto transition-filter 
          duration-300 xl:enabled:hover:brightness-[1.25] disabled:bg-gray ${variant === "blue" ? "bg-blue" : "bg-beige"}`}
        >
          <Image
            src="/images/icons/arrow-left.svg"
            alt="Prev"
            width={16}
            height={16}
          />
        </button>

        <button
          ref={nextRef}
          disabled={isEnd}
          className={`enabled:cursor-pointer w-[30px] h-[30px] rounded-full flex items-center justify-center pointer-events-auto transition-filter 
          duration-300 xl:enabled:hover:brightness-[1.25] disabled:bg-gray ${variant === "blue" ? "bg-blue" : "bg-beige"}`}
        >
          <Image
            src="/images/icons/arrow-right.svg"
            alt="Next"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
}
