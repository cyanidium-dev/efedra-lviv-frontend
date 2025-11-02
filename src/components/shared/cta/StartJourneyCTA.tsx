import Image from "next/image";
import Container from "../container/Container";

import * as motion from "motion/react-client";
import { ctaVariants } from "@/utils/animationVariants";
import Callback from "./Callback";
import { twMerge } from "tailwind-merge";

interface StartJourneyCTAProps {
  image: string;
  className?: string;
  imageClassName?: string;
}

export default function StartJourneyCTA({
  image,
  className = "",
  imageClassName = "",
}: StartJourneyCTAProps) {
  return (
    <>
      <section className={className}>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={ctaVariants}
            className="relative p-4 lg:px-9 lg:pt-[55px] lg:pb-8 rounded-[20px] overflow-hidden"
          >
            <Image
              src={image}
              alt="background"
              fill
              className={twMerge(
                "-z-20 object-cover object-bottom",
                imageClassName
              )}
            />
            <div
              className="absolute top-0 left-0 -z-10 w-full h-full bg-[linear-gradient(101deg,rgba(0,0,0,0)_9.65%,rgba(1,19,31,0.8)_91.67%),linear-gradient(145deg,rgba(6,32,50,0.56)_15.09%,rgba(0,0,0,0)_50.23%)] 
          lg:bg-[linear-gradient(96deg,rgba(0,0,0,0.83)_12.56%,rgba(0,0,0,0)_66.13%,#000_133.21%)]"
            />
            <div className="flex flex-col gap-[77px] md:flex-row md:justify-between md:items-end ml-4 mt-4 mb-[77px] lg:ml-0 lg:mt-0 md:mb-[164px]">
              <p className="max-w-[212px] lg:max-w-[402px] font-evolenta text-[24px] lg:text-[48px] font-normal leading-[133%] uppercase text-white">
                Почніть шлях до оновленої версії себе{" "}
                <span className="italic">вже сьогодні</span>!
              </p>
              <div
                className="max-w-[160px] flex flex-col gap-4 lg:gap-2.5 ml-auto font-evolenta text-[15px] font-normal leading-[134%] uppercase 
            text-white text-right"
              >
                <p className="">Естетична медицина</p>
                <p>Стоматологія</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 md:flex-row md:justify-between items-center py-4 px-3.5 lg:py-5 lg:px-4 rounded-[20px] bg-white">
              <p className="max-w-[324px] lg:max-w-[454px] text-[12px] lg:text-[16px] font-normal lg:font-medium leading-[125%] text-center md:text-left">
                Маєте питання? Заповніть форму зворотнього звʼязку і ми
                обовʼязково зателефонуємо Вам!
              </p>
              <Callback
                buttonText="Замовити дзвінок"
                buttonClassName="px-5 lg:px-5 text-[12px] font-normal lg:text-[18px] lg:font-medium md:max-w-[255px]"
              />
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
