import { GROUP_CODE } from "../constants";
import fetcher from "./fetcher";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const getBannersAPI = async () => {
  try {
    const response = await fetcher.get("/QuanLyPhim/LayDanhSachBanner");
    return response.data.content; // [];
  } catch (error) {}
};

export const getListMoviePerPage = createAsyncThunk(
  "movie/getList",
  async (params) => {
    try {
      const response = await fetcher.get(
        "/QuanLyPhim/LayDanhSachPhimPhanTrang",
        {
          params: {
            maNhom: GROUP_CODE,
            soTrang: params.page || 1,
            soPhanTuTrenTrang: 8,
          },
        }
      );
      return response.data.content;
    } catch (error) {}
  }
);

export const getMovieDetailsAPI = async (movieId) => {
  try {
    const response = await fetcher.get("/QuanLyPhim/LayThongTinPhim", {
      params: {
        MaPhim: movieId,
      },
    });
    return response.data.content;
  } catch (error) {
    throw Error("error");
  }
};
export const getListMovieAPI = async () => {
  try {
    const response = await fetcher.get("/QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: GROUP_CODE,
      },
      //"/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&page=1&pageSize=10"
    });
    return response.data.content;
  } catch (error) {}
};