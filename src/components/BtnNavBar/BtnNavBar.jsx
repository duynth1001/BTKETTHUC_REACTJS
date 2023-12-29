import { Button } from "@mui/material";
import React from "react";

const BtnNavBar = () => {
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
      <Button
        sx={{
          my: 2,
          color: "#F5ECEC",
          paddingLeft: "40px",
          paddingTop: "30px",
        }}
        onClick={()=>{handleClickScrollLichChieu()}}
      >
       LỊCH CHIẾU
      </Button>
      <Button
        sx={{
          my: 2,
          color: "#F5ECEC",
          paddingLeft: "40px",
          paddingTop: "30px",
        }}
        onClick={()=>{handleClickScrollSuKien()}}
      >
        SỰ KIỆN
      </Button>
      <Button
        sx={{
          my: 2,
          color: "#F5ECEC",
          paddingLeft: "40px",
          paddingTop: "30px",
        }}
        onClick={()=>{handleClickScrollUuDai()}}
      >
        ƯU ĐÃI
      </Button>
      <Button
        sx={{
          my: 2,
          color: "#F5ECEC",
          paddingLeft: "40px",
          paddingTop: "30px",
        }}
        onClick={()=>{handleClickScrollFooter()}}
      >
        LIÊN HỆ
      </Button>
    </div>
  );
};

export default BtnNavBar;
