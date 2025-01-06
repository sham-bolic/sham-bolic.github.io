import Image from "next/image";
export default function ProjectComponent(props: {
  title: string;
  description: string;
  image: string;
  repo: string;
  devpost?: string;
}) {
  return (
    <div className="flex flex-col h-[650px] w-[350px] bg-secondarybg rounded-3xl p-4 m-4 items-center ">
      <div className="rounded-3xl overflow-hidden">
        <Image src={props.image} alt="project" width={300} height={300} />
      </div>
      <div className="flex flex-col items-center pt-2">
        <h2 className="text-2xl text-secondarytext">{props.title}</h2>
        <p className="text-lg text-primarytext">{props.description}</p>
      </div>
    </div>
  );
}
