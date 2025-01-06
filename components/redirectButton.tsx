import Link from "next/link";

export default function RedirectButton(props: { href: string; text: string }) {
  return (
    <Link
      href={props.href}
      className="bg-primarytext text-primarybg p-2 px-6 text-xl rounded-md mt-8 mr-8 font-semibold hover:bg-secondarytext"
    >
      {props.text}
    </Link>
  );
}
