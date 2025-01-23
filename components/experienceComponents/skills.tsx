import SkillComponent from "./skillComponent";
import { BiLogoJava } from "react-icons/bi";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiR,
  SiHtml5,
  SiGnometerminal,
  SiGithub,
  SiMysql,
  SiGnubash,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiDjango,
  SiMui,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiPlotly
} from "react-icons/si";
export default function Skills() {
  return (
    <div className="bg-secondarybg mt-16 rounded-b-half">
      <h1 className="text-center text-4xl font-semibold pt-4">Skills</h1>
      <div className="flex flex-col pb-8">
        <SkillComponent
          title="Programming Languages / Tools"
          skills={[
            {
              skill: "Python",
              icon: SiPython,
            },
            {
              skill: "Java",
              icon: BiLogoJava,
            },
            {
              skill: "JavaScript",
              icon: SiJavascript,
            },
            {
              skill: "TypeScript",
              icon: SiTypescript,
            },
            {
              skill: "C",
              icon: SiC,
            },
            {
              skill: "C++",
              icon: SiCplusplus,
            },
            {
              skill: "R",
              icon: SiR,
            },
            {
              skill: "HTML/CSS",
              icon: SiHtml5,
            },
            {
              skill: "Unix",
              icon: SiGnometerminal,
            },
            {
              skill: "Git",
              icon: SiGithub,
            },
            {
              skill: "MySQL",
              icon: SiMysql,
            },
            {
              skill: "Bash",
              icon: SiGnubash,
            },
          ]}
        />
        <SkillComponent
          title="Full-Stack Dev / Mobile Dev"
          skills={[
            {
              skill: "ReactJS",
              icon: SiReact,
            },
            {
              skill: "Next.js",
              icon: SiNextdotjs,
            },
            {
              skill: "TailwindCSS",
              icon: SiTailwindcss,
            },
            {
              skill: "ReactNative",
              icon: SiReact,
            },
            {
              skill: "DjangoRestAPI",
              icon: SiDjango,
            },
            {
              skill: "MUI",
              icon: SiMui,
            },
          ]}
        />
        <SkillComponent
          title="Data Science / Machine Learning"
          skills={[
            {
              skill: "Pytorch",
              icon: SiPytorch,
            },
            {
              skill: "Numpy",
              icon: SiNumpy,
            },
            {
              skill: "Pandas",
              icon: SiPandas,
            },
            {
              skill: "Scikit-learn",
              icon: SiScikitlearn,
            },
            {
              skill: "Matplotlib",
              icon: SiPlotly,
            },
          ]}
        />
      </div>
    </div>
  );
}
