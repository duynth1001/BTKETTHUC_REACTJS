import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../routes/path'

const AdminPage = () => {
    const navigate = useNavigate()
  return (
         <div >
    <Typography sx={{
        ml:48,
        fontSize:30,
        fontWeight:700,
        mt:10
    }}> Trang quản trị viên, vui lòng chọn danh mục cần chỉnh sửa </Typography>
    <Box>
    <Container >
      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: "center", pt:'3vh',pl:'2vw' }}
      >
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
      onClick={()=>{navigate(PATH.MOVIE_MANAGEMENT)}}
    >
     Quản trị phim
    </Button>
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
      onClick={()=>{navigate(PATH.USER_MANAGEMENT)}}
    >
     Quản trị người dùng
    </Button>
      </Stack>
    </Container>
  </Box>
  <Box sx={{backgroundColor:'F5ECEC',height:'20vh'}}></Box>
    </div>
  )
}

export default AdminPage
