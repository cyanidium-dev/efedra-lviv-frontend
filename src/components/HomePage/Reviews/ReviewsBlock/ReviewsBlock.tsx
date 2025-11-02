'use client';
import { ReviewsCard } from './ReviewsCard';
import { reviewsList } from './data';
import SwiperWrapper from '@/components/shared/swiper/SwiperWrapper';
import { SwiperSlide } from 'swiper/react';
import { Review } from '@/types/review';
import { fadeInAnimation } from '@/utils/animationVariants';
import * as motion from 'motion/react-client';

export const ReviewsBlock = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInAnimation({ y: 20, delay: 0.3 })}
      className="lg:w-[539px] lg:h-[513px]"
    >
      <SwiperWrapper
        swiperClassName="reviews"
        wrapperClassName="bg-white rounded-[10px] p-[15px] pt-[15px]"
        buttonsWrapperClassName="mt-5 justify-end"
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
    </motion.div>
  );
};
