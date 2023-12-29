import { Button, MenuItem } from "@mui/material";
import React from "react";

const BtnNavBarReponsive = () => {
  const handleClickScrollLichChieu = ()=>{
    const ele = document.getElementById('lichchieu')
    if (ele) {
        ele.scrollIntoView({behavior:'smooth'})
    }
 }
const handleClickScrollSuKien = ()=>{
const ele = document.getElementById('sukien')
if (ele) {
    ele.scrollIntoView({behavior:'smooth'})
}
}

const handleClickScrollUuDai =()=>{
const ele = document.getElementById('uudai')
if (ele) {
    ele.scrollIntoView({behavior:'smooth'})
}
}
const handleClickScrollFooter = ()=>{
  const ele = document.getElementById('footer')
  if (ele) {
      ele.scrollIntoView({behavior:'smooth'})
  }
}
  return (
    <div>
      <MenuItem>
        <Button  onClick={()=>{handleClickScrollLichChieu()}} textAlign="center">LỊCH CHIẾU</Button>
      </MenuItem>
      <MenuItem>
        <Button onClick={()=>{handleClickScrollSuKien()}} textAlign="center">SỰ KIỆN</Button>
      </MenuItem>{" "}
      <MenuItem>
        <Button onClick={()=>{handleClickScrollUuDai()}} textAlign="center">ƯU ĐÃI</Button>
      </MenuItem>{" "}
      <MenuItem>
        <Button  onClick={()=>{handleClickScrollFooter()}} textAlign="center">LIÊN HỆ</Button>
      </MenuItem>
    </div>
  );
};

export default BtnNavBarReponsive;
