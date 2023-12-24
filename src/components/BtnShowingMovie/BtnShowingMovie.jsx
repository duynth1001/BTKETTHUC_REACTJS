import { Button } from '@mui/material'
import React from 'react'

const BtnShowingMovie = (props) => {
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
  >
    {props}
  </Button>
  
  )
}

export default BtnShowingMovie
