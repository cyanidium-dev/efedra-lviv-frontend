import Container from '@/components/shared/container/Container';
import CheckmarkIcon from '@/components/shared/icons/CheckmarkIcon';
import {
  fadeInAnimation,
  listItemVariants,
  listVariants,
  scaleInAnimation,
} from '@/utils/animationVariants';
import * as motion from 'motion/react-client';
import Image from 'next/image';

export const About = () => {
  return (
    <section id="about" className="bg-white py-[40px] rounded-t-[15px]">
      <Container className="relative">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20, delay: 0.3 })}
          className="text-[28px] leading-[100%] tracking-[-0.05em] text-olive font-bold mb-[25px] uppercase"
        >
          Чому нас обирає більшість
        </motion.h2>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={listVariants({ staggerChildren: 0.3, delayChildren: 0.3 })}
          className="flex flex-col gap-[10px]"
        >
          <motion.li
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={listItemVariants}
            className="flex items-center p-[10px] h-[48px] max-w-[261px] bg-green-light rounded-[10px]"
          >
            <span className="w-[28px] h-[28px] flex items-center justify-center bg-white border border-green rounded-full mr-[9px]">
              <CheckmarkIcon />
            </span>
            <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white font-medium">
              Працюємо тільки з сертифікованими препаратами
            </p>
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={listItemVariants}
            className="flex items-center p-[10px] h-[48px] max-w-[201px] bg-green-light rounded-[10px] p-[10px]"
          >
            <span className="w-[28px] h-[28px] flex items-center justify-center bg-white border border-green rounded-full mr-[9px]">
              <CheckmarkIcon />
            </span>
            <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white font-medium">
              Сучасні апарати останнього покоління.
            </p>
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={listItemVariants}
            className="flex items-center p-[10px] h-[48px] max-w-[189px] bg-green-light rounded-[10px] p-[10px]"
          >
            <span className="w-[28px] h-[28px] flex items-center justify-center bg-white border border-green rounded-full mr-[9px]">
              <CheckmarkIcon />
            </span>
            <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white font-medium">
              Затишна атмосфера і конфіденційність.
            </p>
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={listItemVariants}
            className="flex items-center p-[10px] h-[48px] max-w-[189px] bg-green-light rounded-[10px] p-[10px]"
          >
            <span className="w-[28px] h-[28px] flex items-center justify-center bg-white border border-green rounded-full mr-[9px]">
              <CheckmarkIcon />
            </span>
            <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white font-medium">
              Лікарі з досвідом понад 10 років.
            </p>
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={listItemVariants}
            className="flex items-center p-[10px] h-[48px] max-w-[220px] bg-green-light rounded-[10px] p-[10px]"
          >
            <span className="w-[28px] h-[28px] flex items-center justify-center bg-white border border-green rounded-full mr-[9px]">
              <CheckmarkIcon />
            </span>
            <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white font-medium">
              Індивідуальні протоколи під кожне завдання.
            </p>
          </motion.li>
        </motion.ul>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleInAnimation}
          className="flex justify-center items-center absolute top-[110px] right-[-148px]"
        >
          <div className="flex relative justify-center items-center w-[266px] h-[266px] border border-[#546A504D] rounded-full">
            <div className="flex relative justify-center items-center w-[205px] h-[205px] border border-[#546A504D] rounded-full">
              <Image
                src="/images/homePage/about/centerMob.jpg"
                alt="About"
                width={153}
                height={153}
                className="rounded-full"
              />
              <Image
                src="/images/homePage/hero/cta2.jpg"
                alt="About"
                width={26}
                height={26}
                className="rounded-full absolute top-[134px] left-[-1px]"
              />
            </div>
            <Image
              src="/images/homePage/hero/cta1.jpg"
              alt="About"
              width={26}
              height={26}
              className="rounded-full absolute top-[80px] left-[-10px]"
            />
            <Image
              src="/images/homePage/hero/cta3.jpg"
              alt="About"
              width={26}
              height={26}
              className="rounded-full absolute top-[-1px] left-[84px]"
            />
            <Image
              src="/images/homePage/hero/cta4.jpg"
              alt="About"
              width={26}
              height={26}
              className="rounded-full absolute bottom-[-9px] left-[98px]"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
