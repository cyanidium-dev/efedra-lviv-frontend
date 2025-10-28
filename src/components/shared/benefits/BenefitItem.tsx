import * as motion from "motion/react-client";
import { listItemVariants } from "@/utils/animationVariants";

interface BenefitItemProps {
  benefit: { value: string; description: string };
  idx: number;
  variant?: "default" | "hero";
}

export default function BenefitItem({
  benefit,
  idx,
  variant = "default",
}: BenefitItemProps) {
  const { value, description } = benefit;

  const isHero = variant === "hero";

  return (
    <motion.li
      viewport={{ once: true, amount: 0.2 }}
      variants={listItemVariants}
      className={`flex flex-col items-center justify-center w-full sm:w-[calc(33.3%-10.67px)] ${
        isHero
          ? "h-[89px] lg:h-[138px] px-1 rounded-[10.32px] lg:rounded-[16px]"
          : "h-[131px] xl:h-[173px] px-3 rounded-[16px]"
      } ${
        idx === 0
          ? "text-blue bg-blue-light"
          : idx === 1
          ? "text-white bg-beige"
          : "text-white bg-blue"
      }`}
    >
      <p
        className={`font-evolenta font-normal leading-[120%] lg:leading-[133%] uppercase text-center ${
          isHero
            ? "text-[30px] md:text-[35px] lg:text-[48px] mb-1 lg:mb-[5px]"
            : "text-[48px] md:text-[36px] lg:text-[54px] mb-3 lg:mb-0 "
        }`}
      >
        {value}
      </p>
      <p
        className={`font-normal leading-[120%] text-center ${
          isHero ? "text-[9px] lg:text-[14px]" : "text-[12px] lg:text-[14px]"
        }`}
      >
        {description}
      </p>
    </motion.li>
  );
}
