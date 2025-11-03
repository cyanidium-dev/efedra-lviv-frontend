import { QuoteIcon } from '@/components/shared/icons/QuoteIcon';
import { Review } from '@/types/review';
import Image from 'next/image';

export const ReviewsCard = ({ review }: { review: Review }) => {
  return (
    <div className="relative h-full">
      <div className="flex items-center gap-[10px] lg:gap-[15px] mb-[30px]">
        <div className="w-[40px] h-[40px] lg:w-[55px] lg:h-[55px] rounded-full overflow-hidden">
          <Image
            src={review.photo}
            alt={review.name}
            width={40}
            height={40}
            className="object-cover w-full h-full lg:w-[55px] lg:h-[55px]"
          />
        </div>
        <div>
          <p className="text-[14px] leading-[17px] tracking-[-0.03em] text-black font-bold mb-[5px]">
            {review.name}
          </p>
          <p className="text-[12px] lg:text-[14px] lg:leading-[14px] leading-[12px] tracking-[-0.03em] text-black/50 font-medium">
            {review.age} рік
          </p>
        </div>
      </div>
      <QuoteIcon className="text-black/50 lg:w-[38px] lg:h-[33px]" />
      <div className="pt-[10px] lg:pt-[20px] border-t border-[#808080] mt-[11px] lg:mt-[20px]">
        <p className="text-[12px] lg:text-[20px] lg:leading-[24px] leading-[12px] tracking-[-0.03em] text-black/50 font-medium">
          {review.text}
        </p>
      </div>
    </div>
  );
};
