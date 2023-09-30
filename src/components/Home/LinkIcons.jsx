import { Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const LinkIcons = () => {
  return (
    <Box>
      <IconButton
        sx={{ margin: "-10px" }}
        onClick={() =>
          window.open("https://www.linkedin.com/in/mohamed-khadra-a48898227/")
        }
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton onClick={() => window.open("https://github.com/mokhadra123")}>
        <GitHubIcon color="black" />
      </IconButton>
    </Box>
  );
};

export default LinkIcons;
