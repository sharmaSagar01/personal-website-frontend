import "../Styles/Projects.css";
import { motion } from "framer-motion";
type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="app__projects"
    >
      <h3 className="projects__title">Projects</h3>
      <h3 className="projects__sub-title">
        Slide to right to view more projects
      </h3>
      <div className="project__content">
        {projects.map((project) => (
          <div className="project-desc">
            <motion.img
              initial={{ y: -200, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://cigars.roku.com/v1/http%3A%2F%2Fimage.roku.com%2Fw%2Frapid%2Fimages%2Foffers-landing-section%2F0087b0fd-af7c-44c0-9214-537bb6876c3e.png"
              alt=""
              className="project-image"
            />
            <div className="project-description">
              <h4 className="project-name">
                <span>Netflix-Clone</span>
              </h4>

              <p className="project-summary">
                Designed UI with Figma to create a wireframe and mockup, and
                developed using React and SCSS in an agile environment,
                resulting in an intuitive, responsive, and user-friendly
                interface, and timely delivery of application
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/sharmaSagar01"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src="https://www.freeiconspng.com/thumbs/website-icon/website-icon-14.png"
                    alt=""
                    className="project-link-logo"
                  />
                </a>
                <a
                  href="https://github.com/sharmaSagar01"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src="https://git-scm.com/images/logos/downloads/Git-Icon-Black.png"
                    alt=""
                    className="project-link-logo"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="project-background"></div>
    </motion.div>
  );
};

export default Projects;
