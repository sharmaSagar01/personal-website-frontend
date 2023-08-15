import React from "react";
import "../Styles/Experience.css";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { fetchExperiences } from "../utils/fetchExperiences";
import { useQuery } from "react-query";

type Props = {};

const Experience = (props: Props) => {
  const { data, isLoading } = useQuery("experiences", fetchExperiences);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="app__experience"
    >
      <h3 className="experience__title">Experience</h3>

      <div className="experience__content">
        {data?.map((experience:any) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
