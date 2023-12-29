import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getListMoviePerPage } from "../../../apis/movieApi";
import BtnShowingMovieGroup from "../../../components/BtnShowingMovieGroup/BtnShowingMovieGroup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button, CardActions, Pagination } from "@mui/material";
import { PATH } from "../../../routes/path";
const defaultTheme = createTheme();

export default function Showing() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { showingList, isLoading } = useSelector((state) => state.movie);

  const handlePagination = (evt, page) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };
  const navigate =useNavigate()
  useEffect(() => {
    dispatch(getListMoviePerPage({ page: searchParams.get("page") }));
  }, [searchParams]);
  return (
    <ThemeProvider theme={defaultTheme}>
      <main style={{ backgroundColor: "#F5ECEC" }}>
        <BtnShowingMovieGroup />
        <Container>
          <Grid container spacing={4}>
            {showingList?.map((card) => (
              <Grid item key={card.maPhim} md={3}>
                <Card
                  sx={{
                    height: "60vh",
                    width: "18vw",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    sx={{
                      height: "60vh",
                    }}
                    image={card.hinhAnh}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      bgcolor: "#3E3536",
                      color: "#F5ECEC",
                    }}
                  >
                    <Typography variant="h6">{card.tenPhim}</Typography>
                  </CardContent>
                  <CardActions
                    sx={{ justifyContent: "center", bgcolor: "#3E3536" }}
                  >
                    <Button
                      sx={{
                        color: "#3E3536",
                        fontWeight: "bold",
                        bgcolor: "#F5ECEC",
                        "&:hover": {
                          backgroundColor: "red",
                        },
                      }}
                      size="medium"
                      onClick={() => {
                        navigate(`${card.maPhim}`)
                      }}
                    >
                      XEM CHI TIẾT
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Pagination
            count={5}
            variant="outlined"
            sx={{
              ml: "26vw",
              mt: "3vh",
              color: "#3E3536",
            }}
            size="large"
            onChange={(evt, page) => {
              handlePagination(evt, page);
            }}
          />
        </Container>
      </main>
    </ThemeProvider>
  );
}
