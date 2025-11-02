import * as motion from "motion/react-client";
import { twMerge } from "tailwind-merge";
import { listVariants } from "@/utils/animationVariants";
import BenefitItem from "./BenefitItem";

interface BenefitsListProps {
  className?: string;
  variant?: "default" | "hero";
}

export default function BenefitsList({
  className = "",
  variant = "default",
}: BenefitsListProps) {
  const benefitsList = [
    { value: "10+", description: "років досвіду" },
    { value: "100%", description: "сертифіковані фахівці" },
    { value: "1000+", description: "задоволених відвідувачів" },
  ];

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.4 }}
      variants={listVariants({ staggerChildren: 0.3, delayChildren: 0.3 })}
      className={twMerge(
        "flex flex-col sm:flex-row gap-3.5 xl:gap-5",
        className
      )}
    >
      {benefitsList.map((benefit, idx) => (
        <BenefitItem key={idx} benefit={benefit} idx={idx} variant={variant} />
      ))}
    </motion.ul>
  );
}
