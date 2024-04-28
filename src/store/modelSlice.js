import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
  name: "model",
  initialState: {
    isOpen: false,
    videoLink: "",
  },
  reducers: {
    modelState: (state, action) => {
      state.isOpen = !state.isOpen;
      state.videoLink = action.payload;
    },
  },
});

export const { modelState } = modelSlice.actions;
export default modelSlice.reducer;
