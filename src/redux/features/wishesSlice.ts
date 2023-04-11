import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type WishesState = {
  value: [] ;
};

const initialState = {
  value: [],
} as WishesState;

export const wishes = createSlice({
  name: "wishes",
  initialState,
  reducers: {
    reset: () => initialState,
    add: (state, action: PayloadAction<object>) => {
      state.value.push(action.payload);
    },
    remove: (state, action: PayloadAction<object>) => {
      const sentID = action.payload.id
      const indexToRemove = state.value.findIndex( (ele) => ele.id === sentID)
      console.log(indexToRemove)
      state.value.splice(indexToRemove, 1)
    }
  },
});

export const {
  add,
  remove,
  reset,
} = wishes.actions;
export default wishes.reducer;
