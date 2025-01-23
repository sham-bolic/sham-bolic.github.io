import NavButton from "./navbutton";

export default function Navbar() {

  return (
    <nav className="flex w-full justify-between text-primarytext bg-secondarybg py-4 px-24 fixed top-0 z-10">
      <div className="flex item-center justify-center ">
        <h2 className="font-semibold  text-3xl">
            <NavButton name="Max."></NavButton></h2>
      </div>
      <div className="flex justify-between w-[50%] lg:w-[40%] text-lg">
        <NavButton name="About Me" />
        <NavButton name="Experience" />
        <NavButton name="Contact Me" />
      </div>
    </nav>
  );
}
