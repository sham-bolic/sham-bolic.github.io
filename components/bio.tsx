import Image from "next/image";
import RedirectButton from "./redirectButton";
export default function Bio() {
  return (
    <div className="flex flex-row justify-between items-center p-10 bg-secondarybg px-24">
      <div className="w-[60%] flex flex-col items-start">
        <h1 className="text-3xl text-primarytext">Hi, I&apos;m Maximillian Fong,</h1>
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
        <div className="flex">
          <RedirectButton href="/ContactMe" text="Let's Talk"></RedirectButton>
          <RedirectButton href="/files/CV_MaximillianFong.pdf" text="Resume"></RedirectButton>
        </div>
      </div>
      <div className="w-[50%] flex items-center justify-center">
        <div className="rounded-full overflow-hidden h-96 w-96">
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
