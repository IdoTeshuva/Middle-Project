import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { nameValue: false, openValue: false},
  reducers: {
    hello: (state) => {
      state.nameValue = true;
    },
    matan: (state) => {
      state.nameValue = false;
    },
    opened: (state) => {
      state.openValue = true;
    },
    notOpened: (state) => {
      state.openValue = false;
    },
  },
});

export const { hello,matan,opened,notOpened } = counterSlice.actions;
export const selectName = (state) => state.counter.nameValue;
export const selectOpen = (state) => state.counter.openValue;

export default counterSlice.reducer;