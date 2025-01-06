import Navbar from "@/components/navbar";
import Bio from "@/components/bio";
import Coursework from "@/components/coursework";

export default function Home() {
  return (
    <div className="h-[100%]">
      <Navbar></Navbar>
      <Bio></Bio>
      <Coursework></Coursework>
    </div>
  );
}
