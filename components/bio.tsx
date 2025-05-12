"use client";
import Image from "next/image";
import RedirectButton from "./redirectButton";
import { useState, useEffect, useRef } from "react";

export default function Bio() {
  const typingEffect = ({
    text,
    typingSpeed = 100,
  }: {
    text: string;
    typingSpeed?: number;
  }) => {
    const [displayedText, setDisplayText] = useState("");

    useEffect(() => {
      setDisplayText("");

      if (!text) {
        return;
      }

      let currentIndex = 0;
      let timeoutId: NodeJS.Timeout | undefined;

      const nextChar = () => {
        if (currentIndex < text.length-1) {
          setDisplayText((prev) => prev + text[currentIndex]);
          currentIndex++;
          timeoutId = setTimeout(nextChar, typingSpeed);
        }
      };

      nextChar();

      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }, [text, typingSpeed]);

    return displayedText;
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center p-8 bg-secondarybg lg:px-24 rounded-b-half pb-16">
      <div className="lg:w-[60%] flex flex-col items-start">
        <div className="flex text-3xl ">
          <h1 className="text-primarytext">
            {typingEffect({ text: "H i, I'm Maximillian Fong" })}
          </h1>
          <h1 className="text-secondarytext animate-blink"> |</h1>
        </div>
        <h3 className="text-2xl pt-2 text-secondarytext">
          U3 Honors Computer Science Major, Statistics minor
        </h3>
        <p className="pt-4 text-lg">
          I am a third-year Computer Science student at McGill University,
          pursuing an Honors degree with a minor in Statistics. With a strong
          foundation in full-stack development and machine learning, I
          specialize in creating scalable applications and extracting insights
          from data. My technical expertise includes ReactJS, TypeScript,
          Next.js, Python, and R, alongside hands-on experience in data science
          and AI projects. I am passionate about leveraging technology to solve
          real-world problems and am eager to contribute to innovative teams in
          the fields of software development, machine learning, and data
          science.
        </p>
        <div className="flex w-full justify-between lg:justify-normal">
          <RedirectButton href="/ContactMe" text="Let's Talk"></RedirectButton>
          <RedirectButton
            href="/files/CV_MaximillianFong.pdf"
            text="Resume"
          ></RedirectButton>
        </div>
      </div>
      <div className="lg:w-[50%] flex items-center justify-center">
        <div className="rounded-full overflow-hidden lg:h-96 lg:w-96 h-72 w-72 mb-5 lg:mb-0">
          <Image
            className="relative bottom-5"
            src="/images/headshot.jpg"
            alt="headshot"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
