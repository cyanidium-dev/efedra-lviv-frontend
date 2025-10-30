'use client';
import SwiperWrapper from '@/components/shared/swiper/SwiperWrapper';
import { SwiperSlide } from 'swiper/react';
import { Service } from '@/types/service';
import { ServiceCard } from './ServiceCard';

export const ServicesSwiper = ({ services }: { services: Service[] }) => {
  return (
    <SwiperWrapper
      swiperClassName="services"
      wrapperClassName="lg:flex lg:flex-row-reverse lg:gap-6"
      buttonsWrapperClassName="mt-7 lg:mt-0"
      breakpoints={{
        0: {
          spaceBetween: 16,
          slidesPerView: 1,
        },
        640: { spaceBetween: 16, slidesPerView: 2 },
        1024: { spaceBetween: 20, slidesPerView: 'auto' },
      }}
      size={30}
    >
      {services.map((service: Service, idx: number) => (
        <SwiperSlide key={idx}>
          <ServiceCard
            title={service.title}
            categoryImageUrl={service.categoryImage.asset.url}
            number={idx + 1}
          />
        </SwiperSlide>
      ))}
    </SwiperWrapper>
  );
};
