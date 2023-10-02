import { Box, Typography } from "@mui/material";
import React from "react";
import { projects } from "./projects-array";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import GitHubIcon from "@mui/icons-material/GitHub";
const ProjectItem = () => {
  return (
    <Box>
      {projects.map((project, index) => {
        const { id, image, title, desc, components, code, demo } = project;
        const { js, lib } = components;
        const isLeftImage = index % 2 === 0;
        return (
          <Box
            className={`project-container ${
              isLeftImage ? "image-left" : "description-left"
            }`}
            key={id}
          >
            <Box className="right-content">
              <img src={image} alt={title} className="project-img" />
            </Box>
            <Box className="left-content">
              <Typography component="h6" variant="h6" className="project-title">
                {title}
              </Typography>

              <Typography component="p" variant="p" className="project-dsc">
                {desc}
              </Typography>

              <Box className="tech-container">
                <Typography component="p" variant="p" className="project-tech">
                  {js}
                </Typography>
                <Typography component="p" variant="p" className="project-tech">
                  {lib}
                </Typography>
              </Box>
              <Box className="links-container">
                <Typography
                  href={code}
                  component="a"
                  variant="a"
                  className="link-project"
                >
                  Code <GitHubIcon fontSize="large" />
                </Typography>
                <Typography
                  href={demo}
                  component="a"
                  variant="a"
                  className="link-project"
                >
                  Live Demo
                  <ExitToAppIcon fontSize="large" />
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default ProjectItem;
