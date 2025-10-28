import * as motion from "motion/react-client";
import { listVariants, iconItemVariants } from "@/utils/animationVariants";

interface StepsIconProps {
  variant: "blue" | "beige";
  className?: string;
}

export default function StepsIconDesk({
  variant,
  className = "",
}: StepsIconProps) {
  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.4 }}
      variants={listVariants({ staggerChildren: 0.5, delayChildren: 0 })}
      width="197"
      height="424"
      viewBox="0 0 197 424"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="steps icon"
      className={className}
    >
      <path
        d="M131.329 44C73.6247 84.9949 36.0195 152.084 36.0195 227.89C36.0195 303.697 73.6247 370.786 131.329 411.781"
        stroke="url(#paint5_linear_14_405)"
        strokeWidth="2"
      />
      <path
        d="M111.555 345C133.092 345 150.539 362.328 150.539 383.688C150.539 405.047 133.092 422.375 111.555 422.375C90.0172 422.375 72.5703 405.047 72.5703 383.688C72.5703 362.328 90.0172 345 111.555 345Z"
        fill="white"
        stroke="url(#paint6_linear_14_405)"
        strokeWidth="2"
      />

      <path
        d="M156.203 1C177.741 1 195.188 18.328 195.188 39.6875C195.188 61.047 177.741 78.375 156.203 78.375C134.666 78.3749 117.219 61.0469 117.219 39.6875C117.219 18.3281 134.666 1.00009 156.203 1Z"
        fill="white"
        stroke="url(#paint7_linear_14_405)"
        strokeWidth="2"
      />

      <path
        d="M40.5 170.588C62.0376 170.588 79.4844 187.916 79.4844 209.275C79.4844 230.635 62.0376 247.963 40.5 247.963C18.9625 247.963 1.51562 230.635 1.51562 209.275C1.51562 187.916 18.9625 170.588 40.5 170.588Z"
        fill="white"
        stroke="url(#paint8_linear_14_405)"
        strokeWidth="2"
      />

      <motion.path
        viewport={{ once: true, amount: 0.2 }}
        variants={iconItemVariants}
        d="M156.245 53.6875V29.4955H151.709V27.0835H158.873V53.6875H156.245Z"
        fill="#1E1E1E"
      />
      <motion.path
        viewport={{ once: true, amount: 0.2 }}
        variants={iconItemVariants}
        d="M31.6138 223.275V220.863L40.9378 211.863C43.3138 209.595 43.3138 209.595 44.1058 208.623C45.4018 207.111 45.9778 205.743 45.9778 204.159C45.9778 200.919 43.5658 198.615 40.2178 198.615C37.8778 198.615 35.9698 199.803 35.0698 201.747C34.6378 202.683 34.4578 203.691 34.4578 205.275H31.8298C31.8298 203.403 31.9378 202.647 32.4058 201.387C33.6298 198.147 36.5458 196.203 40.2538 196.203C45.1138 196.203 48.6418 199.587 48.6418 204.303C48.6418 207.147 47.4898 209.127 43.7458 212.691L35.2138 220.863H48.4978V223.275H31.6138Z"
        fill="#1E1E1E"
      />
      <motion.path
        viewport={{ once: true, amount: 0.2 }}
        variants={iconItemVariants}
        d="M107.06 377.707H104.432C104.576 373.351 107.168 370.615 111.164 370.615C115.124 370.615 117.86 373.387 117.86 377.348C117.86 379.543 116.996 381.163 115.124 382.459C118.112 383.971 119.624 386.419 119.624 389.623C119.624 394.411 115.952 398.156 111.308 398.156C107.996 398.156 105.152 396.5 103.712 393.799C103.028 392.503 102.74 391.207 102.668 389.371H105.296C105.44 391.315 105.728 392.287 106.448 393.295C107.528 394.843 109.256 395.743 111.2 395.743C114.476 395.743 116.96 393.151 116.96 389.767C116.96 386.959 115.124 384.583 112.46 383.935C111.74 383.791 111.128 383.755 109.364 383.719V381.343C110.408 381.415 110.444 381.415 110.66 381.415C113.432 381.415 115.196 379.795 115.196 377.203C115.196 374.755 113.54 373.027 111.164 373.027C108.572 373.027 107.096 374.719 107.06 377.707Z"
        fill="#1E1E1E"
      />
      <defs>
        <linearGradient
          id="paint5_linear_14_405"
          x1="106.293"
          y1="44"
          x2="-87.5337"
          y2="165.636"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={`${variant === "blue" ? "#2080C0" : "#DDAD80"}`} />
          <stop
            offset="0.447115"
            stopColor={`${variant === "blue" ? "#8BBCDD" : "#FADFC6"}`}
          />
          <stop
            offset="1"
            stopColor={`${variant === "blue" ? "#2080C0" : "#DDAD80"}`}
          />
        </linearGradient>
        <linearGradient
          id="paint6_linear_14_405"
          x1="130.533"
          y1="344"
          x2="97.9279"
          y2="423.547"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={`${variant === "blue" ? "#2080C0" : "#DDAD80"}`} />
          <stop
            offset="0.447115"
            stopColor={`${variant === "blue" ? "#8BBCDD" : "#FADFC6"}`}
          />
          <stop
            offset="1"
            stopColor={`${variant === "blue" ? "#2080C0" : "#DDAD80"}`}
          />
        </linearGradient>
        <linearGradient
          id="paint7_linear_14_405"
          x1="175.181"
          y1="-1.96215e-06"
          x2="142.576"
          y2="79.5465"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={`${variant === "blue" ? "#2080C0" : "#DDAD80"}`} />
          <stop
            offset="0.447115"
            stopColor={`${variant === "blue" ? "#8BBCDD" : "#FADFC6"}`}
          />
          <stop
            offset="1"
            stopColor={`${variant === "blue" ? "#2080C0" : "#DDAD80"}`}
          />
        </linearGradient>
        <linearGradient
          id="paint8_linear_14_405"
          x1="59.4781"
          y1="169.588"
          x2="26.8732"
          y2="249.134"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={`${variant === "blue" ? "#2080C0" : "#DDAD80"}`} />
          <stop
            offset="0.447115"
            stopColor={`${variant === "blue" ? "#8BBCDD" : "#FADFC6"}`}
          />
          <stop
            offset="1"
            stopColor={`${variant === "blue" ? "#2080C0" : "#DDAD80"}`}
          />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
