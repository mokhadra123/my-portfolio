import { Box, Typography } from "@mui/material";
import "./About.style.scss";
import Lab from "../../assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="container about-container">
      <Box className="rigt-about-container">
        <img src={Lab} alt="about section" />
        <Box className="main">
          <span className="icon">🧑‍💻</span>
          <svg id="rotatingText" viewBox="0 0 200 200" width="200" height="200">
            <defs>
              <path
                id="circle"
                d="M 100, 100
                m -75, 0
                a 75, 75 0 1, 0 150, 0
                a 75, 75 0 1, 0 -150, 0
                "
              ></path>
            </defs>

            <text>
              <textPath alignmentBaseline="top" href="#circle" className="text">
                FRONT-END WEB DEVELOPER
              </textPath>
            </text>
          </svg>
        </Box>
      </Box>
      <Box className="left-about-container">
        <Typography variant="h6" component="h6" className="section-title">
          About Me
        </Typography>
        <Typography variant="h5" component="h5" className="sub-section-title">
          A dedicated Front-end Developer based in Mansoura, Egypt 🧑‍💻
        </Typography>
        <Typography variant="p" component="p" className="about-text">
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML , CSS , javaScript , React , Material UI, websites that
          offer a smooth user experience and maintaining responsive websites
          that offer a smooth user experience. My expertise lies in crafting
          dynamic. engaging interfaces through writing clean and optimized code
          and utilizing cutting-edge development tools and technologies. I am
          also a team player who thrives in collaborating with corrs-functional
          teams to produce outstanding web applications.
        </Typography>
      </Box>
    </section>
  );
};

export default About;
