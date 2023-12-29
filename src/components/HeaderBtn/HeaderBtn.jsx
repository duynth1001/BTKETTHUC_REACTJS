import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../routes/path'

const HeaderBtn = (props) => {
  const navigate=useNavigate()
  const handleOnClick = ()=>{
    navigate(PATH.HOME)
  }
  return (
        <Button
          
                  sx={{
                    color: "#F5ECEC",
                    display: "block",
                    paddingTop: "10px",
                    fontSize:'10px'
                  }}
                  onClick={()=>{
                    handleOnClick()
                  }}
                >
                  {props}
                </Button>
  )
}

export default HeaderBtn
