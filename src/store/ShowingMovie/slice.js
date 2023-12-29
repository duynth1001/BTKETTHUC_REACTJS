import { createSlice } from "@reduxjs/toolkit";
import { getListMoviePerPage } from "../../apis/movieApi";
import { displayFilterMovieList, filterMovieList } from "../../ulti/ulti";
const initialState = {
  movieList: [],
  isLoading: false,
  isLoaded: false,
  showingList: [],
  listState: "",
};
const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieList: (state, { payload }) => {
      const temp = filterMovieList(state.movieList, payload);
      state.showingList = displayFilterMovieList(temp);
      state.listState = payload;
    },
 
  },
  extraReducers: (builder) => {
    builder.addCase(getListMoviePerPage.fulfilled, (state, { payload }) => {
      state.isLoaded = false;
      state.movieList = payload.items;
      if (state.listState !== '') {
        const temp = filterMovieList(state.movieList, state.listState);
        state.showingList = displayFilterMovieList(temp);
        
      } else {
        const temp = filterMovieList(state.movieList, "hot");
        state.showingList = displayFilterMovieList(temp);
      }
    });
    builder.addCase(getListMoviePerPage.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(getListMoviePerPage.rejected, (state, { payload }) => {
      state.isLoaded = false;
    });
  },
});
export const { reducer: movieReducer } = MovieSlice;
export const { setMovieList } = MovieSlice.actions;
