import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../../../contexts/UserContext/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signinAPI } from "../../../apis/userAPI";
import { useMutation } from "@tanstack/react-query";
import { PATH } from "../../../routes/path";

const defaultTheme = createTheme();

export default function SignIn() {
  const { currentUser, handleSignin: handleSigninContext } = useAuth();
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
  });
  const { mutate: handleSignin, isPending } = useMutation({
    mutationFn: (values) => signinAPI(values), //{ taiKhoan : "" , matKhau:""}
    onSuccess: (values) => {
      //values là thông tin user
      handleSigninContext(values);
      if (values.maLoaiNguoiDung === "KhachHang") navigate(PATH.HOME);
      if (values.maLoaiNguoiDung === "QuanTri") navigate(PATH.ADMIN);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
  const onSubmit = (formValues) => {
    handleSignin(formValues); // { taiKhoan : "" , matKhau:""}
  };
  if (currentUser) {
    return <Navigate to={PATH.HOME} />;
  }
  return (
    <div style={{ backgroundColor: "#F5ECEC" }}>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                pt: 3,
                fontWeight: "700",
                fontSize: "5vh",
                color: "#3E3536",
              }}
              component="h1"
              variant="h5"
            >
              Đăng nhập
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="userAccount"
                label="Tài Khoản"
                name="userAccount"
                autoComplete="userAccount"
                autoFocus
                sx={{backgroundColor:'white'}}
                {...register("taiKhoan")}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{backgroundColor:'white'}}
                {...register("matKhau")}
              />

              <Button
                type="submit"
                fullWidth
                sx={{
                  mt: 3,
                  mb: 6,
                  color: "#F5ECEC",
                  bgcolor: "#3E3536",
                  "&:hover": {
                    backgroundColor: "red",
                  },
                }}
              >
                Đăng nhập
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
