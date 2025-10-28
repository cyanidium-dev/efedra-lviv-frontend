"use client";
import { useState } from "react";
import MainButton from "../buttons/MainButton";
import CallBackModal from "../modals/CallBackModal";
import * as motion from "motion/react-client";
import { ctaVariants } from "@/utils/animationVariants";

interface CallbackProps {
  buttonText: string;
  variant?: "beige" | "blue" | "white" | "bordered";
  withArrow?: boolean;
  buttonClassName?: string;
}

export default function Callback({
  buttonText,
  variant = "blue",
  withArrow = false,
  buttonClassName = "",
}: CallbackProps) {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <>
      <MainButton
        variant={variant}
        withArrow={withArrow}
        onClick={() => setIsModalShown(true)}
        className={buttonClassName}
      >
        {buttonText}
      </MainButton>
      <CallBackModal
        isModalShown={isModalShown}
        setIsModalShown={setIsModalShown}
      />
    </>
  );
}
