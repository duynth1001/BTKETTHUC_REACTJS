import { Grid, Stack, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React  from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm, Controller } from "react-hook-form";
import { GROUP_CODE } from "../../../../constants";
import dayjs from "dayjs";
import { LoadingButton } from "@mui/lab";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { addMovieAPI } from "../../../../apis/movieApiAdmin";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const previewImage = (file) => {
  return URL.createObjectURL(file);
};

const MovieDetailManage = () => {
  const {maPhim} = useSelector((state)=>state.movieAdmin)
 
 
  const { handleSubmit, register, control, setValue, watch } = useForm({
    defaultValues: {
      tenPhim: '',
      trailer: "",
      moTa: "",
      maNhom: GROUP_CODE,
      ngayKhoiChieu: "",
      sapChieu: true,
      dangChieu: false,
      hot: true,
      danhGia: "",
      hinhAnh: undefined,
    },
  });

  const file = watch("hinhAnh"); // [0]
  const queryClient = useQueryClient();
  const { mutate: handleAddMovie } = useMutation({
    mutationFn: (payload) => addMovieAPI(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["list-movie"] });
    },
  });

  const onSubmit = (formValues) => {
    const formData = new FormData();
    formData.append("tenPhim", formValues.tenPhim);
    formData.append("trailer", formValues.trailer);
    formData.append("moTa", formValues.moTa);
    formData.append("maNhom", formValues.maNhom);
    formData.append("sapChieu", formValues.sapChieu);
    formData.append("dangChieu", formValues.dangChieu);
    formData.append("hot", formValues.hot);
    formData.append("danhGia", formValues.danhGia);
    formData.append("hinhAnh", formValues.hinhAnh[0]);
    handleAddMovie(formData);
  };


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
      <Typography sx={{
        ml:75,
        fontSize:30,
        fontWeight:700,
        mt:5,
        mb:5
    }}> Trang thêm phim </Typography>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item md={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack direction={"column"} spacing={3}>
                <TextField
                  label="Tên phim"
                  fullWidth
                  {...register("tenPhim")}
                  sx={{backgroundColor:'white'}}
                />
                <TextField sx={{backgroundColor:'white'}} label="Trailer" fullWidth {...register("trailer")} />
                <TextField sx={{backgroundColor:'white'}} label="Mô tả" fullWidth {...register("moTa")} />
                <Controller
                  control={control}
                  name="ngayKhoiChieu"
                  render={(field) => {
                    return (
                      <DatePicker
                        label="Ngày chiếu"
                        format="DD/MM/YYYY"
                        onChange={(date) => {
                          const value = dayjs(date).format("DD/MM/YYYY");
                          setValue("ngayKhoiChieu", value);
                        }}
                        {...field}
                        sx={{backgroundColor:'white'}}
                      />
                    );
                  }}
                />

                <TextField label="Đánh giá" sx={{backgroundColor:'white'}} {...register("danhGia")} />

                <Button
                  component="label"
                  startIcon={<CloudUploadIcon />}
                  sx={{ backgroundColor: "#3E3536", color: "#F5ECEC", "&:hover": {
                    backgroundColor: "red",
                  }, }}
                >
                  Upload file
                  <VisuallyHiddenInput
                    type="file"
                    {...register("hinhAnh")}
                    accept=".png,.gif,.jpg"
                  />
                </Button>
                {file?.length > 0 && (
                  <>
                    <img src={previewImage(file[0])} width={240} />
                    <Button
                      sx={{ backgroundColor: "#3E3536", color: "#F5ECEC", "&:hover": {
                        backgroundColor: "red",
                      }, }}
                      onClick={() => setValue("hinhAnh", undefined)}
                    >
                      Xoá hình
                    </Button>
                  </>
                )}

                <LoadingButton
                  sx={{ backgroundColor: "#3E3536", color: "#F5ECEC" , "&:hover": {
                    backgroundColor: "red",
                  },}}
                  size="large"
                  type="submit"
                >
                  Thêm phim
                </LoadingButton>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </div>
    </LocalizationProvider>
  );
};

export default MovieDetailManage;
