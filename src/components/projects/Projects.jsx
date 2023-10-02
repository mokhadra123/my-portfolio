import { Box, Typography } from "@mui/material";
import "./projects.style.scss";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section id="projects">
      <Box className="container projects-container">
        <Typography variant="h6" component="h6" className="section-title">
          Portfolio
        </Typography>
        <Typography variant="h5" component="h5" className="sub-section-title">
          Each Project is a unique piece of development🧩
        </Typography>
        <ProjectItem />
      </Box>
    </section>
  );
};

export default Projects;
