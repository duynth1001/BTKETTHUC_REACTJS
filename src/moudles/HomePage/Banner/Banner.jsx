import { Carousel } from 'react-carousel-minimal';
import { useQuery } from "@tanstack/react-query";
import React from "react";
import {  Skeleton } from "@mui/material";
import { getBannersAPI } from '../../../apis/movieApi';
function Banner() {
  const {
    data = [],
    isLoading,
  } = useQuery({
    queryKey: ["banner"],
    queryFn: getBannersAPI,
  });
  if (isLoading) {
    return (
      <Skeleton variant="rectangular" sx={{ height: 500 }} animation="wave" />
    );
  }
  const imageUrl = []
  data.forEach(element => {
      const obj={}
      obj.image=element.hinhAnh
      imageUrl.push(obj)
  });

  return (
         
            <Carousel
            data={imageUrl}
            time={2000}
            width="100vw"
            height="100%"
            automatic={true}
            dots={true}
            slideBackgroundColor="white"
            slideImageFit="cover"

          />
  );
}

export default Banner;
