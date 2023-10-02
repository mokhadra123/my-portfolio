import { Box, Typography } from "@mui/material";
import "./Contact.style.scss";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";
const Contact = () => {
  return (
    <section id="contact">
      <Box className="container contact-container">
        <Typography variant="h6" component="h6" className="section-title">
          Contact
        </Typography>
        <Typography variant="h5" component="h5" className="sub-section-title">
          Don't be shy! Hit me up! 👇
        </Typography>
        <Box className="loc-mail-container">
          {/* ==========================location ============================= */}
          <Box className="loc-container">
            <FmdGoodIcon color="primary" fontSize="large" />
            <Box className="loc-content">
              <Typography
                variant="h6"
                component="h6"
                className="loc-mail-title"
              >
                Location
              </Typography>
              <Typography variant="p" component="p" className="loc-mail-text">
                Mansoura , Eygpt
              </Typography>
            </Box>
          </Box>

          {/* ==========================Email ============================= */}

          <Box className="email-container">
            <EmailIcon color="primary" fontSize="large" />
            <Box className="email-content">
              <Typography
                variant="h6"
                component="h6"
                className="loc-mail-title"
              >
                Mail
              </Typography>
              <Typography variant="p" component="p" className="loc-mail-text">
                mokhadra008@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Contact;
