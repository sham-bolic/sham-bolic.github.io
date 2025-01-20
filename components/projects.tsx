"use client";
import ProjectComponent from "./projectComponent";
import { useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  function scroll(direction: string) {
    if (scrollRef.current) {
      const distance = direction == "left" ? -400 : 400;
      scrollRef.current.scrollBy({
        left: distance,
        behavior: "smooth",
      });
    }
  }

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold py-4">Projects</h1>
      <div className="flex items-center">
        <button
          onClick={() => scroll("left")}
          className="bg-gray-800 text-white p-2 rounded-full shadow-md h-16 w-16"
          aria-label="Scroll Left"
        >
          <FaArrowLeft size={50}></FaArrowLeft>
        </button>
        <div
          className="overflow-x-auto snap-x snap-mandatory mx-10"
          ref={scrollRef}
        >
          <div className="flex space-x-4 w-max">
            <ProjectComponent
              title="Meal Mates"
              description="Develop a full-stack mobile app - MealMates - that allows users to swipe through food images from restaurants near them and curate a list of interested restaurants as well as match with friends on similar restaurants to try out together. The frontend uses React-Nave and the backend is developed with Django-rest and SQLite3 database."
              image="/images/mealmates.png"
              repo="https://github.com/denis-tsariov/codejam14"
              devpost="https://devpost.com/software/fooder-zx98kt"
            ></ProjectComponent>
            <ProjectComponent
              title="Time Wise"
              description="This calendar app goes beyond traditional scheduling by offering an intelligent auto-scheduling feature. It analyzes your availability, priorities, and preferences to automatically arrange tasks, meetings, and events in the most efficient way possible. Created using NextJS and ReactJS as well as DrizzleDB"
              image="/images/mealmates.png"
              repo="https://github.com/denis-tsariov/codejam14"
              devpost="https://devpost.com/software/fooder-zx98kt"
            ></ProjectComponent>
            <ProjectComponent
              title="Meal Mates"
              description="Develop a full-stack mobile app - MealMates - that allows users to swipe through food images from restaurants near them and curate a list of interested restaurants as well as match with friends on similar restaurants to try out together. The frontend uses React-Nave and the backend is developed with Django-rest and SQLite3 database."
              image="/images/mealmates.png"
              repo="https://github.com/denis-tsariov/codejam14"
              devpost="https://devpost.com/software/fooder-zx98kt"
            ></ProjectComponent>
            <ProjectComponent
              title="Meal Mates"
              description="Develop a full-stack mobile app - MealMates - that allows users to swipe through food images from restaurants near them and curate a list of interested restaurants as well as match with friends on similar restaurants to try out together. The frontend uses React-Nave and the backend is developed with Django-rest and SQLite3 database."
              image="/images/mealmates.png"
              repo="https://github.com/denis-tsariov/codejam14"
              devpost="https://devpost.com/software/fooder-zx98kt"
            ></ProjectComponent>
          </div>
        </div>
        <button
          onClick={() => scroll("right")}
          className="bg-gray-800 text-white p-2 rounded-full shadow-md h-16 w-16"
          aria-label="Scroll Right"
        >
          <FaArrowLeft size={50} className="rotate-180"></FaArrowLeft>
        </button>
      </div>
    </div>
  );
}
