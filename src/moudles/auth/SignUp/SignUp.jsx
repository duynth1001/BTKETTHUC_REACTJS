import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { GROUP_CODE } from "../../../constants";
import { Navigate, useNavigate } from "react-router-dom";
import { signupAPI } from "../../../apis/userAPI";
import { useAuth } from "../../../contexts/UserContext/UserContext";
import { useMutation } from "@tanstack/react-query";
import { PATH } from "../../../routes/path";
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const schemaSignup = yup.object({
  taiKhoan: yup
    .string()
    .required("Vui lòng nhập thông tin")
    .min(6, "Tài khoản ít nhất 6 ký tự")
    .max(8, "Tài khoản không vượt quá 8 ký tự"),
  matKhau: yup
    .string()
    .required("Vui lòng nhập thông tin")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Vui lòng nhập mật khẩu có số, ký tự đặc biệt và chữ in hoa"
    ),
  email: yup.string().required("Vui lòng nhập thông tin").email('Vui lòng nhập đúng định dạng email'),
  hoTen: yup.string().required("Vui lòng nhập thông tin"),
  soDt: yup
    .string()
    .required("Vui lòng nhập thông tin")
    .matches(
        /^\d+$/,
      "Vui lòng nhập định dạng số"
    ),
});

export default function SignUp() {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: GROUP_CODE,
      hoTen: "",
    },
    resolver: yupResolver(schemaSignup),
    mode: "all",
  });
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { mutate: handleSignup, isPending } = useMutation({
    mutationFn: (values) => signupAPI(values),
    onSuccess: (values) => {
      navigate(PATH.SIGN_IN);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
  const onSubmit = (values) => {
    handleSignup(values);

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
              component="h1"
              sx={{
                pt: 3,
                fontWeight: "700",
                fontSize: "5vh",
                color: "#3E3536",
              }}
              variant="h5"
            >
              Đăng ký thành viên
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="fullname"
                    label="Họ Tên"
                    name="fullname"
                    autoComplete="fullname"
                    sx={{ backgroundColor: "white" }}
                    autoFocus
                    {...register("hoTen")}
                    error={Boolean(errors.hoTen)}
                    helperText={Boolean(errors.hoTen) && errors.hoTen.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    sx={{ backgroundColor: "white" }}
                    {...register("email")}
                error={Boolean(errors.email)}
                helperText={Boolean(errors.email) && errors.email.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="userAccount"
                    label="Tài khoản"
                    name="userAccount"
                    autoComplete="userAccount"
                    sx={{ backgroundColor: "white" }}
                    {...register("taiKhoan")}
                    error={Boolean(errors.taiKhoan)}
                    helperText={Boolean(errors.taiKhoan) && errors.taiKhoan.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Mật khẩu"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    sx={{ backgroundColor: "white" }}
                    {...register("matKhau")}
                    error={Boolean(errors.matKhau)}
                    helperText={Boolean(errors.matKhau) && errors.matKhau.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phoneNumber"
                    label="Số điện thoại"
                    name="phoneNumber"
                    autoComplete="phoneNumber"
                    sx={{ backgroundColor: "white" }}
                    {...register("soDt")}
                    error={Boolean(errors.soDt)}
                    helperText={Boolean(errors.soDt) && errors.soDt.message}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
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
                Đăng ký
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
