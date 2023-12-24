import { Button } from '@mui/material'
import React from 'react'

const BtnListMovie = (props) => {
  return (
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
  >
    {props}
  </Button>
  )
}

export default BtnListMovie
