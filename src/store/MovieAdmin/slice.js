import { createSlice } from "@reduxjs/toolkit";
import { getListMoviePerPage_manage } from "../../apis/movieApiAdmin";
const initialState = {
  movieList: [],
  isLoading: false,
  isLoaded: false,
  isLoaded_detail:false,
  maPhim:''
};
const MovieSlice = createSlice({
  name: "movieAdmin",
  initialState,
  reducers: {
    setMaPhim : (state,{payload})=>{
      state.maPhim=payload
    }
  },

  extraReducers: (builder) => {
    //List Movie
    builder.addCase(getListMoviePerPage_manage.fulfilled, (state, { payload }) => {
      state.isLoaded = false;
      state.movieList = payload.items;
    });
    builder.addCase(getListMoviePerPage_manage.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(getListMoviePerPage_manage.rejected, (state, { payload }) => {
      state.isLoaded = false;
    });
  },
});
export const { reducer: movieAdminReducer } = MovieSlice;
export const { setMaPhim } = MovieSlice.actions;
