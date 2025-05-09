import Image from "next/image";
export default function HobbyComponent(props: {
  src: string;
  alt: string;
  title: string;
  text: string;
}) {
  return (
    <div className="w-full h-96 lg:w-[550px] lg:h-[450px] relative group">
      <Image
        src={props.src}
        alt={props.alt}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="absolute inset-0 bg-slate-800/90 opacity-0 invisible flex text-secondarytext items-center justify-center flex-col transition-opacity group-hover:opacity-100 group-hover:visible h-full w-full">
        <h2 className="text-2xl transition-transform translate-y-4 group-hover:translate-y-0">
          {props.title}
        </h2>
        <p className="transition-transform translate-y-4 group-hover:translate-y-0 p-2 pl-6 text-primarytext text-lg">
          {props.text}
        </p>
      </div>
    </div>
  );
}
