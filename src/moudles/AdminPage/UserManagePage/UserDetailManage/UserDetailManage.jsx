import { Grid, Stack, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import { useForm } from "react-hook-form";
import { GROUP_CODE } from "../../../../constants";
import { LoadingButton } from "@mui/lab";
import { editMovieAPI } from "../../../../apis/movieApiAdmin";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const UserDetailManage = () => {
  const { taiKhoan } = useSelector((state) => state.userAdmin);

  const { handleSubmit, register, control, setValue, watch } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: GROUP_CODE,
      maLoaiNguoiDung: "",
      hoTen: "",
    },
  });

  const queryClient = useQueryClient();
  const { mutate: handleEditUser } = useMutation({
    mutationFn: (payload) => editMovieAPI(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["list-user"] });
    },
  });

  const onSubmit = (formValues) => {
    const formData = new FormData();
    formData.append("taiKhoan", formValues.taiKhoan);
    formData.append("matKhau", formValues.matKhau);
    formData.append("email", formValues.email);
    formData.append("soDt", formValues.soDt);
    formData.append("maNhom", formValues.maNhom);
    formData.append("maLoaiNguoiDung", formValues.maLoaiNguoiDung);
    formData.append("hoTen", formValues.hoTen);
    handleEditUser(formData);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <Typography
          sx={{
            ml: 55,
            fontSize: 30,
            fontWeight: 700,
            mt: 5,
            mb: 5,
          }}
        >
          {" "}
          Trang cập nhật người dùng(Tài khoản: {taiKhoan}){" "}
        </Typography>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item md={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack direction={"column"} spacing={3}>
                <TextField
                  label="Tài khoản"
                  fullWidth
                  {...register("taiKhoan")}
                  sx={{ backgroundColor: "white" }}
                />
                <TextField
                  sx={{ backgroundColor: "white" }}
                  label="Mật khẩu"
                  fullWidth
                  {...register("matKhau")}
                />
                <TextField
                  sx={{ backgroundColor: "white" }}
                  label="Email"
                  fullWidth
                  {...register("email")}
                />

                <TextField
                  label="Số điện thoại"
                  sx={{ backgroundColor: "white" }}
                  {...register("soDt")}
                />
                <TextField
                  label="Mã nhóm"
                  sx={{ backgroundColor: "white" }}
                  {...register("maNhom")}
                />
                <TextField
                  label="Mã lọai người dùng(Quản trị hoặc Khách hàng)"
                  sx={{ backgroundColor: "white" }}
                  {...register("maLoaiNguoiDung")}
                />
                <TextField
                  label="Họ tên"
                  sx={{ backgroundColor: "white" }}
                  {...register("hoTen")}
                />

                <LoadingButton
                  sx={{
                    backgroundColor: "#3E3536",
                    color: "#F5ECEC",
                    "&:hover": {
                      backgroundColor: "red",
                    },
                  }}
                  size="large"
                  type="submit"
                >
                  Cập nhật
                </LoadingButton>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </div>
    </LocalizationProvider>
  );
};

export default UserDetailManage;
