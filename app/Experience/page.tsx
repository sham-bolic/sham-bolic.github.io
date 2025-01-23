import Navbar from "@/components/navbar";
import Projects from "@/components/experienceComponents/projects";
import Skills from "@/components/experienceComponents/skills";
import WorkExperience from "@/components/experienceComponents/workExperience";

export default function Experience(){
  return (
    <div>
      <Navbar></Navbar>
      <Skills></Skills>
      <Projects></Projects>
      <WorkExperience></WorkExperience>
    </div>
  )
}