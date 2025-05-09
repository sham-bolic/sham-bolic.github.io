import Navbar from "@/components/navbar";
import ContactComponent from "@/components/contactComponents/contactComponent";
import Image from "next/image";
import { SiDevpost, SiGithub, SiLinkedin } from "react-icons/si";
import { MdOutlineMailOutline, MdSmartphone } from "react-icons/md";

export default function ContactMe() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="bg-secondarybg rounded-b-full lg:mt-16 lg:p-20 p-10 flex justify-center flex-col items-center w-full">
        <h1 className="font-bold text-6xl">Contact me</h1>
        <p className="mt-8 text-primarytext lg:w-1/3 text-center pb-14">
          Want to get in touch with me regarding any opportunities? Below are
          all the possible ways to reach out to me!
        </p>
      </div>
      <div className="flex items-center justify-center lg:w-1/2 lg:justify-between pt-8 flex-wrap">
        <div className="flex flex-col justify-center items-center mb-8">
          <h3 className="font-semibold text-3xl text-primarytext">
            Maximillian Fong
          </h3>
          <h4 className="flex items-center text-xl py-2">
            <MdSmartphone className="mr-2"></MdSmartphone>
            (514) 814-4339
          </h4>
          <h4 className="flex items-center text-xl pb-4">
            <MdOutlineMailOutline className="mr-2"></MdOutlineMailOutline>
            fongcymax@gmail.com
          </h4>
          <div className="flex justify-between w-full">
            <ContactComponent
              name="LinkedIn"
              icon={SiLinkedin}
              link="https://www.linkedin.com/in/maximillian-fong-8b8577294/"
            ></ContactComponent>
            <ContactComponent
              name="Github"
              icon={SiGithub}
              link="https://github.com/sham-bolic"
            ></ContactComponent>
            <ContactComponent
              name="Devpost"
              icon={SiDevpost}
              link="https://devpost.com/sham-bolic?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
            ></ContactComponent>
          </div>
        </div>
        <div className="border h-72 w-0 border-white hidden lg:block"></div>
        <div className="relative w-80 h-80 rounded-full overflow-hidden">
          <Image
            src="/images/contactphoto.jpg"
            alt="contact photo"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
