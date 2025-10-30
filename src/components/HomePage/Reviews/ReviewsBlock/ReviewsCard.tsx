import { QuoteIcon } from '@/components/shared/icons/QuoteIcon';
import { Review } from '@/types/review';
import Image from 'next/image';

export const ReviewsCard = ({ review }: { review: Review }) => {
  return (
    <div className="relative p-[10px] rounded-[10px] bg-white h-full">
      <div className="flex items-center gap-[10px] mb-[30px]">
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <Image
            src={review.photo}
            alt={review.name}
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="text-[14px] leading-[120%] tracking-[-0.03em] text-black font-bold mb-[5px]">
            {review.name}
          </p>
          <p className="text-[12px] leading-[120%] tracking-[-0.03em] text-black/50 font-medium">
            {review.age} рік
          </p>
        </div>
      </div>
      <QuoteIcon className="text-black/50" />
      <div className="pt-[10px] border-t border-[#808080] mt-[15px]">
        <p className="text-[12px] leading-[120%] tracking-[-0.03em] text-black/50 font-medium">
          {review.text}
        </p>
      </div>
    </div>
  );
};
