import React from "react";
import { motion } from "framer-motion";

import Section from "../Customs/Section";
import ServiceCard from "../Customs/ServiceCard";

//images that will be passes down to card compoenent
import dish from "../../Assets/dish.png";
import keywords from "../../Assets/keywords.png";
import cura from "../../Assets/curaDeuda.png";
import citi from "../../Assets/citi.png";

const Services = () => {
  const data = [
    {
      title: "Dish",
      description: "QA Engineer",
      icon: dish
    },
    {
      title: "Keywords Studios",
      description: "Player Support Agent",
      icon: keywords
    },
    {
      title: "Cura Deuda",
      description: "Full Stack Developer",
      icon: cura
    },
    {
      title: "Citi (Altimetrik)",
      description: "Full Stack Developer",
      icon: citi
    }
  ];

  return (
    <Section
      id="services"
      title="- Experience -"
      description="Throughout my career as a developer I have worked or colaborated with the following companies."
      subtitle="My Previous Employment History"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex flex-wrap justify-center items-center"
      >
        {data.map(({ title, description, icon }, index) => (
          <ServiceCard
            key={index}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </motion.div>
    </Section>
  );
};

export default Services;
