import "../Styles/Skill.css";
import { motion } from "framer-motion";


type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="skils">
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png"
        alt=""
        className="skill-logo"
      />
    </div>
  );
}

export default Skill;
