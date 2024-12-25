"use client";
import Link from "next/link";

export default function NavButton(props: { name: string }) {
  const name = props.name.replace(/\s/g, "");

  return (
    <Link
      href={`/${name}`}
      id={`${name}`}
      className={`hover:text-secondarytext`}
    > 
      {props.name}
    </Link>
  );
}
