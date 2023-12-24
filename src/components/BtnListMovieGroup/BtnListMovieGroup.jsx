import { CardActions } from "@mui/material";
import React from "react";
import BtnListMovie from "../BtnListMovie/BtnListMovie";

const BtnListMovieGroup = () => {
  return (
    <CardActions sx={{ justifyContent: "center", bgcolor: "#3E3536" }}>
      {BtnListMovie("ĐẶT VÉ")}
      {BtnListMovie("XEM CHI TIẾT")}
    </CardActions>
  );
};

export default BtnListMovieGroup;
