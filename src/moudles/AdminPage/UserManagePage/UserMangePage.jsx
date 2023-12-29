import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Button,
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
import { deleteUser_manage, getListUserPerPage_manage } from "../../../apis/userAPIAdmin";
import { setTaiKhoan } from "../../../store/UserAdmin/slice";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
}));
const defaultTheme = createTheme();
const MovieManagePage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { userList } = useSelector((state) => state.userAdmin);
  const handlePagination = (evt, page) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getListUserPerPage_manage({ page: searchParams.get("page") }));
  }, [searchParams]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Typography
        sx={{
          ml: 75,
          fontSize: 30,
          fontWeight: 700,
          mt: 5,
        }}
      >
        {" "}
        Danh sách người dùng{" "}
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
        onClick={()=>{navigate(PATH.ADD_USER_MANAGE)}}
      >
        Thêm người dùng
      </Button>

      <main style={{ backgroundColor: "#F5ECEC" }}>
        <TableContainer sx={{ border: 2 }} component={Paper}>
          <Table sx={{ border: 2 }} style={{ backgroundColor: "#F5ECEC" }}>
            <TableHead>
              <TableRow sx={{ border: 2 }}>
                <TableCell sx={{ border: 2 }} align="center">
                  Tài khoản
                </TableCell>
                <TableCell sx={{ border: 2 }} align="center">
                  Họ tên
                </TableCell>
                <TableCell sx={{ border: 2 }} align="center">
                  Email
                </TableCell>
                <TableCell sx={{ border: 2 }} align="center">
                  Loại người dùng
                </TableCell>
                <TableCell sx={{ border: 2 }} align="center">
                  Hành động
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList?.map((row) => (
                <TableRow key={row.maPhim}>
                  <TableCell sx={{ border: 2 }} align="center">
                    {row.taiKhoan}
                  </TableCell>
                  <TableCell sx={{ border: 2 }} align="center">
                    {row.hoTen}
                  </TableCell>
                  <TableCell sx={{ border: 2 }} align="center">
                    {row.email}
                  </TableCell>
                  <TableCell sx={{ border: 2 }}>
                   {row.maLoaiNguoiDung}
                  </TableCell>
                  <TableCell sx={{ border: 2 }} align="center">
                    <Grid container justifyContent={"center"} spacing={2}>
                      <Grid item xs={3}>
                        <Item>
                          <Button
                            sx={{ color: "red",pr:2 }}
                            onClick={() => {
                              dispatch(deleteUser_manage(row.taiKhoan));
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
                            sx={{ color: "green",pr:2 }}
                            onClick={() => {
                              navigate(PATH.EDIT_USER_MANAGE)
                              dispatch(setTaiKhoan(row.taiKhoan))
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
