import React from "react";

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
      description:
        "QA Engineer. I focused on finding bugs, issues or oportunity areas before releasing the product.",
      icon: dish
    },
    {
      title: "Keywords Studios",
      description:
        "Player Support Agent. Researched the latest bugs and provided data to developers to help them fix them.",
      icon: keywords
    },
    {
      title: "Cura Deuda",
      description:
        "Full Stack Developer. Worked on the main landing page as well as a private tracking sytem for potential clients.",
      icon: cura
    },
    {
      title: "Citi (Altimetrik)",
      description:
        "Full Stack Developer. Developed landing page for Citi's lending system Bridge, as well as the backend for it. ",
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
      <div className="flex flex-wrap justify-center items-center">
        {data.map(({ title, description, icon }, index) => (
          <ServiceCard
            key={index}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Services;
