import LogoIcon from '@/components/shared/icons/LogoIcon';
import { fadeInAnimation } from '@/utils/animationVariants';
import * as motion from 'motion/react-client';
import Image from 'next/image';
export const Plug = () => {
  return (
    <div>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimation({ y: 20, delay: 0.3 })}
        className="flex items-center justify-center"
      >
        <motion.li
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20, delay: 0.3 })}
          className="bg-green text-white flex items-center justify-center h-[59px] w-full rounded-full"
        >
          <LogoIcon className="w-[55px]" />
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20, delay: 0.3 })}
          className="hidden lg:block"
        ></motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20, delay: 0.3 })}
          className="relative text-[14px] leading-[100%] tracking-[-0.03em] text-white font-medium h-[59px] flex items-center justify-center w-full rounded-full overflow-hidden"
        >
          <Image
            src="/images/homePage/plug/imageBg.jpg"
            alt="imageBg"
            width={100}
            height={100}
            className="object-cover w-full h-full absolute inset-0 z-[-10]"
          />
          НАМ
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20, delay: 0.3 })}
          className="text-[14px] leading-[100%] tracking-[-0.03em] text-white font-medium bg-green h-[59px] flex items-center justify-center w-full rounded-full"
        >
          Довіряють
        </motion.li>
      </motion.ul>
    </div>
  );
};
