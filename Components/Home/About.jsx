import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
//this uses the Section created for the Hero
import Section from "../Customs/Section";
//third party icons
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const About = () => {
  const socialLinks = [
    {
      url: "https://github.com/G-Linares",
      icon: <FaGithub className="w-5 h-5" />
    },
    {
      url: "https://www.facebook.com/gerry.linares",
      icon: <FaFacebookF className="w-5 h-5" />
    },
    {
      url: "https://www.instagram.com/g_linares_g/",
      icon: <FaInstagram className="w-5 h-5" />
    },
    {
      url: "https://www.linkedin.com/in/gerardo-linares/",
      icon: <FaLinkedin className="w-5 h-5" />
    }
  ];
  return (
    <Section id="about" className="!relative">
      <div className="flex sm:flex-row justify-center flex-col px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="w-full sm:w-1/2 mb-12 sm:mb-0"
        >
          <h1 className="title-font  sm:text-1xl text-xl mb-2 font-bold">
            <span className="text-primary">Any fool can write code </span>
            that a computer can understand.
            <br /> Good programmers write code
            <span className="text-primary ml-2">
              that humans can understand.{" "}
            </span>
          </h1>
          <p className=" capitalize leading-relaxed text-xs md:text-sm text-textSecondary dark:text-textDarkSecondary">
            - Martin Fowler
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="w-full sm:w-1/2"
        >
          <h1 className="capitalize title-font sm:text-2xl text-xl mb-2 font-semibold">
            Connect With Me
          </h1>
          <p className="leading-relaxed text-textSecondary text-xs md:text-sm dark:text-textDarkSecondary">
            I am one message away on every social media platform. You can also
            send me an email anytime, I will reply within 24 hours.
          </p>
          <div className="select-none capitalize flex my-4">
            {socialLinks.map(({ icon, url }, index) => (
              <Link href={url} key={index}>
                <div className="border-primary border-2 mr-3 mb-3 rounded-full p-2 text-primary hover:bg-primary hover:text-white transition duration-300 cursor-pointer">
                  {icon}
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
