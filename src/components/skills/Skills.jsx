import React from "react";
import SkillBox from "../../chip/SkillBox";
import {
  SiMongodb,
  SiExpress,
  SiHtml5,
 
  SiNodedotjs,
  SiReact,
  SiJavascript,
  SiTailwindcss,
 SiMaterialdesign,
  
  SiCss3,
  
} from "react-icons/si";
import { FaGit } from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      icon: < SiReact/>,
      black: "white",
      white: "black",
      skill: "React Js",
    },
    {
      icon: <SiHtml5 />,
      black: "white",
      white: "black",
      skill: "HTML5",
    },
    {
      icon: <SiExpress />,
      black: "black",
      white: "white",
      skill: "Express Js",
    },
    {
      icon: <SiNodedotjs />,
      black: "black",
      white: "white",
      skill: "Node Js",
    },
    {
      icon: <SiMongodb />,
      black: "black",
      white: "white",
      skill: "MongoDB",
    },
    {
      icon: <SiJavascript />,
      black: "white",
      white: "black",
      skill: "Javascript",
    },
    {
      icon: <SiTailwindcss />,
      black: "white",
      white: "black",
      skill: "Tailwind",
    },
    {
      icon: <SiMaterialdesign/>,
      black: "white",
      white: "black",
      skill: "Material UI",
    },
    {
      icon: <SiCss3 />,
      black: "white",
      white: "black",
      skill: "CSS",
    },
    {
      icon: <FaGit />,
      black: "white",
      white: "black",
      skill: "Git",
    },
  ];

  return (
    <div id="skills">
      <div className="container mx-auto mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">My Skills</h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content */}
        <div className="flex md:flex-col">
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-start">
            <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-5 gap-10 ">
              {skills.map((skill, index) => (
                <SkillBox
                  key={index}
                  logo={skill.icon}
                  black={skill.black}
                  white={skill.white}
                  skill={skill.skill}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
