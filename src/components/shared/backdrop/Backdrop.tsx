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

    // Lock body scroll and preserve scroll position
    useEffect(() => {
        if (!isVisible) {
            // Clean up any lingering styles when backdrop is hidden
            const body = document.body;
            const html = document.documentElement;
            const scrollY = body.style.top ? parseInt(body.style.top || "0") * -1 : 0;
            
            // Remove the no-doc-scroll class
            html.classList.remove("no-doc-scroll");
            
            // Restore styles
            body.style.position = "";
            body.style.top = "";
            body.style.width = "";
            body.style.overflow = "";
            body.style.touchAction = "";
            body.style.overscrollBehavior = "";
            html.style.overflow = "";
            html.style.height = "";
            html.style.overscrollBehavior = "";
            
            // Restore scroll position
            if (scrollY) {
                window.scrollTo(0, scrollY);
            }
            return;
        }

        // Save scroll position BEFORE any DOM manipulation
        const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        const body = document.body;
        const html = document.documentElement;

        // Add the no-doc-scroll class to html element for CSS-based locking
        html.classList.add("no-doc-scroll");

        // Save current scroll position and lock scroll
        body.style.position = "fixed";
        body.style.top = `-${scrollY}px`;
        body.style.width = "100%";
        body.style.overflow = "hidden";
        body.style.touchAction = "none";
        body.style.overscrollBehavior = "none";

        // Also lock html element for better iOS support
        html.style.overflow = "hidden";
        html.style.height = "100%";
        html.style.overscrollBehavior = "none";

        // Prevent touchmove on iOS - more aggressive approach
        let touchStartY = 0;
        let touchStartX = 0;
        let lastTouchY = 0;
        let lastTouchX = 0;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
            touchStartX = e.touches[0].clientX;
            lastTouchY = touchStartY;
            lastTouchX = touchStartX;
        };

        const preventTouchMove = (e: TouchEvent) => {
            const target = e.target as HTMLElement;
            const modalContent = target.closest("[data-modal-content]");
            const backdrop = target.closest("[data-backdrop]");

            // Always prevent backdrop scrolling
            if (backdrop) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }

            // If inside scrollable modal content, allow scrolling within bounds
            if (modalContent) {
                const element = modalContent as HTMLElement;
                const canScroll = element.scrollHeight > element.clientHeight;
                const touchY = e.touches[0].clientY;
                const touchX = e.touches[0].clientX;
                const deltaY = touchY - lastTouchY;
                const deltaX = touchX - lastTouchX;

                // Update last position
                lastTouchY = touchY;
                lastTouchX = touchX;

                // Check if scrolling vertically
                const isVerticalScroll = Math.abs(deltaY) > Math.abs(deltaX);

                if (canScroll && isVerticalScroll) {
                    const isAtTop = element.scrollTop <= 0;
                    const isAtBottom =
                        element.scrollTop + element.clientHeight >=
                        element.scrollHeight - 1;
                    const scrollingDown = deltaY < 0;
                    const scrollingUp = deltaY > 0;

                    // Allow scrolling if not at boundaries
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
                } else if (!canScroll) {
                    // Modal content cannot scroll, prevent all movement
                    e.preventDefault();
                    return;
                }
            }

            // Prevent all other touchmove events (page, etc.)
            e.preventDefault();
            e.stopPropagation();
        };

        // Use capture phase to catch events earlier
        document.addEventListener("touchstart", handleTouchStart, {
            passive: true,
            capture: true,
        });
        document.addEventListener("touchmove", preventTouchMove, {
            passive: false,
            capture: true,
        });

        // Also prevent wheel events on iOS (for devices with mouse/trackpad)
        const preventWheel = (e: WheelEvent) => {
            const target = e.target as HTMLElement;
            const modalContent = target.closest("[data-modal-content]");
            if (!modalContent) {
                e.preventDefault();
            }
        };

        document.addEventListener("wheel", preventWheel, {
            passive: false,
            capture: true,
        });

        return () => {
            // Get the saved scroll position from body.style.top
            const savedScrollY = body.style.top ? parseInt(body.style.top || "0") * -1 : scrollY;
            
            // Remove the no-doc-scroll class
            html.classList.remove("no-doc-scroll");
            
            // Restore styles
            body.style.position = "";
            body.style.top = "";
            body.style.width = "";
            body.style.overflow = "";
            body.style.touchAction = "";
            body.style.overscrollBehavior = "";
            html.style.overflow = "";
            html.style.height = "";
            html.style.overscrollBehavior = "";
            
            // Restore scroll position using requestAnimationFrame for smooth restoration
            requestAnimationFrame(() => {
                window.scrollTo(0, savedScrollY);
            });
            
            document.removeEventListener("touchstart", handleTouchStart, {
                capture: true,
            } as EventListenerOptions);
            document.removeEventListener("touchmove", preventTouchMove, {
                capture: true,
            } as EventListenerOptions);
            document.removeEventListener("wheel", preventWheel, {
                capture: true,
            } as EventListenerOptions);
        };
    }, [isVisible]);

    return (
        <div
            data-backdrop
            className={`fixed z-[40] inset-0 w-dvw h-dvh ${
                transparent ? "bg-transparent" : "bg-green/50"
            } transition-opacity duration-[1000ms] ease-in-out ${
                isVisible
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
            } ${className}`}
            onClick={onClick}
            style={
                isVisible
                    ? {
                          touchAction: "none",
                          overscrollBehavior: "none",
                      }
                    : undefined
            }
        />
    );
}
