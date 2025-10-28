import { ReactNode } from "react";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface SectionTitleProps {
  children?: ReactNode;
  variant?: "beige" | "blue" | "black";
  type?: "bordered" | "solid";
  className?: string;
  animationDirection?: "left" | "right";
}

export default function SectionTitle({
  children,
  variant = "beige",
  type = "solid",
  className = "",
  animationDirection = "right",
}: SectionTitleProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.8 }}
      variants={fadeInAnimation({
        x: animationDirection === "right" ? -30 : 30,
      })}
      className={twMerge(
        clsx(
          `flex items-center justify-center w-fit h-[29px] mb-5 lg:mb-6 rounded-full px-3 py-1 
      ${
        variant === "beige"
          ? type === "solid"
            ? "text-white bg-beige/80"
            : "text-beige bg-white border-[1.8px] border-beige/80"
          : variant === "blue"
            ? type === "solid"
              ? "text-white bg-blue/80"
              : "text-blue bg-white border-[1.8px] border-blue/80"
            : type === "solid"
              ? "text-white bg-black/80"
              : "text-black bg-white border-[1.8px] border-black/80"
      }
      `,
          className
        )
      )}
    >
      <h2
        className={`pt-0.5 font-evolenta text-[14px] lg:text-[16px] font-normal uppercase`}
      >
        {children}
      </h2>
    </motion.div>
  );
}
