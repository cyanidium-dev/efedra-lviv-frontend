import { twMerge } from "tailwind-merge";

import {
  INSTAGRAM_AESTHETIC_URL,
  INSTAGRAM_DENTISTRY_URL,
} from "@/constants/constants";
import MainButton from "../buttons/MainButton";

interface SocialMediaProps {
  className?: string;
  buttonClassName?: string;
  dentistryButtonVariant?: "white" | "beige" | "blue" | "bordered";
}

export default function SocialMedia({
  className = "",
  buttonClassName = "",
  dentistryButtonVariant = "white",
}: SocialMediaProps) {
  return (
    <ul className={twMerge("flex flex-col gap-2", className)}>
      <li>
        <a
          href={INSTAGRAM_AESTHETIC_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <MainButton
            variant="beige"
            className={twMerge(
              "h-9 max-w-[144px] px-4 lg:px-4 text-[10px] font-medium",
              buttonClassName
            )}
          >
            Естетична медицина
          </MainButton>
        </a>
      </li>
      <li>
        <a
          href={INSTAGRAM_DENTISTRY_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <MainButton
            variant={dentistryButtonVariant}
            className={twMerge(
              "h-9 max-w-[144px] px-4 lg:px-4 text-[10px] font-medium",
              buttonClassName
            )}
          >
            Стоматологія
          </MainButton>
        </a>
      </li>
    </ul>
  );
}
