import React from "react";
import "../Styles/About.css";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { urlFor } from "../utils/imageUrlBuilder";
type Props = {};

const About = (props: Props) => {
  const { data, isLoading } = useQuery("about", fetchPageInfo);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="app__about">
      <h3 className="about__title">About Me</h3>

      <motion.img
        className="about_image"
        src={urlFor(data?.profilePic).url()}
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
      />
      <div className="about__content">
        <h4 className="about-heading">
          Here is a{" "}
          <span
            style={{
              textDecoration: "underline",
              textDecorationColor: "#F7AB0A",
            }}
          >
            little
          </span>{" "}
          background
        </h4>
        <p>{data?.backgroundInformation}</p>
      </div>
    </div>
  );
};

export default About;
