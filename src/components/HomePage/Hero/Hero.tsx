import Container from '@/components/shared/container/Container';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/utils/animationVariants';
import Image from 'next/image';
import GlassFilter from '@/components/shared/GlassFilter/GlassFilter';
import { GlassFilterTest } from '@/components/shared/GlassFilter/GlassFilterTest';

export const Hero = () => {
  return (
    <section className="bg-gray-light">
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
        <div
          style={
            {
              '--glass-frosting': '12.8',
              '--glass-tint-color': '#A9663B40',
              '--glass-tint-opacity': '0.12',
              '--glass-refraction': '0.8',
              '--glass-border-radius': '15px',
              '--glass-highlight-color': 'rgba(255,255,255,0.3)',
              '--glass-text-color': 'inherit',
              '--glass-depth': '0.2',
              '--glass-light-angle': '-45',
              '--glass-light-intensity': '0.8',
              '--glass-dispersion': '0.5',
            } as React.CSSProperties
          }
        >
          <GlassFilterTest>
            <div className="w-full px-[10px] py-[15px] bg-transparent">
              <p className="text-[13px] leading-[110%] tracking-[-0.05em] text-white">
                Наша команда — це лікарі з багаторічним досвідом, які поєднують
                професіоналізм із сучасним підходом.
              </p>
              <div>image</div>
              <button>Запис на прийом</button>
            </div>
          </GlassFilterTest>
        </div>
        <div>
          <div>image</div>
          <p>5000+ жінок</p>
          <p>Довіряють нам свою красу та здоров’я</p>
        </div>
      </Container>
    </section>
  );
};
