"use client";
import { useState, useEffect, ReactNode, RefObject } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

interface PaginationProps<T> {
  items: T[];
  renderItems: (items: T[]) => ReactNode;
  useItemsPerPage: () => number;
  scrollTargetRef: RefObject<HTMLElement | null>;
  className?: string;
  variant?: "blue" | "beige";
}

export default function Pagination<T>({
  items,
  renderItems,
  useItemsPerPage,
  scrollTargetRef,
  className = "",
  variant = "blue",
}: PaginationProps<T>) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(page);
  const itemsPerPage = useItemsPerPage();
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(parseInt(searchParams.get("page") || "1", 10));
  }, [searchParams]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    requestAnimationFrame(() => {
      scrollTargetRef.current?.scrollIntoView({
        block: "start",
      });
    });

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <div key={currentPage} className={`${className}`}>
        {renderItems(currentItems)}
      </div>
      <div
        className={`${totalPages > 1 ? "flex" : "hidden"} justify-center items-center gap-[15px] mt-9 lg:mt-15 mx-auto`}
      >
        <button
          aria-label="left"
          className={`enabled:cursor-pointer flex justify-center items-center size-[30px]  rounded-full transition duration-300 ease-in-out
          enabled:hover:brightness-125 enabled:active:scale-95 enabled:focus-visible:brightness-125
          disabled:bg-gray ${variant === "blue" ? "bg-blue" : "bg-beige"}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={page === 1}
        >
          <Image
            src="/images/icons/arrow-left.svg"
            alt="arrow-left"
            width={16}
            height={16}
          />
        </button>

        <p className="font-evolenta text-[15px] font-normal leading-[133%]">
          {currentPage}/{totalPages}
        </p>

        <button
          aria-label="right"
          className={`enabled:cursor-pointer flex justify-center items-center size-[30px] rounded-full transition duration-300 ease-in-out
          enabled:hover:brightness-125 enabled:active:scale-95 enabled:focus-visible:brightness-125
          disabled:bg-gray  ${variant === "blue" ? "bg-blue" : "bg-beige"}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={page === totalPages}
        >
          <Image
            src="/images/icons/arrow-right.svg"
            alt="arrow-right"
            width={16}
            height={16}
          />
        </button>
      </div>
    </>
  );
}
