import React from 'react'
import { CardMedia, Typography } from "@mui/material";
const HexaShowing = (props) => {
    return (
    <div id={props.propsID}>
    <Typography
      sx={{
        mt: 5,
        ml: 80,
        fontWeight: "700",
        fontSize: "5vh",
        color: "#3E3536",
      }}
    >
      {" "}
      {props.content}{" "}
    </Typography>
    <CardMedia
      sx={{
        height: "70vh",
        width: "80vw",
        ml: 20,
        mt: 2,
      }}
      component={props.propsType}
      src={props.propSrc}
    ></CardMedia>
  </div>
  )
}

export default HexaShowing
