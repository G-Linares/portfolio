import React from "react";
import { motion } from "framer-motion";

import Section from "../Customs/Section";
import ServiceCard from "../Customs/ServiceCard";

const Services = () => {
  const data = [
    {
      title: "Dish",
      description: "QA Engineer",
      icon: "https://lh6.googleusercontent.com/5MuzM8U4nsSLsM6-ALU-WlU0vjOXojxTxwlQlMhBchW3M6K0qOuq_YiRa2hqZ8qyDIM=w2400"
    },
    {
      title: "Keywords Studios",
      description: "Player Support Agent",
      icon: "https://lh6.googleusercontent.com/FEHr0C-EAYnuLf63fCxxIBAkfdeDPK1h1HO47HCMKfdQrG2By6ayvZ7Lc_echjQ9znA=w2400"
    },
    {
      title: "Cura Deuda",
      description: "Full Stack Developer",
      icon: "https://lh5.googleusercontent.com/7oZKwxWWK62v8zcgRnpybptmk0jaaEIcUp7Ne4izA90ZOl3gSmkXKu3FSrCeGVlGiJg=w2400"
    },
    {
      title: "Citi (Altimetrik)",
      description: "Full Stack Developer",
      icon: "https://lh5.googleusercontent.com/I0A2k4jWl2R-7edIqsZku_Erbu4Uko7ztCNuUhGH_5wpz0SUGS-8cslYz47DtWozeAQ=w2400"
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
