/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type HorizontalCarouselProps = {
  children: React.ReactNode;
};

export default function HorizontalCarousel({ children }: HorizontalCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  const checkScrollLimits = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftBtn(scrollLeft > 10);
      // Allow a small offset margin of 5px to avoid roundings issues
      setShowRightBtn(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollLimits);
      // Run once initially
      checkScrollLimits();
      
      // Also listen to window resize to update right button visibility
      window.addEventListener("resize", checkScrollLimits);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScrollLimits);
      window.removeEventListener("resize", checkScrollLimits);
    };
  }, [children]);

  const handleScroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      // Scroll by 80% of the visible container width
      const amount = clientWidth * 0.8;
      containerRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group/carousel w-full">
      {/* Scroll Left Button */}
      {showLeftBtn && (
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-2 top-[40%] -translate-y-1/2 z-20 w-10 h-14 bg-charcoal/80 hover:bg-charcoal border border-gold/30 hover:border-gold text-gold flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer hidden md:flex"
          aria-label="Cuộn sang trái"
          id="carousel-btn-left"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Scroll Right Button */}
      {showRightBtn && (
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-2 top-[40%] -translate-y-1/2 z-20 w-10 h-14 bg-charcoal/80 hover:bg-charcoal border border-gold/30 hover:border-gold text-gold flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer hidden md:flex"
          aria-label="Cuộn sang phải"
          id="carousel-btn-right"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Slide Container (flex row, horizontal scroll) */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-smooth gap-4 md:gap-5 py-4 px-2 no-scrollbar scroll-snap-x snap-mandatory"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {React.Children.map(children, (child) => (
          <div className="snap-start shrink-0 w-[240px] sm:w-[260px] md:w-[280px]">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
