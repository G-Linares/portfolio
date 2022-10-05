import React from "react";

import { motion } from "framer-motion";

import Masonry from "react-masonry-css";
import Section from "../Customs/Section";
import WorkCard from "../Customs/WorkCard";
//this image is temporary until I take screenshots of my projects
import thumbnail from "../../Assets/thumbnail.png";

const Work = () => {
  //this are the categories that will be stored under the category prop with the work object
  const categories = [
    {
      name: "React JS",
      slug: "react-js"
    },
    {
      name: "Typescript",
      slug: "typescript"
    },
    {
      name: "Tailwind CSS",
      slug: "tailwind-css"
    },
    {
      name: "Node JS",
      slug: "node-js"
    },
    {
      name: "MERN Stack",
      slug: "mern-stack"
    },
    {
      name: "JAM Stack",
      slug: "jam-stack"
    }
  ];
  //this array is the data that will be displayed
  const works = [
    {
      thumbnail: thumbnail,
      title: "Cripto Crane",
      description:
        "Find everything about the cripto coins around the world. Here I used an API to calculate prices, see trading costs, gas fees and estimate future prices, as well as general information about the coin",
      status: 2,
      categories: [categories[4], categories[0], categories[3]],
      demoURL: "#demo",
      codeURL: "#code"
    },
    {
      thumbnail: thumbnail,
      title: "Gym App",
      description:
        "Creacted a web app to take to the gym. Here you will fin all about exercises, muscle types and workouts overall. I created the client side to consume a 3 RapidAPI API's,",
      status: 2,
      categories: [categories[1], categories[2], categories[3]],
      demoURL: "#demo",
      codeURL: "#code"
    },
    {
      thumbnail: thumbnail,
      title: "Full Stack Ecommerce Site",
      description:
        "Created a restaurant e-commerce site where you can log-in, add items to the cart, pay and checkout. I made the full stack and used multiple technologies. I also created an admin dashboard panel to manage all items and stocks",
      status: 2,
      categories: [categories[0], categories[2], categories[4], categories[3]],
      demoURL: "#demo",
      codeURL: "#code"
    },
    {
      thumbnail: thumbnail,
      title: "Payment procesing app",
      description:
        "This app will allow you to pay to an e-commerce with real debit or credit cards or cripto coins, this is only the server side, but client side will be built eventually.",
      status: 1,
      categories: [categories[1], categories[3]],
      demoURL: "#demo",
      codeURL: "https://github.com/G-Linares/backProject"
    },
    {
      thumbnail: thumbnail,
      title: "Discord Node Bot",
      description:
        "This bot will process multiple commands from the client at the same time, it created for the sole reason to manage my personal discord server, for example wipe spam messages, create anounces, ban people, etc.",
      status: 3,
      categories: [categories[3]],
      demoURL: "#demo",
      codeURL: "https://github.com/G-Linares/nodeBot"
    }
  ];
  const [category, setCategory] = React.useState("all");
  const [filteredWorks, setFilteredWorks] = React.useState([]);
  const [animateCard, setAnimateCard] = React.useState({ y: 0, opacity: 1 });

  React.useEffect(() => {
    setFilteredWorks(works);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //this will filter all the prokects I've worked on
  const handleWorkFilter = (category) => {
    setCategory(category);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (category === "all") {
        setFilteredWorks(works);
      } else {
        let workList = [];
        works.forEach((work) => {
          let workCategories = [];
          work.categories.forEach((category) =>
            workCategories.push(category.slug)
          );
          if (workCategories.includes(category)) {
            workList.push(work);
          }
        });
        setFilteredWorks(workList);
      }
    }, 400);
  };
  // changing the name to Projects section
  return (
    <Section
      id="work"
      title="- Projects -"
      description="Here you will find information and a demo of my personal projects that I've been working in the last 3 years"
      subtitle="All my personal projects from the last 3 years"
      className="!pb-14 md:!pb-28"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex items-center m-auto flex-col text-center w-full mb-10"
      >
        <ul className="flex flex-wrap justify-center text-sm font-medium text-center">
          {[{ name: "All", slug: "all" }, ...categories].map((ct, index) => (
            <li className="m-1 mb-1" key={index}>
              <div
                onClick={() => {
                  handleWorkFilter(ct.slug);
                }}
                className={` inline-block shadow-normal py-2.5 px-5 cursor-pointer rounded-full transition-all duration-300 text-textPrimary dark:text-textDarkPrimary bg-paper dark:bg-paperDark hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white  ${
                  ct.slug == category && "!text-white !bg-primary"
                }`}
              >
                {ct.name}
              </div>
            </li>
          ))}
        </ul>
      </motion.div>

      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
        className="flex flex-wrap"
      >
        {filteredWorks.map((work, index) => (
          <motion.div
            key={index}
            animate={animateCard}
            transition={{ duration: 0.4, delayChildren: 0.4 }}
          >
            <WorkCard {...work} />
          </motion.div>
        ))}
      </Masonry>
    </Section>
  );
};

export default Work;
