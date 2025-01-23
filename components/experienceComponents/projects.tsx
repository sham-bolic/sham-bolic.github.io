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

  const path = "/images/projects/"

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold py-4">Projects</h1>
      <div className="flex items-center">
        <button
          onClick={() => scroll("left")}
          className="bg-gray-800 text-white p-2 rounded-full shadow-md h-16 w-16 ml-8"
          aria-label="Scroll Left"
        >
          <FaArrowLeft size={50}></FaArrowLeft>
        </button>
        <div
          className="snap-x snap-mandatory mx-10 scroll overflow-x-auto"
          ref={scrollRef}
        >
          <div className="flex space-x-4 w-max">
            <ProjectComponent
              title="Meal Mates"
              description="Develop a full-stack mobile app - MealMates - that allows users to swipe through food images from restaurants near them and curate a list of interested restaurants as well as match with friends on similar restaurants to try out together. The frontend uses React-Nave and the backend is developed with Django-rest and SQLite3 database."
              image={path + "mealmates.png"}
              repo="https://github.com/denis-tsariov/codejam14"
              devpost="https://devpost.com/software/fooder-zx98kt"
              demo="https://www.youtube.com/shorts/2nAD9EJrNGw"
            ></ProjectComponent>
            <ProjectComponent
              title="Time Wise"
              description="This calendar app goes beyond traditional scheduling by offering an intelligent auto-scheduling feature. It analyzes your availability, priorities, and preferences to automatically arrange tasks, meetings, and events in the most efficient way possible. Created using NextJS and ReactJS as well as DrizzleDB"
              image={path + "timewise.jpg"}
              repo="https://github.com/denis-tsariov/bcv"
              demo="https://bcv.vercel.app/"
            ></ProjectComponent>
            <ProjectComponent
              title="BetterCV - AI Generated CV"
              description="Developed a web app that generates job-specific CVs using AI to analyze job descriptions and rank user-provided skills and experiences. Built with React, TypeScript, Tailwind CSS, Drizzle ORM, and Postgres, the platform integrates Gemini AI for intelligent content selection, creating tailored, visually appealing CVs to help users stand out in the job market."
              image={path + "bettercv.png"}
              repo="https://github.com/denis-tsariov/codejam14"
              devpost="https://devpost.com/software/bcv-hackmcwics25"
              demo="https://www.youtube.com/watch?v=TeJMOojokRM"
            ></ProjectComponent>
            <ProjectComponent
              title="Mini OS"
              description="Designed and implemented a toy operating system with virtual memory management in C, including page replacement policies. Developed support for various scheduling policies to optimize program execution and integrated multithreading functionality using pthreads, providing a hands-on understanding of OS-level resource management and process coordination."
              image={path + "operating-system-t.jpg"}
            ></ProjectComponent>
            <ProjectComponent
              title="AI Agent of Colosseum Game"
              description="Developed an AI agent for the Colosseum game, incorporating custom heuristics to evaluate and navigate game states effectively. Implemented a Monte Carlo Search Tree combined with Multi-Armed Bandits to explore possible actions and determine the most optimal moves, enhancing strategic decision-making and gameplay performance."
              image={path + "Artificial-Intelligence.jpg"}
              repo="https://github.com/sham-bolic/AI_Final_Proj"
            ></ProjectComponent>
            <ProjectComponent
              title="Digit Recognition CNN"
              description="Developed a convolutional neural network achieving over 86.57% test accuracy by leveraging advanced techniques such as batch normalization, data augmentation, and stochastic gradient descent. These methods were implemented to prevent overfitting, improve generalization, and optimize model performance for reliable predictions."
              image={path + "cnn.jpg"}
              repo="https://github.com/sham-bolic/number_classification_cnn"
            ></ProjectComponent>
          </div>
        </div>
        <button
          onClick={() => scroll("right")}
          className="bg-gray-800 text-white p-2 rounded-full shadow-md h-16 w-16 mr-8"
          aria-label="Scroll Right"
        >
          <FaArrowLeft size={50} className="rotate-180"></FaArrowLeft>
        </button>
      </div>
    </div>
  );
}
