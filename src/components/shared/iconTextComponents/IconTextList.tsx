import * as motion from "motion/react-client";

import { IIconTextItem } from "@/types/iconText";
import { fadeInAnimation, listVariants } from "@/utils/animationVariants";
import IconTextItem from "./IconTextItem";

interface IconTextListProps {
  title: string;
  items: IIconTextItem[];
}

export default function IconTextList({ title, items }: IconTextListProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.4 }}
      variants={listVariants({ staggerChildren: 0.3, delayChildren: 0.3 })}
      className="lg:pt-5 flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-20 lg:gap-x-10 xl:gap-x-[53px] sm:gap-y-10 xl:gap-y-15"
    >
      <motion.h3
        variants={fadeInAnimation({ x: 30 })}
        className="font-evolenta text-[20px] sm:text-[22px] lg:text-[24px] xl:text-[32px] uppercase italic leading-[135%] mb-5 min-[400px]:mb-8 sm:mb-0 max-w-[280px] min-[400px]:max-w-full sm:max-w-[220px] md:max-w-[280px] lg:max-w-[220px] xl:max-w-[320px]  sm:text-start"
      >
        {title}
      </motion.h3>

      <motion.ul className="flex flex-col xs:items-center space-y-[44px] sm:space-y-0 sm:contents">
        {items.map((item, idx) => (
          <IconTextItem key={idx} item={item} />
        ))}
      </motion.ul>
    </motion.div>
  );
}
