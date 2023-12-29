import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovieShowTimesAPI } from "../../../apis/cinemaAPI";
import { useParams } from "react-router-dom";
import { Box, Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import dayjs from "dayjs";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    //value =  "BHDStar" , index= "BHDStar"
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
        style={{ width: "100%" }}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
const ShowTimes = () => {
    const {maPhim} = useParams()
    const [value, setValue] = useState("");
    const handleChange = (newValue) => {
      setValue(newValue);
    };
    const {
        data = {},
      } = useQuery({
        queryKey: ["getmovieshowtime"],
        queryFn:()=> getMovieShowTimesAPI(maPhim),
      });
      const cinemaSystems = data.heThongRapChieu || [];
      useEffect(() => {
        if (cinemaSystems.length > 0) {
          setValue(cinemaSystems[0].maHeThongRap);
        }
      }, [cinemaSystems]);
    
  return (
    <div>
    <Box
    sx={{
      flexGrow: 1,
      bgcolor: "#F5ECEC",
      display: "flex",
    }}
  >
    <Tabs
      orientation="vertical"
      aria-label="Vertical tabs example"
      sx={{ borderRight: 1, borderColor: "divider" }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      {cinemaSystems.map((item) => {
        return (
          <Tab
            label={<img src={item.logo} style={{ width: 80 }} />}
            value={item.maHeThongRap}
          />
        );
      })}
    </Tabs>
    {cinemaSystems.map((item) => (
      <TabPanel value={value} index={item.maHeThongRap}>
      
        {item.cumRapChieu.map((rap) => (
          <Box sx={{ mb: 4 }}>
            <Typography component={"h4"}>{rap.tenCumRap}</Typography>
            <Stack spacing={2} direction={"row"}>
              {rap.lichChieuPhim.map((lichChieu) => {
                  const times = dayjs(lichChieu.ngayChieuGioChieu).format(
                  "DD-MM-YYYY ~ HH:mm"
                );
                console.log("times", times);
                return <Button variant="outlined">{times}</Button>;
              })}
            </Stack>
          </Box>
        ))}
       
      </TabPanel>
    ))}

  </Box>
  <Box sx={{ bgcolor: "#F5ECEC",height:'20vh'}}></Box>
  </div>
  );
};

export default ShowTimes;
