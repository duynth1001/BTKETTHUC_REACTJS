import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setMovieList } from "../../store/ShowingMovie/slice";

const BtnShowingMovie = (props) => {
  const dispatch = useDispatch();
  const handleOnClick = (props) => {
    switch (props) {
      case "PHIM HOT":
        dispatch(setMovieList("hot"));
        break;
      case "PHIM ĐANG CHIẾU":
        dispatch(setMovieList("dangChieu"));
        break;
      case "PHIM SẮP CHIẾU":
        dispatch(setMovieList("sapChieu"));
        break;
    }
  };
  return (
    <Button
      variant="inherit"
      sx={{
        color: "#F5ECEC",
        fontWeight: "bold",
        bgcolor: "#3E3536",
        height: "5vh",
        textAlign: "center",
        padding: "2.5vh",
        borderRadius: "25px",
        "&:hover": {
          backgroundColor: "red",
        },
      }}
      onClick={() => {
        handleOnClick(props);
      }}
    >
      {props}
    </Button>
  );
};

export default BtnShowingMovie;
