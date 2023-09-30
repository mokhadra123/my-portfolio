import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import "./Navbar.scss";
import { Button } from "@mui/material";
import { useState } from "react";

const pages = [
  { name: "Home", id: "#home" },
  { name: "About", id: "#about" },
  { name: "Prodjects", id: "#projects" },
  { name: "Contact", id: "#contact" },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleNavClick = (id) => {
    setActiveNav(id);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className="navbar-container" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl" className="nav">
        <Toolbar disableGutters>
          <Typography
            className="nav-text"
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "1px",
              color: "inherit",
              textDecoration: "none",
              flexGrow: "3",
            }}
          >
            Mohamed.dev
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                sx={{
                  my: 2,
                  color: "black",
                  fontWeight: "bold",
                }}
                // variant="a"
                href={page.id}
                onClick={() => handleNavClick(page.id)}
                className={activeNav === page.id ? "active" : ""}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography
                    onClick={() => handleNavClick(page.id)}
                    component="a"
                    textAlign="center"
                    sx={{ fontWeight: "bold" }}
                    variant="a"
                    href={page.id}
                    className={activeNav === page.id ? "active" : ""}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
            className="nav-text"
          >
            Mohamed.dev
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
