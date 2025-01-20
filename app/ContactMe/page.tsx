'use client'
import React, { useRef } from "react";

const ScrollWithArrows: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Function to scroll left
  const scrollLeft = (): void => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  // Function to scroll right
  const scrollRight = (): void => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10"
        aria-label="Scroll Left"
      >
        &larr;
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto flex items-center scrollbar-hide scroll-smooth"
      >
        <div className="flex space-x-4 w-max">
          <div className="bg-blue-500 text-white p-6 rounded shadow-md">Item 1</div>
          <div className="bg-green-500 text-white p-6 rounded shadow-md">Item 2</div>
          <div className="bg-red-500 text-white p-6 rounded shadow-md">Item 3</div>
          <div className="bg-purple-500 text-white p-6 rounded shadow-md">Item 4</div>
          <div className="bg-yellow-500 text-white p-6 rounded shadow-md">Item 5</div>
          <div className="bg-blue-500 text-white p-6 rounded shadow-md">Item 1</div>
          <div className="bg-green-500 text-white p-6 rounded shadow-md">Item 2</div>
          <div className="bg-red-500 text-white p-6 rounded shadow-md">Item 3</div>
          <div className="bg-purple-500 text-white p-6 rounded shadow-md">Item 4</div>
          <div className="bg-yellow-500 text-white p-6 rounded shadow-md">Item 5</div>
          <div className="bg-blue-500 text-white p-6 rounded shadow-md">Item 1</div>
          <div className="bg-green-500 text-white p-6 rounded shadow-md">Item 2</div>
          <div className="bg-red-500 text-white p-6 rounded shadow-md">Item 3</div>
          <div className="bg-purple-500 text-white p-6 rounded shadow-md">Item 4</div>
          <div className="bg-yellow-500 text-white p-6 rounded shadow-md">Item 5</div>
          <div className="bg-blue-500 text-white p-6 rounded shadow-md">Item 1</div>
          <div className="bg-blue-500 text-white p-6 rounded shadow-md">Item 1</div>
          <div className="bg-green-500 text-white p-6 rounded shadow-md">Item 2</div>
          <div className="bg-red-500 text-white p-6 rounded shadow-md">Item 3</div>
          <div className="bg-purple-500 text-white p-6 rounded shadow-md">Item 4</div>
          <div className="bg-yellow-500 text-white p-6 rounded shadow-md">Item 5</div>
           <div className="bg-blue-500 text-white p-6 rounded shadow-md">Item 1</div>
          <div className="bg-green-500 text-white p-6 rounded shadow-md">Item 2</div>
          <div className="bg-red-500 text-white p-6 rounded shadow-md">Item 3</div>
          <div className="bg-purple-500 text-white p-6 rounded shadow-md">Item 4</div>
          <div className="bg-yellow-500 text-white p-6 rounded shadow-md">Item 5</div>
          <div className="bg-green-500 text-white p-6 rounded shadow-md">Item 2</div>
          <div className="bg-red-500 text-white p-6 rounded shadow-md">Item 3</div>
          <div className="bg-purple-500 text-white p-6 rounded shadow-md">Item 4</div>
          <div className="bg-yellow-500 text-white p-6 rounded shadow-md">Item 5</div>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10"
        aria-label="Scroll Right"
      >
        &rarr;
      </button>
    </div>
  );
};

export default ScrollWithArrows;
