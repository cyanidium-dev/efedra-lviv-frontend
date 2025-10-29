import Container from '@/components/shared/container/Container';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/utils/animationVariants';
import Image from 'next/image';
import { GlassFilter } from '@/components/shared/GlassFilter/GlassFilter';
import PhoneIcon from '@/components/shared/icons/PhoneIcon';

export const Hero = () => {
  return (
    <section className="bg-gray-light pt-[4px] pb-[30px] mb-[-15px]">
      <Container className="relative">
        <div className="mb-[52px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ y: 20, delay: 0.3 })}
            className="absolute z-10 top-[-255px] left-[-111px] w-[471px] h-[453px] rounded-full bg-white pointer-events-none"
          ></motion.div>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ y: 20, delay: 0.3 })}
            className="max-w-[293px] relative z-20 text-[28px] leading-[100%] tracking-[-0.03em] uppercase text-olive mb-5 font-bold"
          >
            Відкрийте новий рівень догляду за собою
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ y: 20, delay: 0.6 })}
            className="max-w-[201px] font-medium relative z-20 text-[14px] leading-[100%] tracking-[-0.03em] text-black"
          >
            Безпечні та результативні процедури для вашої краси та молодості
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({
            scale: 0.95,
            duration: 1.5,
            opacity: 0.01,
          })}
          className="lg:hidden relative left-[50%] mt-[-75px] mb-[-120px] -translate-x-1/2 pointer-events-none w-[454px] h-auto"
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/homePage/hero/bgMob.jpg"
              alt="background"
              priority
              fetchPriority="high"
              unoptimized
              sizes="(min-width: 1024px) 0px, 100vw"
              width={1063}
              height={868}
              className="object-cover w-full h-full"
            />
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, #DCD5CD00 79.84%, #DCD5CD 97.58%), linear-gradient(0.69deg, #DCD5CD00 82.29%, #DCD5CD 99.29%)',
              }}
            />
          </div>
        </motion.div>
        <GlassFilter
          frost={12.6}
          tintColor="#A9663B40"
          refraction={0.8}
          borderRadius="15px"
          depth={0.2}
          lightAngle={-45}
          lightIntensity={0.8}
          dispersion={0.5}
          className="mb-[15px]"
        >
          <div className="w-full px-[10px] py-[15px] bg-transparent">
            <div className="flex pb-[15px] border-b border-[#FFFFFF54] mb-[14px]">
              <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white mr-[5px] max-w-[198px]">
                Наша команда — це лікарі з багаторічним досвідом, які поєднують
                професіоналізм із сучасним підходом.
              </p>
              <Image
                src="/images/homePage/hero/contactCard.jpg"
                alt="contact card"
                width={73}
                height={65}
                className="rounded-[5px]"
              />
            </div>
            <button className="relative w-full px-[20px] py-[12px] rounded-full bg-white text-left text-[16px] leading-[100%] tracking-[-0.05em] text-black font-medium">
              Запис на прийом
              <span className="absolute right-[4px] top-1/2 -translate-y-1/2 w-[32px] h-[32px] flex items-center justify-center bg-green rounded-full">
                <PhoneIcon className="text-white" />
              </span>
            </button>
          </div>
        </GlassFilter>
        <GlassFilter
          frost={2}
          tintColor="#FFFFFF66"
          refraction={0.8}
          borderRadius="10px"
          depth={0.2}
          lightAngle={-45}
          lightIntensity={0.8}
          dispersion={0.5}
        >
          <div className="py-[15px] px-[10px] bg-transparent">
            <div className="flex mb-[5px] items-end">
              <ul className="flex items-center mr-[10px]">
                <li className="mr-[-10px]">
                  <Image
                    src="/images/homePage/hero/cta1.jpg"
                    alt="icon1"
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                </li>
                <li className="mr-[-10px]">
                  <Image
                    src="/images/homePage/hero/cta2.jpg"
                    alt="icon2"
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                </li>
                <li className="mr-[-10px]">
                  <Image
                    src="/images/homePage/hero/cta3.jpg"
                    alt="icon3"
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                </li>
                <li>
                  <Image
                    src="/images/homePage/hero/cta4.jpg"
                    alt="icon4"
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                </li>
              </ul>

              <p className="text-[15px] leading-[110%] tracking-[-0.05em] text-black font-semibold">
                5000+ жінок
              </p>
            </div>
            <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-black font-normal">
              Довіряють нам свою красу та здоров’я
            </p>
          </div>
        </GlassFilter>
      </Container>
    </section>
  );
};
