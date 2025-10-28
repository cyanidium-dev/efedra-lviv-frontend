"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  burgerMenuVariants,
  burgerListVariants,
  fadeInAnimation,
} from "@/utils/animationVariants";
import NavMenu from "../navMenu/NavMenu";
import { navListOne, navListThree, navListTwo } from "../navMenu/navMenuData";
import MainButton from "../../buttons/MainButton";
import { headerPhoneRegex } from "@/regex/regex";
import { PHONE } from "@/constants/constants";
import Container from "../../container/Container";
import Image from "next/image";

interface BurgerMenuContentProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BurgerMenuContent({
  isOpen,
  onClose,
}: BurgerMenuContentProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lg:hidden fixed right-0 top-0 z-[50] pt-21 w-full h-dvh max-h-dvh bg-white"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={burgerMenuVariants}
        >
          <Container
            className="flex flex-col justify-between h-full pt-9 pb-8 overflow-y-auto scrollbar scrollbar-w-[3px] scrollbar-thumb-rounded-full 
          scrollbar-track-rounded-full scrollbar-thumb-beige/50 scrollbar-track-transparent"
          >
            {/* Меню */}
            <motion.div
              variants={burgerListVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mb-15"
            >
              <NavMenu
                navList={navListOne}
                className="mb-10"
                onClick={onClose}
              />
              <NavMenu
                navList={navListTwo}
                className="mb-10"
                onClick={onClose}
              />
              <NavMenu navList={navListThree} onClick={onClose} />
            </motion.div>
            <motion.a
              href={`tel:+${PHONE.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="phone number"
              className="block w-full max-w-[400px]"
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInAnimation({ y: 10, scale: 0.98, delay: 0.6 })}
            >
              <MainButton className="text-[14px] font-normal leading-[120%]">
                {PHONE.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
              </MainButton>
            </motion.a>
          </Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInAnimation({
              scale: 0.97,
              delay: 1,
              duration: 1,
            })}
            className="fixed -z-10 bottom-0 right-0 pointer-events-none"
          >
            <Image
              src="/images/header/burgerBg.svg"
              alt="background"
              width="303"
              height="328"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
