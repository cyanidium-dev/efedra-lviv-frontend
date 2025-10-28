import { forwardRef, ReactNode } from "react";
import LoaderIcon from "../icons/LoaderIcon";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import ArrowIcon from "../icons/ArrowIcon";

interface MainButtonProps {
  children: string | ReactNode;
  variant?: "beige" | "blue" | "white" | "bordered";
  className?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  loadingText?: string;
  withArrow?: boolean;
  iconClassName?: string;
  iconStrokeColor?: string;
}

const MainButton = forwardRef<HTMLButtonElement, MainButtonProps>(
  (
    {
      children,
      variant = "blue",
      className = "",
      type = "button",
      disabled = false,
      isLoading = false,
      onClick,
      loadingText,
      withArrow = false,
      iconClassName = "",
      iconStrokeColor = "",
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={twMerge(
          clsx(
            `group relative overflow-hidden enabled:cursor-pointer flex items-center justify-center h-[50px] px-[30px] lg:px-[52px] rounded-full ${
              variant === "beige"
                ? "text-white  bg-beige"
                : variant === "blue"
                  ? "text-white bg-blue"
                  : variant === "white"
                    ? "bg-white text-blue"
                    : "bg-white border border-blue text-black"
            } 
          disabled:opacity-60 enabled:xl:hover:brightness-125 enabled:focus-visible:brightness-125 enabled:active:scale-[98%] will-change-transform transition duration-300 ease-in-out`,
            "w-full",
            "text-[18px] font-medium leading-[120%]",
            className
          )
        )}
      >
        <div className="flex items-center justify-between gap-2.5 w-full">
          <p className="relative z-10 w-full text-center">
            {isLoading ? loadingText : children}
          </p>
          {withArrow ? (
            <ArrowIcon
              className={twMerge(
                "w-[16px] h-auto shrink-0 xl:group-hover:translate-x-[1px] xl:group-hover:-translate-y-[1px] will-change-transform transition duration-300 ease-in-out",
                iconClassName
              )}
              strokeColor={iconStrokeColor}
            />
          ) : null}
        </div>
        {isLoading ? <LoaderIcon variant={variant} /> : null}
      </button>
    );
  }
);

MainButton.displayName = "MainButton";

export default MainButton;
