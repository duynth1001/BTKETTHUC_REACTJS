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
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/UserContext/UserContext";
import { PATH } from "../../routes/path";
import { Stack } from "@mui/material";
const pages = ["Hexa Cinema APP", "Hexa Cinema Facebook", "Hexa Cinema Zalo"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();
  const { currentUser, handleLogout } = useAuth();

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
         {currentUser ? (
          <Stack direction={"row"} spacing={2}>
            <Typography >{currentUser.hoTen}</Typography>
            <MenuItem>
            <Button
            sx={{color:'black'}}
              onClick={() => {
                handleLogout();
                navigate(PATH.SIGN_IN);
              }}
            >
             Đăng xuất
            </Button>
            </MenuItem>
          </Stack>
        ) : (
          <Stack spacing={2}>
           <MenuItem> <Button sx={{color:'black'}} onClick={() => navigate(PATH.SIGN_UP)}>
              Đăng ký
            </Button>
            </MenuItem>
            <MenuItem>
            <Button sx={{color:'black'}}  onClick={() => navigate(PATH.SIGN_IN)}>
              Đăng nhập
            </Button>
            </MenuItem>
          </Stack>
        )}
                {/* <MenuItem>
                  <Button
                    onClick={() => {
                      navigate(PATH.SIGN_IN);
                      console.log("test");
                    }}
                    textAlign="center"
                  >
                    Đăng nhập
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button   onClick={() => {
                  navigate(PATH.SIGN_UP);
                }} textAlign="center">Đăng ký thành viên</Button>
                </MenuItem> */}
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
                  ml: 20,
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 17,
                    width: 17,
                    pt: 1,
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
                <FacebookIcon sx={{ pt: 0.7 }} fontSize="small" />
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
                    mr: -0.6,
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
           
              {currentUser ? (
          <Stack direction={"row"} spacing={2}>
            <Typography sx={{pt:1.3}}>{currentUser.hoTen}</Typography>
            <MenuItem>
            <Button
            sx={{color:'#F5ECEC'}}
              onClick={() => {
                handleLogout();
                navigate(PATH.SIGN_IN);
              }}
            >
              Đăng xuất
            </Button>
            </MenuItem>
          </Stack>
        ) : (
          <Stack spacing={2} direction={"row"}>
           <MenuItem> <Button sx={{color:'#F5ECEC'}} onClick={() => navigate(PATH.SIGN_UP)}>
              Đăng ký thành viên
            </Button>
            </MenuItem>
            <MenuItem>
            <Button    sx={{color:'#F5ECEC'}} onClick={() => navigate(PATH.SIGN_IN)}>
              Đăng nhập
            </Button>
            </MenuItem>
          </Stack>
        )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <HeaderPoster />
    </div>
  );
}
export default Header;
