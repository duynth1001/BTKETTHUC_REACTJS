import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  deleteMovie_manage,
  getListMoviePerPage_manage,
} from "../../../apis/movieApiAdmin";
import {
  Button,
  CardMedia,
  Grid,
  Pagination,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import { PATH } from "../../../routes/path";
import { setMaPhim } from "../../../store/MovieAdmin/slice";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
}));
const defaultTheme = createTheme();
const MovieManagePage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { movieList } = useSelector((state) => state.movieAdmin);
  const handlePagination = (evt, page) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getListMoviePerPage_manage({ page: searchParams.get("page") }));
  }, [searchParams]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Typography
        sx={{
          ml: 80,
          fontSize: 30,
          fontWeight: 700,
          mt: 5,
        }}
      >
        {" "}
        Danh sách phim{" "}
      </Typography>
      <Button
        sx={{
          backgroundColor: "#3E3536",
          color: "#F5ECEC",
          "&:hover": {
            backgroundColor: "red",
          },
          mb:5,
          mt:5
        }}
        onClick={()=>{navigate(PATH.ADD_MOVIE_MANAGE)}}
      >
        Thêm phim
      </Button>

      <main style={{ backgroundColor: "#F5ECEC" }}>
        <TableContainer sx={{ border: 2 }} component={Paper}>
          <Table sx={{ border: 2 }} style={{ backgroundColor: "#F5ECEC" }}>
            <TableHead>
              <TableRow sx={{ border: 2 }}>
                <TableCell sx={{ border: 2 }} align="center">
                  Mã phim
                </TableCell>
                <TableCell sx={{ border: 2 }} align="center">
                  Tên phim
                </TableCell>
                <TableCell sx={{ border: 2 }} align="center">
                  Mã nhóm
                </TableCell>
                <TableCell sx={{ border: 2 }} align="center">
                  Hình ảnh
                </TableCell>
                <TableCell sx={{ border: 2 }} align="center">
                  Hành động
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movieList?.map((row) => (
                <TableRow key={row.maPhim}>
                  <TableCell sx={{ border: 2 }} align="center">
                    {row.maPhim}
                  </TableCell>
                  <TableCell sx={{ border: 2 }} align="center">
                    {row.tenPhim}
                  </TableCell>
                  <TableCell sx={{ border: 2 }} align="center">
                    {row.maNhom}
                  </TableCell>
                  <TableCell sx={{ border: 2 }}>
                    <CardMedia
                      sx={{
                        height: "20vh",
                        width: "20vw",
                        mr: -20,
                      }}
                      image={row.hinhAnh}
                    />
                  </TableCell>
                  <TableCell sx={{ border: 2 }} align="center">
                    <Grid container justifyContent={"center"} spacing={2}>
                      <Grid item xs={3}>
                        <Item>
                          <Button
                            sx={{ color: "red" }}
                            onClick={() => {
                              dispatch(deleteMovie_manage(row.maPhim));
                            }}
                          >
                            {" "}
                            <DeleteIcon />
                          </Button>
                        </Item>
                      </Grid>
                      <Grid item xs={3}>
                        <Item>
                          <Button
                            sx={{ color: "green" }}
                            onClick={() => {
                              navigate(PATH.EDIT_MOVIE_MANAGE)
                              dispatch(setMaPhim(row.maPhim))
                            }}
                          >
                            {" "}
                            <EditIcon />
                          </Button>
                        </Item>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          count={5}
          variant="outlined"
          sx={{
            ml: "38vw",
            mt: "6vh",
            color: "#3E3536",
          }}
          size="large"
          onChange={(evt, page) => {
            handlePagination(evt, page);
          }}
        />
      </main>
    </ThemeProvider>
  );
};

export default MovieManagePage;
