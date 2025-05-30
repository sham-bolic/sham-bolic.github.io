import Image from "next/image";
export default function Coursework() {
  return (
    <div className="p-10 bg-tertiarybg lg:px-24 h-[40%] flex flex-col">
      <h2 className="text-4xl font-semibold lg:px-24 flex justify-center mb-4">Education</h2>
      <div className="flex flex-col-reverse lg:flex-row-reverse justify-between text-white pt-4 lg:items-center pb-12">
        <div className="lg:w-[65%]">
          <h2 className="text-3xl text-secondarytext mb-2">McGill University</h2>
          <div className="text-lg">
            <h4>August 2022 - June 2026 (Expected)</h4>
            <h4>BSc Honours Computer Science</h4>
            <h4>Statistics Minor</h4>
            <p>
              Relevant Coursework: Cryptography and Data Analysis, Fundamentals
              of Machine Learning, AI, Applied Regression, Software Design,
              Statistics, Operating Systems, Honours Algorithm and Data
              Structures
            </p>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden lg:mr-4 mb-4 lg:mb-0">
          <Image
            src="/images/mcgill-university-logo.png"
            alt="mcgill-logo"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
