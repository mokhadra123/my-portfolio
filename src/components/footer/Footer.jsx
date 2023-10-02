import { Box, Typography } from "@mui/material";
import React from "react";
import "./Footer.style.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <Box className="footer-container">
      <Box className="container footer-content-container">
        <Typography className="footer-title" variant="p" component="p">
          created by
          <Typography variant="h6" component="h6" className="me">
            Mohamed Khadra ❤️
          </Typography>
        </Typography>
        <Box className="footer-icons-container">
          <Box
            sx={{ margin: "-10px" }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/mohamed-khadra-a48898227/"
              )
            }
          >
            <LinkedInIcon fontSize="large" className="footer-icon" />
          </Box>
          <Box onClick={() => window.open("https://github.com/mokhadra123")}>
            <GitHubIcon fontSize="large" className="footer-icon" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
