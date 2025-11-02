import Container from "../container/Container";
import Image from "next/image";
import Callback from "./Callback";
import * as motion from "motion/react-client";
import { fadeInAnimation, ctaVariants } from "@/utils/animationVariants";

interface MeetCenterCTAProps {
  imageOne: string;
  imageTwo: string;
  className?: string;
}

export default function MeetCenterCTA({
  imageOne,
  imageTwo,
  className = "",
}: MeetCenterCTAProps) {
  return (
    <section className={`overflow-hidden ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimation({ scale: 0.95, duration: 1.2 })}
        className="sm:hidden relative w-full h-[292px] mb-6 rounded-[20px] overflow-hidden"
      >
        <Image
          src={imageOne}
          alt="cosmetic procedure"
          fill
          className="object-cover"
        />
      </motion.div>
      <Container className="sm:flex gap-7">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ scale: 0.95, duration: 1.2 })}
          className="hidden sm:block relative w-full h-auto rounded-[20px] overflow-hidden"
        >
          <Image
            src={imageOne}
            alt="cosmetic procedure"
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="sm:w-[calc(55%-14px)] lg:w-[calc(50%-14px)] shrink-0">
          <div className="mb-8">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ x: 30 })}
              className="sm:max-w-[240px] lg:max-w-[380px] mb-1.5 font-evolenta text-[18px] lg:text-[32px] font-normal leading-[133%] uppercase text-center sm:text-left"
            >
              Бажаєте познайомитися з нашим центром особисто?
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInAnimation({ x: 30, delay: 0.3 })}
              className="hidden sm:block relative aspect-[338/214] w-auto h-[140px] lg:h-[180px] xl:h-[214px] ml-auto mt-[-9px] rounded-[20px] overflow-hidden"
            >
              <Image
                src={imageTwo}
                alt="background"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={ctaVariants}
          >
            <p className="lg:max-w-[342px] mb-4 lg:mb-8 text-[14px] lg:text-[16px] font-normal leading-[120%] text-center sm:text-left">
              Заповніть форму зворотнього звʼязку і ми обовʼязково зателефонуємо
              Вам!
            </p>
            <Callback
              buttonText="Записатися на консультацію"
              variant="bordered"
              withArrow
              buttonClassName="lg:w-[331px] h-14 px-6 lg:px-6 text-[14px] lg:text-[16px] font-medium leading-[120%]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
