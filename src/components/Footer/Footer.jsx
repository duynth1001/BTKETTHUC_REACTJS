import React from 'react'
import Box from "@mui/material/Box";
import { Typography } from '@mui/material';
const Footer = () => {
  return (
    <div id='footer' style={{backgroundColor:'#F5ECEC'}}>
       <Box
    component="img"
    style={{ width: "50%",backgroundColor:'#F5ECEC', height: "20%" }}
    src="src\assets\Banner.png"
    sx={{
        mt:3,
        ml:-15,
        mb:2
    }}
  />
    <Typography sx={{ml:20}}>Chính Sách Khách Hàng Thường Xuyên | Chính Sách Bảo Mật Thông Tin | Điều Khoản Sử Dụng</Typography>
    <Typography sx={{ml:20}}>CÔNG TY TNHH HEXA CINEMA VIỆT NAM</Typography>
    <Typography sx={{ml:20}}>Giấy CNĐKDN: 2212574786, đăng ký lần đầu ngày 10/09/2010, đăng ký thay đổi lần thứ 2 ngày 10/02/2016, cấp bởi Sở KHĐT Thành phố Hồ Chí Minh</Typography>
    <Typography sx={{ml:20}}>Địa chỉ: Tầng 1, TTTM NowZone, số 42 đường Nguyễn Trãi, Phường Tân Định, Quận 1, TPHCM, Việt Nam</Typography>
    <Typography sx={{ml:20}}>Hotline: 0903815547</Typography>
    <Typography sx={{ml:20}}>COPYRIGHT © HEXACINEMAVN.COM - ALL RIGHTS RESERVED.</Typography>
    <br/><br/>
    </div>
  )
}

export default Footer
