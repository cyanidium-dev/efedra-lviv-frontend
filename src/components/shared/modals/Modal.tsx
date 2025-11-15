import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from "react";

import IconButton from "../buttons/IconButton";
import CrossIcon from "../icons/CrossIcon";

interface ModalProps {
    isModalShown: boolean;
    setIsModalShown: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
    className?: string;
}

export default function Modal({
    isModalShown,
    setIsModalShown,
    children,
    className = "bg-gray-light-2",
}: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    // Prevent focus-related scrolling when modal opens
    useEffect(() => {
        if (!isModalShown || !modalRef.current) return;

        const modalElement = modalRef.current;
        let savedScrollY = window.scrollY;

        // Prevent any scroll events from affecting the page
        const preventPageScroll = (e: Event) => {
            // Only prevent if scrolling would affect the page (not the modal itself)
            const target = e.target as HTMLElement;
            if (target && !modalElement.contains(target)) {
                e.preventDefault();
                window.scrollTo(0, savedScrollY);
            }
        };

        // Save scroll position when modal opens
        savedScrollY =
            window.scrollY ||
            window.pageYOffset ||
            document.documentElement.scrollTop;

        // Prevent scroll events on window
        window.addEventListener("scroll", preventPageScroll, {
            passive: false,
            capture: true,
        });

        // Also prevent wheel events that might cause scrolling
        const preventWheel = (e: WheelEvent) => {
            const target = e.target as HTMLElement;
            if (!modalElement.contains(target)) {
                e.preventDefault();
            }
        };

        window.addEventListener("wheel", preventWheel, {
            passive: false,
            capture: true,
        });

        return () => {
            window.removeEventListener("scroll", preventPageScroll, {
                capture: true,
            } as EventListenerOptions);
            window.removeEventListener("wheel", preventWheel, {
                capture: true,
            } as EventListenerOptions);
        };
    }, [isModalShown]);

    return (
        <div
            ref={modalRef}
            data-modal-content
            className={`${
                isModalShown
                    ? " -translate-y-[calc(50dvh-50%)] opacity-100 scale-100"
                    : "pointer-events-none opacity-0 scale-90"
            } fixed left-1/2 bottom-0 transform -translate-x-1/2 transition duration-[600ms] ease-out z-70 w-[82%] max-w-[470px] lg:max-w-[568px] max-h-dvh
      px-5 lg:px-[45px] pt-11 pb-8 lg:py-14 overflow-y-auto  rounded-[16px] lg:rounded-[20px] scrollbar scrollbar-w-[3px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full  scrollbar-thumb-transparent scrollbar-track-main popup-scroll shadow-md ${className}`}
            style={
                isModalShown
                    ? {
                          overscrollBehavior: "contain",
                          WebkitOverflowScrolling: "touch",
                          touchAction: "pan-y",
                      }
                    : undefined
            }
        >
            <IconButton
                handleClick={() => setIsModalShown(false)}
                className="absolute top-4 lg:top-8 right-4 lg:right-8 w-8 h-8"
            >
                {<CrossIcon className="w-8 h-8" />}
            </IconButton>

            {children}
        </div>
    );
}
