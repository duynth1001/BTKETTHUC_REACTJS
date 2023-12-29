import { GROUP_CODE } from "../constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import fetcher from "./fetcher";
export const getListMoviePerPage_manage = createAsyncThunk(
  "movieAdmin/getList",
  async (params) => {
    try {
      const response = await fetcher.get(
        "/QuanLyPhim/LayDanhSachPhimPhanTrang",
        {
          params: {
            maNhom: GROUP_CODE,
            soTrang: params.page || 1,
            soPhanTuTrenTrang: 5,
          },
        }
      );
      return response.data.content;
    } catch (error) {}
  }
);


export const deleteMovie_manage = createAsyncThunk(
  "movieAdmin/deleteMovie",
  async (params) => {
    try {
      const response = await fetcher.delete("/QuanLyPhim/XoaPhim", {
        params: {
          MaPhim: params,
        },
      });
      return response.data.content;
    } catch (error) {
      if (error.response.status == 401) {
        alert("Không đủ quyền truy cập");
      }
    }
  }
);

export const editMovieAPI = async (payload) => {
  try {
    const response = await fetcher.post(
      "/QuanLyPhim/CapNhatPhimUpload",
      payload
    );
    return response.data.content;
  } catch (error) {
    if (error.response.status == 401) {
      alert("Không đủ quyền truy cập");
    }
  }
};
export const addMovieAPI = async (payload) => {
  try {
    const response = await fetcher.post(
      "/QuanLyPhim/ThemPhimUploadHinh",
      payload
    );
    if (response.status==200) {
      alert('Thêm phim thành công')
    }
    return response.data.content;
  } catch (error) {
    throw "Lỗi rồi";
  }
};

