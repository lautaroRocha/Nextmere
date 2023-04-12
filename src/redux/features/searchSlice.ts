import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

type SearchState = {
  search: "",
  saga: "",
  books: [],
  filteredBooks: []
};

const initialState = {
  search: "",
  saga: "",
  books: [],
  filteredBooks: []
} as SearchState

export const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    reset: () => initialState,
    searchByInput: (state, action) => {
      state.search = action.payload;
    },
    searchBySaga: (state, action) => {
      state.saga = action.payload;
    },
    setBooks: (state, action) => {
      state.books = action.payload;
    }
  },

});

export const {
  reset,
  searchByInput,
  searchBySaga,
  setBooks
} = search.actions;
export default search.reducer;
