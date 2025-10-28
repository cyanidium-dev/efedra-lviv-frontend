import * as motion from "motion/react-client";
import { listItemVariants } from "@/utils/animationVariants";
import { IIconTextItem } from "@/types/iconText";

interface IconTextItemProps {
  item: IIconTextItem;
}

export default function IconTextItem({ item }: IconTextItemProps) {
  const { value, description, icon: Icon } = item;

  return (
    <motion.li
      viewport={{ once: true, amount: 0.2 }}
      variants={listItemVariants}
      className="flex gap-4 min-[400px]:gap-6 sm:gap-4 xl:gap-[25px] items-center xl:max-h-[103px] lg:max-w-[280px] xl:max-w-fit"
    >
      <div className="size-[65px] shrink-0">
        <Icon />
      </div>
      <div className="flex flex-col gap-1 lg:gap-2">
        <p className="font-evolenta text-[16px] lg:text-[20px] uppercase leading-[132%] lg:leading-[135%]">
          {value}
        </p>
        <p className="text-[12px] lg:text-[14px] leading-[125%] max-w-[210px] min-[400px]:max-w-[220px] min-[480px]:max-w-[260px] lg:max-w-full lg:leading-[122%]">
          {description}
        </p>
      </div>
    </motion.li>
  );
}
