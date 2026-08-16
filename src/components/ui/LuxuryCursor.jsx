import React, { useEffect, useState } from "react";

export function LuxuryCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isHovered, setIsHovered] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const onMouseDown = () => setIsClicking(true);
        const onMouseUp = () => setIsClicking(false);

        const onMouseLeave = () => setIsVisible(false);
        const onMouseEnter = () => setIsVisible(true);

        const handleMouseOver = (e) => {
            const target = e.target;
            const isInteractive =
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.classList.contains("interactive") ||
                target.getAttribute("role") === "button";

            setIsHovered(!!isInteractive);
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseover", handleMouseOver);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">

            <div
                className="fixed top-0 left-0 pointer-events-none"
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                }}
            >
                <div
                    className={`-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border transition-all duration-300 ease-out ${isHovered
                            ? "scale-125 border-amber-400 bg-transparent shadow-[0_0_20px_rgba(245,158,11,0.35)]"
                            : isClicking
                                ? "scale-75 border-amber-500 bg-amber-500/20"
                                : "scale-100 border-amber-500/40 bg-transparent shadow-[0_0_10px_rgba(245,158,11,0.15)]"
                        }`}
                />
            </div>

            <div
                className="fixed top-0 left-0 pointer-events-none"
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                }}
            >
                <div
                    className={`-translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b] transition-all duration-150 ease-out ${isHovered
                            ? "scale-75 bg-amber-400 opacity-80"
                            : isClicking
                                ? "scale-50"
                                : "scale-100"
                        }`}
                />
            </div>

        </div>
    );
}