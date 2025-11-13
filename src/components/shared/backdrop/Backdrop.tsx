import { useEffect } from "react";

interface BackdropProps {
    isVisible: boolean;
    onClick: () => void;
    className?: string;
    transparent?: boolean;
}

export default function Backdrop({
    isVisible = false,
    onClick,
    className = "",
    transparent = false,
}: BackdropProps) {
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isVisible) {
                onClick();
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isVisible, onClick]);

    // Lock body scroll on iOS devices
    useEffect(() => {
        if (!isVisible) return;

        const scrollY = window.scrollY;
        const body = document.body;
        const html = document.documentElement;

        // Save current scroll position and lock scroll
        body.style.position = "fixed";
        body.style.top = `-${scrollY}px`;
        body.style.width = "100%";
        body.style.overflow = "hidden";
        body.style.touchAction = "none";

        // Also lock html element for better iOS support
        html.style.overflow = "hidden";
        html.style.height = "100%";

        // Prevent touchmove on iOS - more aggressive approach
        let touchStartY = 0;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };

        const preventTouchMove = (e: TouchEvent) => {
            const target = e.target as HTMLElement;
            const modalContent = target.closest("[data-modal-content]");

            // If inside scrollable modal content, allow scrolling within bounds
            if (modalContent) {
                const element = modalContent as HTMLElement;
                const canScroll = element.scrollHeight > element.clientHeight;
                const isAtTop = element.scrollTop <= 0;
                const isAtBottom =
                    element.scrollTop + element.clientHeight >=
                    element.scrollHeight - 1;
                const touchY = e.touches[0].clientY;
                const scrollingDown = touchY < touchStartY;
                const scrollingUp = touchY > touchStartY;

                // Allow scrolling if element can scroll and not at boundaries
                if (canScroll) {
                    if (
                        (isAtTop && scrollingUp) ||
                        (isAtBottom && scrollingDown)
                    ) {
                        // Prevent scrolling beyond boundaries
                        e.preventDefault();
                        return;
                    }
                    // Allow scrolling within boundaries
                    return;
                }
            }

            // Prevent all other touchmove events (backdrop, page, etc.)
            e.preventDefault();
        };

        document.addEventListener("touchstart", handleTouchStart, {
            passive: true,
        });
        document.addEventListener("touchmove", preventTouchMove, {
            passive: false,
        });

        return () => {
            // Restore scroll position
            body.style.position = "";
            body.style.top = "";
            body.style.width = "";
            body.style.overflow = "";
            body.style.touchAction = "";
            html.style.overflow = "";
            html.style.height = "";
            window.scrollTo(0, scrollY);
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchmove", preventTouchMove);
        };
    }, [isVisible]);

    return (
        <div
            className={`fixed z-[40] inset-0 w-dvw h-dvh ${
                transparent ? "bg-transparent" : "bg-green/50"
            } transition-opacity duration-[1000ms] ease-in-out ${
                isVisible
                    ? "opacity-100 no-doc-scroll"
                    : "opacity-0 pointer-events-none"
            } ${className}`}
            onClick={onClick}
            style={isVisible ? { touchAction: "none" } : undefined}
        />
    );
}
