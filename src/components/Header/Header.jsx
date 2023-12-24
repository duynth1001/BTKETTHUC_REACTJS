import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import HeaderPoster from "../HeaderPoster";
import HeaderBtn from "../HeaderBtn/HeaderBtn";
import FacebookIcon from "@mui/icons-material/Facebook";
const pages = ["Hexa Cinema APP", "Hexa Cinema Facebook", "Hexa Cinema Zalo"];
const settings = ["Đăng nhập", "Đăng ký thành viên"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#3E3536", height: "3vh" }}
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                {settings.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  mr: -16,
                  ml:20
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 25,
                    width: 17,
                    pt:1,
                    mr: -0.7,
                  }}
                  src="src\assets\favicon.png"
                />
                {HeaderBtn("Hexa Cinema APP")}
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  mr: -16,
                }}
              >
                    <Box
                  sx={{
                    pt: 0.3,
                    mr: -0.7,
                  }}
                >
                <FacebookIcon fontSize="small"/>
                </Box>
                {HeaderBtn("Hexa Cinema Facebook")}
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                }}
              >
           <Box
                  component="img"
                  sx={{
                    height: 30,
                    width: 26,
                    pt: 0.5,
                    mr: -0.7,
                  }}
                  src="src\assets\zaloicon.png"
                />
                {HeaderBtn("Hexa Cinema Zalo")}
              </Box>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {settings.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "#F5ECEC",
                    display: "block",
                    paddingTop: "10px",
                    fontSize: "10px",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <HeaderPoster />
    </div>
  );
}
export default Header;
