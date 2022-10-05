import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";
import { HiDownload, HiEye } from "react-icons/hi";

import Section from "../Customs/Section";

const Hero = () => {
  const typingElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingElement.current, {
      // Strings to display
      strings: [
        "Front-End Developer",
        "Back-End Developer",
        "Full-Stack Developer"
      ],
      // Speed settings, try diffrent values untill you get good results
      startDelay: 1000,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  //I found the Section custom component online, this was to wrap the whole componenet and only add the content to it, it can be reused
  return (
    <Section
      id="intro"
      className="relative !h-full !py-10 md:!py-20 overflow-x-clip"
    >
      <div className="flex flex-row justify-between items-center flex-wrap-reverse p-2">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex-grow text-center lg:text-start  w-1/2"
        >
          <h1 className="title-font sm:text-4xl text-2xl mb-2 font-bold ">
            Hi 👋, my name is Gerardo
          </h1>

          <h3 className="text-xl mt-1 opacity-90 font-normal">
            I&apos;m a <span ref={typingElement}></span>
          </h3>
          <div className="w-24 h-1 bg-primary bg-opacity-70 mt-6 mb-4">
            <div className="w-10 h-1 bg-primary"></div>
          </div>
          <p className="mb-6 mt-2 xl:w-[80%] leading-relaxed text-textPrimary font-medium dark:text-textDarkSecondary opacity-70 text-xs md:text-sm">
            Nice to meet you! I am a Full Stack Web Developer located in
            Morelos, Mexico. I have been working as a Developer for the last 4
            years, even though I started my programming Journey In 2016. I am
            specialized in converting pixel-perfect web pages with 100% Mobile
            responsiveness. I currently work at Altimetrik.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start">
            <div>
              <Link href="https://drive.google.com/file/d/16f48Ca8Ma1keO3nAezFqHL1yzk1LWegx/view?usp=sharing">
                <button
                  type="button"
                  className="outline-none text-xs md:text-sm text-white bg-gradient-to-r from-primary/80 via-secondary/60 to-secondary/80 hover:from-primary hover:via-secondary/80 hover:to-secondary transition-all duration-300 font-medium rounded-lg text-md opacity-90 hover:opacity-100 py-2.5 px-4 text-center mr-2 mb-3 flex justify-center items-center"
                >
                  <HiDownload className="mr-2 w-5 h-5" />
                  Download CV
                </button>
              </Link>
            </div>
            <div>
              <button
                onClick={() =>
                  document
                    .querySelector("#work")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="relative inline-flex items-center  justify-center p-0.5 mb-3 mr-2 overflow-hidden text-xs md:text-sm font-medium  rounded-lg group bg-gradient-to-br from-primary/80 via-secondary/60 to-secondary/80 group-hover:from-primary group-hover:via-secondary/80 group-hover:to-secondary hover:text-white dark:text-white outline-none"
              >
                <span className="relative text-primary flex justify-center items-center hover:text-white px-5 py-2.5 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <HiEye className="mr-2 w-5 h-5 transition-none" />
                  View Projects
                </span>
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-6 mx-auto text-center select-none relative"
        >
          <Image
            className="object-cover object-center rounded-xl rounded-tl-[200px] z-10 "
            alt="not found"
            width={550}
            height={400}
            src="https://lh3.googleusercontent.com/kob2NyVVwpNFnvxPuC7De_INuVoHzC-nJjlt3v-IyGL__-4vM_AhSu0wLcfFPvJfkrI=w2400"
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
