'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ReactNode, useRef, useEffect, useState } from 'react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import ArrowIconFilled from '../icons/ArrowIconFilled';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SwiperWrapperProps {
  children: ReactNode;
  breakpoints: SwiperOptions['breakpoints'];
  swiperClassName?: string;
  wrapperClassName?: string;
  buttonsWrapperClassName?: string;
  loop?: boolean;
  isPagination?: boolean;
  autoplay?: SwiperOptions['autoplay'];
  size?: number;
}

export default function SwiperWrapper({
  children,
  breakpoints,
  swiperClassName = '',
  wrapperClassName = '',
  buttonsWrapperClassName = '',
  loop = false,
  isPagination = false,
  autoplay = false,
  size = 40,
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
      swiperInstance.on('slideChange', () => {
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
          className={clsx(
            `enabled:cursor-pointer w-[${size}px] h-[${size}px] rounded-[10px] flex items-center justify-center pointer-events-auto transition-filter 
          duration-300 xl:enabled:hover:brightness-[1.25] bg-green disabled:bg-white disabled:border disabled:border-green disabled:text-green`
          )}
        >
          <ArrowIconFilled
            className={clsx(
              'w-[16px] h-[16px] rotate-180',
              isBeginning ? 'text-green' : 'text-white'
            )}
          />
        </button>

        <button
          ref={nextRef}
          disabled={isEnd}
          className={clsx(
            `enabled:cursor-pointer w-[${size}px] h-[${size}px] rounded-[10px] flex items-center justify-center pointer-events-auto transition-filter 
          duration-300 xl:enabled:hover:brightness-[1.25] bg-green disabled:bg-white disabled:border disabled:border-green disabled:text-green`
          )}
        >
          <ArrowIconFilled
            className={clsx(
              'w-[16px] h-[16px]',
              isEnd ? 'text-green' : 'text-white'
            )}
          />
        </button>
      </div>
    </div>
  );
}
