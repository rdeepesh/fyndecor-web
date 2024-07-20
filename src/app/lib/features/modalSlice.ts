import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalOpen: (state, { payload }) => {
      state.open = payload.open;
    },
  },
});

export const { modalOpen } = modalSlice.actions;
export default modalSlice.reducer;
