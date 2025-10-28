"use client";

import { useState } from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import Container from "../container/Container";
import { fadeInAnimation } from "@/utils/animationVariants";
import MainButton from "../buttons/MainButton";
import CallBackModal from "../modals/CallBackModal";

interface VerticalTitleHeroProps {
  title: string;
  image: string;
}

export default function VerticalTitleHero({
  title,
  image,
}: VerticalTitleHeroProps) {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <section className="pt-[14px] pb-11 lg:pt-4 lg:pb-[35px]">
      <Container className="flex gap-[10px] md:gap-[16px] lg:gap-[23px] w-full items-center">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInAnimation({ scale: 0.95, x: 50, duration: 1.2 })}
          className="max-h-[195px] lg:max-h-[380px] text-[16px] md:text-[28px] lg:text-[32px] leading-[115%] lg:leading-[135%] font-evolenta uppercase self-end [writing-mode:sideways-lr]"
        >
          {title}
        </motion.h1>

        <div className="relative w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ scale: 0.95, x: 50, duration: 1.2 })}
            className="relative w-full h-[195px] md:h-[320px] lg:h-[380px] xl:h-[472px] rounded-[20px] overflow-hidden"
          >
            <Image
              src={image}
              alt="background"
              fill
              priority
              fetchPriority="high"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInAnimation({ x: 10, delay: 0.6 })}
          >
            <MainButton
              onClick={() => setIsModalShown(true)}
              variant="bordered"
              withArrow
              className="md:hidden absolute -bottom-[20px] -right-[12px] px-[17px] max-w-[158px] h-[43px] text-[14px]"
              iconClassName="w-[26px] h-[21px]"
              iconStrokeColor="var(--color-white)"
            >
              Записатись
            </MainButton>

            <MainButton
              onClick={() => setIsModalShown(true)}
              variant="white"
              withArrow
              className="hidden md:flex absolute bottom-[16px] right-[15px] px-[23px] lg:px-[23px] max-w-[175px] h-[56px] text-[15px] leading-[120%] text-black"
              iconClassName="w-[26px] h-[21px]"
              iconStrokeColor="var(--color-white)"
            >
              Записатись
            </MainButton>
          </motion.div>
        </div>
      </Container>
      <CallBackModal
        isModalShown={isModalShown}
        setIsModalShown={setIsModalShown}
      />
    </section>
  );
}
