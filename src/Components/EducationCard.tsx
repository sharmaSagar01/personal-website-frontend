import React from "react";
import { motion } from "framer-motion";
import "../Styles/EducationCard.css";
type Props = {};

const EducationCard = (props: Props) => {
  return (
    <article className="education__card">
      <div>
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src="https://www.uwindsor.ca/science/sites/uwindsor.ca.science/files/uw_f_science_2l_horz_copy-clearbackground.png"
          alt=""
          className="university-logo"
        />
      </div>
      <div className="education-details">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/7589/7589322.png"
            alt=""
            className="graduation-logo"
          />
        </div>
        <div>
          <h4 className="education-title">
            BSc. in Computer Science and Information Technology
          </h4>
          <p className="university-name">University of Windsor</p>
          <p className="education-duration">Jan 2022 - April 2023</p>
        </div>
      </div>
    </article>
  );
};

export default EducationCard;
