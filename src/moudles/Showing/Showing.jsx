import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getListMovieAPI } from "../../apis/movieApi";
import { useQuery } from "@tanstack/react-query";
import BtnShowingMovieGroup from "../../components/BtnShowingMovieGroup/BtnShowingMovieGroup";
import BtnListMovieGroup from "../../components/BtnListMovieGroup/BtnListMovieGroup";
const defaultTheme = createTheme();

export default function Showing() {
  const {
    data = [],

  } = useQuery({
    queryKey: ["list-movie"],
    queryFn: getListMovieAPI,
  });
  const phimHot = data.filter((it) => {
    return it.hot;
  });
  const displayPhimHot = [];
  phimHot.forEach((element) => {
    const obj = {};
    obj.tenPhim = element.tenPhim;
    obj.hinhAnh = element.hinhAnh;
    displayPhimHot.push(obj);
  });

  const phimSapChieu = data.filter((it) => {
    return it.sapChieu;
  });
  const displayPhimSapChieu = [];
  phimSapChieu.forEach((element) => {
    const obj = {};
    obj.tenPhim = element.tenPhim;
    obj.hinhAnh = element.hinhAnh;
    displayPhimSapChieu.push(obj);
  });
  const phimDangChieu = data.filter((it) => {
    return !it.sapChieu;
  });
  const displayPhimDangChieu = [];
  phimDangChieu.forEach((element) => {
    const obj = {};
    obj.tenPhim = element.tenPhim;
    obj.hinhAnh = element.hinhAnh;
    displayPhimDangChieu.push(obj);
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <main style={{ backgroundColor: "#F5ECEC" }}>
     <BtnShowingMovieGroup/>
        <Container  maxWidth="md">
          <Grid  container  spacing={4}>
            {displayPhimHot.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "80vh",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    sx={{
                      height:'60vh',
                    }}
                    image={card.hinhAnh}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      bgcolor: "#3E3536",
                      color: "#F5ECEC",
                      mt:'10vh'
                    }}
                  >
                    <Typography variant="h6">
                      {card.tenPhim}
                    </Typography>
                  </CardContent>
               <BtnListMovieGroup/>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
