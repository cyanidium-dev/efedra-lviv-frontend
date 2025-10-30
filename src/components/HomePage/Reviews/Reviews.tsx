import Container from '@/components/shared/container/Container';
import { ReviewsBlock } from './ReviewsBlock/ReviewsBlock';
import Image from 'next/image';

export const Reviews = () => {
  return (
    <div id="reviews" className="pt-[80px] pb-[50px]">
      <Container>
        <div className="pt-[25px] pb-[12px] px-[15px] relative rounded-[15px] overflow-hidden">
          <Image
            src="/images/homePage/reviews/bgMob.jpg"
            alt="reviews"
            width={100}
            height={100}
            className="object-cover w-full h-full absolute inset-0 z-[-10]"
          />
          <h2 className="text-[28px] leading-[100%] tracking-[-0.05em] text-white font-bold mb-[50px] uppercase">
            Відгуки наших клієнтів
          </h2>
          <ReviewsBlock />
        </div>
      </Container>
    </div>
  );
};
