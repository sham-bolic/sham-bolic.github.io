import NavButton from "./navbutton";

export default function Navbar() {

  return (
    <nav className="flex w-full justify-between text-primarytext bg-secondarybg py-4 px-24">
      <div className="flex item-center justify-center ">
        <h2 className="font-semibold  text-2xl">
            <NavButton name="Max."></NavButton></h2>
      </div>
      <div className="flex justify-between w-[60%]">
        <NavButton name="About Me" />
        <NavButton name="Projects" />
        <NavButton name="Experience" />
        <NavButton name="Skills" />
        <NavButton name="Contact Me" />
      </div>
    </nav>
  );
}
