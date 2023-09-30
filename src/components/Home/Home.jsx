import { Box, Typography } from "@mui/material";
import "./Home.style.scss";

import Me from "../../assets/me3.png";
import LinkIcons from "./LinkIcons";
import Skills from "./Skills";
const Home = () => {
  return (
    <section id="home" className="container">
      <Box className=" home-container">
        <Box className="text-container">
          <Typography variant="h1" component="h1" className="home-title">
            Front-End React Developer👋
          </Typography>
          <Typography variant="p" component="p" className="home-text">
            I am Mohamed Khadra .A passionate Front-End React Developer with a
            particular interest in building responsive, interactive websites and
            web applications. 🧑‍💻
          </Typography>
          {/* ====================== Another component ======================*/}
          <LinkIcons />
        </Box>
        <Box className="img-container">
          <img src={Me} alt="ME" />
        </Box>
      </Box>
      {/* ====================== Another component ======================*/}

      <Skills />
    </section>
  );
};

export default Home;
