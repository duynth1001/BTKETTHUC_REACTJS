import React from 'react'
import Box from "@mui/material/Box";
const HeaderPoster = () => {
  return (
    <Box
    component="img"
    style={{ width: "100%",backgroundColor:'#F5ECEC', height: "100%" }}
    alt="The house from the offer."
    src="src\assets\Banner.png"
    sx={{mb:'-1vh'}}
  />
  )
}

export default HeaderPoster
