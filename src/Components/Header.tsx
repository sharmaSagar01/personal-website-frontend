import { SocialIcon } from "react-social-icons";
import "../Styles/Header.css";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { fetchSocials } from "../utils/fetchSocials";

const Header = () => {
  const { data, isLoading } = useQuery("socials", fetchSocials);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  // console.log(process.env.REACT_APP_SANITY_DATASET);
  return (
    <header className="app__header">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="header__logo-section"
      >
        {data.map((item: any) => (
          <SocialIcon
            key={item._id}
            url={item.url}
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="header__second-section"
      >
        <a href="#contact">
          <SocialIcon
            className="email-icon"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="contact-info">Get In Touch</p>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
