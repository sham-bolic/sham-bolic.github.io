import Link from "next/link";

export default function ContactComponent(props: { name: string; icon: any, link: string }) {
  const ComponentIcon = props.icon;
  return (
    <Link 
    href={props.link}
    className="flex flex-col items-center hover:text-secondarytext hover:cursor-pointer" >
      <ComponentIcon size={40} />
      {props.name}
    </Link>
  );
}
