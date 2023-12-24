import { Carousel } from 'react-carousel-minimal';
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getBannersAPI } from "../../apis/movieApi";
import { Box, Skeleton } from "@mui/material";
function Banner() {
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["banner"],
    queryFn: getBannersAPI,
  });

  const imageUrl = []
  data.forEach(element => {
      const obj={}
      obj.image=element.hinhAnh
      imageUrl.push(obj)
  });

  if (isLoading) {
    return (
      <Skeleton variant="rectangular" sx={{ height: 500 }} animation="wave" />
    );
  }
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
