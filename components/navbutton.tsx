"use client";
import Link from "next/link";

export default function NavButton(props: { name: string }) {
  const name = props.name.replace(/\s/g, "");
  let href = name == "Max." ? '/' : `/${name}`
  
  return (
    <Link
      href={href}
      id={`${name}`}
      className={`hover:text-secondarytext`}
    > 
      {props.name}
    </Link>
  );
}
