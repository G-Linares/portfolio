import React from "react";
import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaGit,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaDocker,
  FaSass,
  FaJenkins,
  FaAws
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiDjango
} from "react-icons/si";
import { DiMysql, DiMongodb } from "react-icons/di";

const Technologies = () => {
  const data = [
    {
      name: "Node JS",
      icon: (
        <FaNodeJs className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />
      )
    },
    {
      name: "React JS",
      icon: (
        <FaReact className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />
      )
    },
    {
      name: "JavaScript",
      icon: (
        <FaJs className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />
      )
    },
    {
      name: "Typescript",
      icon: (
        <SiTypescript className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />
      )
    },
    {
      name: "Express",
      icon: (
        <SiExpress className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />
      )
    },
    {
      name: "HTML",
      icon: (
        <FaHtml5 className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />
      )
    },
    {
      name: "CSS",
      icon: (
        <FaCss3Alt className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />
      )
    },
    {
      name: "Sass",
      icon: (
        <FaSass className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />
      )
    },
    {
      name: "TailwindCss",
      icon: (
        <SiTailwindcss className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />
      )
    },
    {
      name: "Python",
      icon: (
        <FaPython className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />
      )
    },
    {
      name: "DJango",
      icon: (
        <SiDjango className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />
      )
    },
    {
      name: "Git",
      icon: (
        <FaGit className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />
      )
    },
    {
      name: "Docker",
      icon: (
        <FaDocker className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />
      )
    },
    {
      name: "MySQL",
      icon: (
        <DiMysql className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />
      )
    },
    {
      name: "MongoDB",
      icon: (
        <DiMongodb className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />
      )
    },
    {
      name: "Jenkins",
      icon: (
        <FaJenkins className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />
      )
    },
    {
      name: "AWS",
      icon: (
        <FaAws className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />
      )
    }
  ];
  return (
    <section
      id="technologies"
      className="bg-paper/80 dark:bg-paperDark/80 py-12 px-10 body-font"
    >
      <div className=" w-full md:w-[60%] mx-auto mb-10 text-center">
        <h2 className="text-2xl font-bold mb-3">- Technologies -</h2>
        <p className="text-sm w-[80%] mx-auto text-textSecondary dark:text-textDarkSecondary font-medium">
          Here are the technologies that I can comfortably say I can work with.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mx-auto flex md:flex-row-reverse flex-col-reverse justify-center items-center"
      >
        <div className="flex justify-center items-center flex-wrap max-w-[420px] m-auto">
          {data.map(({ icon }, index) => (
            <div
              key={index}
              className="border-[3px] cursor-pointer transition duration-300 border-primary p-2 m-2 rounded-full group hover:text-primary group-hover:text-white hover:bg-primary"
            >
              <div className="w-[35px] h-[35px] ">{icon}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Technologies;
