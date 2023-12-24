import { Button } from '@mui/material'
import React from 'react'

const HeaderBtn = (props) => {
  return (
        <Button
          
                  sx={{
                    color: "#F5ECEC",
                    display: "block",
                    paddingTop: "10px",
                    fontSize:'10px'
                  }}
                >
                  {props}
                </Button>
  )
}

export default HeaderBtn
