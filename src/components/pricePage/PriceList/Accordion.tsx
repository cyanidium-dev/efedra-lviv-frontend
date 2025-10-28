"use client";

import { motion, AnimatePresence } from "framer-motion";
import ArrowIcon from "@/components/shared/icons/ArrowIcon";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface AccordionProps {
  title: string;
  colorScheme: "beige" | "blue" | "black";
  children: React.ReactNode;
}

export default function Accordion({
  title,
  colorScheme,
  children,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const toggleAccordion = () => {
    if (showContent) {
      setShowContent(false);
    } else {
      setIsOpen(true);
      setShowContent(true);
    }
  };

  const colorSchemeHover: Record<AccordionProps["colorScheme"], string> = {
    beige: `${isOpen ? "bg-beige/20" : "bg-white hover:bg-beige/20"}`,
    blue: `${isOpen ? "bg-blue/20" : "bg-white hover:bg-blue/20"}`,
    black: `${isOpen ? "bg-gray" : "bg-white hover:bg-gray"}`,
  };

  return (
    <div>
      <motion.div
        onClick={toggleAccordion}
        className={twMerge(
          "relative w-full flex justify-between items-center pt-[18px] pb-[19px] px-6 md:pl-[46px] text-left border cursor-pointer max-h-[57px] rounded-[32px] transition-all duration-300 ease-in-out",
          `border-${colorScheme}`,
          colorSchemeHover[colorScheme]
        )}
      >
        <p
          className={`leading-[135%] md:text-[16px] md:leading-[132%] ${
            isOpen ? `font-medium` : "font-normal"
          }`}
        >
          {title}
        </p>
        <motion.span
          animate={{ rotate: showContent ? 0 : 65 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ArrowIcon
            className="w-[21px] h-[17px] md:w-[26px] md:h-[21px]"
            strokeColor={`${
              isOpen ? "var(--color-gray)" : "var(--color-white)"
            }`}
          />
        </motion.span>
      </motion.div>

      <AnimatePresence initial={false} onExitComplete={() => setIsOpen(false)}>
        {showContent && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
