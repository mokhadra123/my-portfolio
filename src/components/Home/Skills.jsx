import { Box, Typography } from "@mui/material";
import { ReactComponent as HtmlIcon } from "../../assets/html-5-svgrepo-com.svg";
import { ReactComponent as CssIcon } from "../../assets/css-svgrepo-com.svg";
import { ReactComponent as JsIcon } from "../../assets/js-official-svgrepo-com.svg";
import { ReactComponent as SassIcon } from "../../assets/scss2-svgrepo-com.svg";
import { ReactComponent as MaterialIcon } from "../../assets/material-ui-svgrepo-com.svg";
import { ReactComponent as ReactIcon } from "../../assets/react-svgrepo-com.svg";
import { ReactComponent as WordPressIcon } from "../../assets/wordpress-color-svgrepo-com.svg";
import "./Home.style.scss";
const Skills = () => {
  return (
    <Box className="skills-container">
      <Typography variant="h6" component="h6" className="skills-title">
        Teach Stock
      </Typography>
      <svgIcon className="icons-container">
        <HtmlIcon className="skill-icon" />
        <CssIcon className="skill-icon" />
        <JsIcon className="skill-icon" />
        <SassIcon className="skill-icon" />
        <MaterialIcon className="skill-icon" />
        <ReactIcon className="skill-icon" />
        <WordPressIcon className="skill-icon" />
      </svgIcon>
    </Box>
  );
};

export default Skills;
