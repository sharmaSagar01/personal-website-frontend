import React from "react";
import "../Styles/ExperienceCard.css";
import { motion } from "framer-motion";
import { urlFor } from "../utils/imageUrlBuilder";
type Props = {
  experience: any;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="experience__card">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        alt="alt"
        className="company-logo"
      />

      <div className="work-content">
        <h4 className="company-position">{experience.jobTitle}</h4>
        <p className="company-name">{experience.company}</p>
        <div className="tech-used">
          {experience.technologies.map((technology: any) => (
            <img
              key={technology._id}
              className="tech-icon"
              src={urlFor(technology.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="work-duration">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="work-description">
          {experience.points.map((point: string, index: number) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
