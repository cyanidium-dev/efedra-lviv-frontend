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
    <section
      id="about"
      className="bg-white py-[40px] rounded-t-[15px] lg:pt-[97px] lg:rounded-0 lg:pb-[60px]"
    >
      <Container className="relative">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ y: 20, delay: 0.3 })}
          className="text-[28px] leading-[100%] tracking-[-0.05em] text-olive font-bold mb-[25px] uppercase lg:text-[50px] lg:leading-[100%] lg:tracking-[-0.05em] lg:text-center lg:mb-[63px]"
        >
          Чому нас обирає більшість
        </motion.h2>
        <div className="lg:relative">
          <motion.ul
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={listVariants({
              staggerChildren: 0.3,
              delayChildren: 0.3,
            })}
            className="lg:relative flex flex-col gap-[10px] z-10 lg:h-[587px]"
          >
            <motion.li
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={listItemVariants}
              className="flex items-center p-[10px] lg:p-[15px] h-[48px] lg:mb-[42px] lg:h-[66px] max-w-[261px] lg:max-w-[338px] bg-green-light rounded-[10px] lg:absolute lg:left-[105px]"
            >
              <span className="w-[28px] h-[28px] lg:w-[38px] lg:h-[38px] flex items-center justify-center bg-white border border-green rounded-full mr-[9px] lg:mr-[15px]">
                <CheckmarkIcon className="lg:w-[38px] lg:h-[38px]" />
              </span>
              <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white font-medium lg:text-[16px]">
                Працюємо тільки з сертифікованими препаратами
              </p>
            </motion.li>
            <motion.li
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={listItemVariants}
              className="flex items-center p-[10px] lg:p-[15px] h-[48px] lg:mb-[145px] lg:h-[66px] max-w-[201px] lg:max-w-[258px] bg-green-light rounded-[10px] lg:absolute lg:left-[127px] lg:top-[385px]"
            >
              <span className="w-[28px] h-[28px] lg:w-[38px] lg:h-[38px] flex items-center justify-center bg-white border border-green rounded-full mr-[9px] lg:mr-[15px]">
                <CheckmarkIcon className="lg:w-[38px] lg:h-[38px]" />
              </span>
              <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white font-medium lg:text-[16px]">
                Сучасні апарати останнього покоління.
              </p>
            </motion.li>
            <motion.li
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={listItemVariants}
              className="flex items-center p-[10px] lg:p-[15px] h-[48px] lg:mb-0 lg:h-[66px] max-w-[189px] lg:max-w-[242px] bg-green-light rounded-[10px] lg:absolute lg:left-[540px] lg:bottom-0"
            >
              <span className="w-[28px] h-[28px] lg:w-[38px] lg:h-[38px] flex items-center justify-center bg-white border border-green rounded-full mr-[9px] lg:mr-[15px]">
                <CheckmarkIcon className="lg:w-[38px] lg:h-[38px]" />
              </span>
              <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white font-medium lg:text-[16px]">
                Затишна атмосфера і конфіденційність.
              </p>
            </motion.li>
            <motion.li
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={listItemVariants}
              className="flex items-center p-[10px] lg:p-[15px] h-[48px] lg:mb-[145px] lg:h-[66px] max-w-[189px] lg:max-w-[219px] bg-green-light rounded-[10px] lg:absolute lg:right-[140px] lg:top-[108px]"
            >
              <span className="w-[28px] h-[28px] lg:w-[38px] lg:h-[38px] flex items-center justify-center bg-white border border-green rounded-full mr-[9px] lg:mr-[15px]">
                <CheckmarkIcon className="lg:w-[38px] lg:h-[38px]" />
              </span>
              <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white font-medium lg:text-[16px]">
                Лікарі з досвідом понад 10 років.
              </p>
            </motion.li>
            <motion.li
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={listItemVariants}
              className="flex items-center p-[10px] lg:p-[15px] h-[48px] lg:mb-[145px] lg:h-[66px] max-w-[220px] lg:max-w-[276px] bg-green-light rounded-[10px] lg:absolute lg:right-[81px] lg:top-[319px]"
            >
              <span className="w-[28px] h-[28px] lg:w-[38px] lg:h-[38px] flex items-center justify-center bg-white border border-green rounded-full mr-[9px] lg:mr-[15px]">
                <CheckmarkIcon className="lg:w-[38px] lg:h-[38px]" />
              </span>
              <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white font-medium lg:text-[16px]">
                Індивідуальні протоколи під кожне завдання.
              </p>
            </motion.li>
          </motion.ul>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleInAnimation(-15, 0.8)}
            className="flex justify-center items-center absolute top-[110px] right-[-148px] lg:top-[-33px] lg:left-[293px] lg:right-[unset]"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleInAnimation(15, 0.8)}
              className="flex relative justify-center items-center w-[266px] h-[266px] lg:w-[571px] lg:h-[571px] border border-[#546A504D] rounded-full"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.3 }}
                variants={scaleInAnimation(20, 0.8)}
                className="flex relative justify-center items-center w-[205px] h-[205px] lg:w-[440px] lg:h-[440px] border border-[#546A504D] rounded-full"
              >
                <Image
                  src="/images/homePage/about/centerMob.jpg"
                  alt="About"
                  width={153}
                  height={153}
                  className="rounded-full lg:hidden"
                />
                <Image
                  src="/images/homePage/about/center.jpg"
                  alt="About"
                  width={329}
                  height={329}
                  className="rounded-full lg:block hidden"
                />
                <Image
                  src="/images/homePage/hero/cta2.jpg"
                  alt="About"
                  width={26}
                  height={26}
                  className="rounded-full absolute top-[134px] left-[-1px] lg:top-[171px] lg:left-[unset] lg:right-[22px] lg:w-[55px] lg:h-[55px]"
                />
              </motion.div>
              <Image
                src="/images/homePage/hero/cta1.jpg"
                alt="About"
                width={26}
                height={26}
                className="rounded-full absolute top-[80px] left-[-10px] lg:top-[174px] lg:left-[-20px] lg:w-[55px] lg:h-[55px]"
              />
              <Image
                src="/images/homePage/hero/cta3.jpg"
                alt="About"
                width={26}
                height={26}
                className="rounded-full absolute top-[-1px] left-[84px] lg:top-0 lg:left-[unset] lg:right-[121px] lg:w-[55px] lg:h-[55px]"
              />
              <Image
                src="/images/homePage/hero/cta4.jpg"
                alt="About"
                width={26}
                height={26}
                className="rounded-full absolute bottom-[-9px] left-[98px] lg:bottom-[47px] lg:left-[178px] lg:w-[55px] lg:h-[55px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
