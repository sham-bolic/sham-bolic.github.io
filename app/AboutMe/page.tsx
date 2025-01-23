import Navbar from "@/components/navbar";
import Hobbies from "@/components/aboutMeComponents/hobbies";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-secondarybg text-primarytext px-24 py-4 flex items-center justify-between mt-16 rounded-b-half pb-8">
        <div className="w-[60%]">
          <h1 className="text-4xl font-semibold">About Me</h1>
          <p className="pt-4 text-lg">
            Since a young age, I have always believed in a growth mindset even
            before I knew what it was. I would always be frustrated when those
            around me would say &quot;I wasn&apos;t meant for this&quot;, when they
            simply have not put in the effort as a result of their mentality. I
            understand that there are times when things are out of our control,
            but I believe that with enough effort and proper direction there
            will be some sort of result. I am addicted to the feeling of
            improving, be it physically, mentally or emotionally, and I try to
            find the most efficient way to do so. I may not have all the
            qualifications that you may be looking for, but I am confident that
            I can learn and adapt to any situation that I am put in.
          </p>
        </div>
        <div className="flex justify-center w-[40%] pb-4 px-4">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/images/growthmindset.jpg"
              alt="growthmindset"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
      <div className="pb-10 pt-4">
        <h2 className="text-3xl font-semibold px-24 py-8 flex justify-center">
          Hobbies and Interests
        </h2>
        <Hobbies></Hobbies>
      </div>
    </div>
  );
}
