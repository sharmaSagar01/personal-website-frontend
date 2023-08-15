import React from "react";
import "../Styles/Education.css";
import { motion } from "framer-motion";
import EducationCard from "./EducationCard";

type Props = {};

const Education = (props: Props) => {
  return (
    <motion.div className="app__education">
      <h3 className="education__title">Education</h3>
      <div className="education__content">
        <EducationCard />
        <EducationCard />
      </div>
    </motion.div>
  );
};

export default Education;
