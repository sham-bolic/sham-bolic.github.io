"use client";
import NavButton from "./navbutton";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex w-full justify-between text-primarytext bg-secondarybg py-4 px-6 lg:px-24 sticky top-0 z-10 ">
      <div className="flex item-center justify-center ">
        <h2 className="font-semibold  text-3xl items-center flex">
          <NavButton name="Max."></NavButton>
        </h2>
      </div>
      <div className="hidden lg:flex justify-between w-[40%] text-lg">
        <NavButton name="About Me" />
        <NavButton name="Experience" />
        <NavButton name="Contact Me" />
      </div>
      <div className="flex justify-end align-top">
        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
        {isOpen && (
            <div className="absolute top-16 right-0 py-2 bg-tertiarybg flex flex-col text-2xl items-center justify-center w-screen rounded-b-3xl">
              <NavButton name="About Me" />
              <NavButton name="Experience" />
              <NavButton name="Contact Me" />
              </div>
              )}
      </div>
    </nav>
  );
}
