import Link from "next/link";

interface NavMenuProps {
  navList: { title: string; link: string }[];
  className?: string;
  onClick?: () => void;
}

export default function NavMenu({
  navList,
  className = "",
  onClick,
}: NavMenuProps) {
  return (
    <nav className={className}>
      <ul
        className={`flex flex-col lg:flex-row gap-10 lg:gap-6 xl:gap-10 lg:items-center`}
      >
        {navList.map(({ title, link }) => (
          <li key={link}>
            <Link
              onClick={onClick}
              href={link}
              className="block font-evolenta text-[16px] font-normal leading-[112.5%] uppercase active:text-beige xl:hover:text-beige focus-visible:text-beige transition duration-300 ease-in-out"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
