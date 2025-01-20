import Link from "next/link";

export default function SmallRedirectButton(props: { href: string; text: string }) {
  return (
    <Link
      href={props.href}
      className="bg-primarytext text-primarybg p-1 px-4 text-lg rounded-md mr-2 font-semibold hover:bg-secondarytext"
    >
      {props.text}
    </Link>
  );
}
