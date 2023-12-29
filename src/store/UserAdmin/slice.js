import { createSlice } from "@reduxjs/toolkit";
import { getListUserPerPage_manage } from "../../apis/userAPIAdmin";
const initialState = {
  userList: [],
  isLoading: false,
  isLoaded: false,
  isLoaded_detail:false,
  taiKhoan:''
};
const UserSlice = createSlice({
  name: "userAdmin",
  initialState,
  reducers: {
    setTaiKhoan : (state,{payload})=>{
      state.taiKhoan=payload
    }
  },

  extraReducers: (builder) => {
    //List Movie
    builder.addCase(getListUserPerPage_manage.fulfilled, (state, { payload }) => {
      state.isLoaded = false;
      state.userList = payload.items;
    });
    builder.addCase(getListUserPerPage_manage.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(getListUserPerPage_manage.rejected, (state, { payload }) => {
      state.isLoaded = false;
    });
  },
});
export const { reducer: userAdminReducer } = UserSlice;
export const { setTaiKhoan } = UserSlice.actions;
