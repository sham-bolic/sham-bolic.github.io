import Image from "next/image";
import SmallRedirectButton from "../smallRedirectButton";
export default function ProjectComponent(props: {
  title: string;
  description: string;
  image: string;
  repo?: string;
  devpost?: string;
  demo?: string;
}) {
  
  return (
    <div className="flex flex-col h-fit w-[400px] bg-secondarybg rounded-3xl p-4 m-4 items-center">
      <div className="rounded-full overflow-hidden w-[300px] h-[300px] relative">
        <Image src={props.image} alt="project" fill={true}/>
      </div>
      <div className="flex flex-col items-center pt-2">
        <h2 className="text-2xl text-secondarytext">{props.title}</h2>
        <p className="text-lg text-primarytext">{props.description}</p>
      </div>
      <div className="py-4 relative bottom-0">
        {props.repo && <SmallRedirectButton href={props.repo} text="Code"></SmallRedirectButton>}
        {props.devpost && <SmallRedirectButton href={props.devpost} text="Devpost"></SmallRedirectButton>}
        {props.demo && <SmallRedirectButton href={props.demo} text="Demo"></SmallRedirectButton>}
      </div>
    </div>
  );
}
