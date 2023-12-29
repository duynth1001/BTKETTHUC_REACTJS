import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import BtnNavBarReponsive from "../../../components/BtnNavBarReponsive/BtnNavBarReponsive";
import BtnNavBar from "../../../components/BtnNavBar";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#3E3536", height: "6vh" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          variant="dense"
          disableGutters
          sx={{ minHeight: 20, height: 20 }}
        >
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              <BtnNavBarReponsive />
            </Menu>
          </Box>
          <Typography
            sx={{
              mr: 58,
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "block", md: "flex" } }}>
            <BtnNavBar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
