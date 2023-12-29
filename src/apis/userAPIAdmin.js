import { GROUP_CODE } from "../constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import fetcher from "./fetcher";
export const getListUserPerPage_manage = createAsyncThunk(
  "userAdmin/getList",
  async (params) => {
    try {
      const response = await fetcher.get(
        "/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang",
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
export const deleteUser_manage = createAsyncThunk(
    "userAdmin/deleteUser",
    async (params) => {
      try {
        const response = await fetcher.delete("/QuanLyNguoiDung/XoaNguoiDung", {
          params: {
            TaiKhoan: params,
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
  
  export const editUserAPI = async (payload) => {
    try {
      const response = await fetcher.put(
        "/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        payload
      );
      return response.data.content;
    } catch (error) {
      if (error.response.status == 401) {
        alert("Không đủ quyền truy cập");
      }
    }
  };
  export const addUserAPI = async (payload) => {
    try {
      const response = await fetcher.post(
        "/QuanLyNguoiDung/ThemNguoiDung",
        payload
      );
      if (response.status==200) {
        alert('Thêm người dùng thành công')
      }
      return response.data.content;
    } catch (error) {
        if (error.response.status == 401) {
            alert("Không đủ quyền truy cập");
          }
    }
  };
  
  