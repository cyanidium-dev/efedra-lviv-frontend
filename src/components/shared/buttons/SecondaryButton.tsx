import { ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import ArrowIcon from "../icons/ArrowIcon";

interface SecondaryButtonProps {
  children: string | ReactNode;
  variant?: "beige" | "blue" | "white";
  className?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  loadingText?: string;
}

export default function SecondaryButton({
  children,
  variant = "blue",
  className = "",
  type = "button",
  disabled = false,
  isLoading = false,
  onClick,
  loadingText,
}: SecondaryButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        clsx(
          `group relative overflow-hidden enabled:cursor-pointer flex items-center justify-between gap-2.5 h-[50px] px-3 rounded-full ${
            variant === "beige"
              ? "text-white  bg-beige"
              : variant === "blue"
                ? "text-white bg-blue"
                : "bg-white text-blue"
          } 
          disabled:opacity-60 enabled:xl:hover:brightness-125 enabled:focus-visible:brightness-125 enabled:active:scale-[98%] will-change-transform transition duration-300 ease-in-out`,
          "w-full",
          "text-[14px] font-normal",
          className
        )
      )}
    >
      <p className="relative z-10 text-center">
        {isLoading ? loadingText : children}
      </p>

      <ArrowIcon className="w-[22px] h-auto shrink-0 rotate-[35deg] xl:group-hover:translate-x-[1px] will-change-transform transition duration-300 ease-in-out" />
    </button>
  );
}
