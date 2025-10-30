'use client';
import { ReviewsCard } from './ReviewsCard';
import { reviewsList } from './data';
import SwiperWrapper from '@/components/shared/swiper/SwiperWrapper';
import { SwiperSlide } from 'swiper/react';
import { Review } from '@/types/review';

export const ReviewsBlock = () => {
  return (
    <SwiperWrapper
      swiperClassName="reviews"
      wrapperClassName="lg:flex lg:flex-row-reverse lg:gap-6 bg-white rounded-[10px] p-[15px] pt-[15px]"
      buttonsWrapperClassName="mt-5 lg:mt-0 justify-end"
      loop
      breakpoints={{
        0: {
          spaceBetween: 16,
          slidesPerView: 1,
        },
        640: { spaceBetween: 16, slidesPerView: 2 },
        1024: { spaceBetween: 20, slidesPerView: 'auto' },
      }}
    >
      {reviewsList.map((review: Review, idx: number) => (
        <SwiperSlide key={idx}>
          <ReviewsCard review={review} />
        </SwiperSlide>
      ))}
    </SwiperWrapper>
  );
};
