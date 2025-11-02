import Container from '@/components/shared/container/Container';
import { ReviewsBlock } from './ReviewsBlock/ReviewsBlock';
import Image from 'next/image';
import { fadeInAnimation } from '@/utils/animationVariants';
import * as motion from 'motion/react-client';

export const Reviews = () => {
  return (
    <div id="reviews" className="pt-[80px] pb-[50px]">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20, delay: 0.3 })}
          className="pt-[25px] pb-[12px] px-[15px] relative rounded-[15px] overflow-hidden"
        >
          <Image
            src="/images/homePage/reviews/bgMob.jpg"
            alt="reviews"
            width={100}
            height={100}
            className="object-cover w-full h-full absolute inset-0 z-[-10]"
          />
          <motion.h2
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ y: 20, delay: 0.3 })}
            className="text-[28px] leading-[100%] tracking-[-0.05em] text-white font-bold mb-[50px] uppercase"
          >
            Відгуки наших клієнтів
          </motion.h2>
          <ReviewsBlock />
        </motion.div>
      </Container>
    </div>
  );
};
