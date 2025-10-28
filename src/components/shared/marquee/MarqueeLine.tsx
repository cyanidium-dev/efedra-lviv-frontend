"use client";
import Marquee from "react-fast-marquee";
import * as motion from "motion/react-client";
import { headerVariants } from "@/utils/animationVariants";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface MarqueeLineProps {
  variant?: "beige" | "blue";
  className?: string;
}

export default function MarqueeLine({
  className = "",
  variant = "beige",
}: MarqueeLineProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={headerVariants}
      className={className}
    >
      <Marquee
        autoFill={true}
        speed={70}
        className={twMerge(
          clsx(
            `h-[42px] lg:h-[76px] border-y lg:border-y-2 font-evolenta text-[17px] lg:text-[30px] leading-none ${
              variant === "beige"
                ? "text-beige border-beige"
                : "text-blue border-blue"
            }`,
            className
          )
        )}
      >
        <span className="inline-block mx-[7.15px] lg:mx-[13px]">efedra</span>
        <span className="inline-block mx-[7.15px] lg:mx-[13px]">efedra</span>
        <span className="inline-block mx-[7.15px] lg:mx-[13px]">efedra</span>
      </Marquee>
    </motion.div>
  );
}
