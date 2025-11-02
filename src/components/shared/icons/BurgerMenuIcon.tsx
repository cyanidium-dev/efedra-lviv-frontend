interface BurgerMenuIconProps {
  className?: string;
}

export default function BurgerMenuIcon({ className }: BurgerMenuIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="34"
      viewBox="0 0 33 34"
      fill="none"
      aria-label="Burger menu icon"
      className={className}
    >
      <path
        d="M27.5 9.80811L5.5 9.80811"
        stroke="currentColor"
        strokeWidth="2.0625"
        strokeLinecap="round"
      />
      <path
        d="M27.5 16.6831L5.5 16.6831"
        stroke="currentColor"
        strokeWidth="2.0625"
        strokeLinecap="round"
      />
      <path
        d="M27.5 23.5581L5.5 23.5581"
        stroke="currentColor"
        strokeWidth="2.0625"
        strokeLinecap="round"
      />
    </svg>
  );
}
