import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { nameValue: false, openValue: false, logValue: false},
  reducers: {
    regisOpened: (state) => {
      state.nameValue = true;
    },
    regisNotOpened: (state) => {
      state.nameValue = false;
    },
    loginOpened: (state) => {
      state.openValue = true;
    },
    loginNotOpened: (state) => {
      state.openValue = false;
    },
    logged: (state) => {
      state.logValue = true;
    },
    notLogged: (state) => {
      state.logValue = false;
    },
    // changeName: (state) => {
    //   state.loginName = loginName;
    // }
  },
});

export const { regisOpened,regisNotOpened,loginOpened,loginNotOpened, logged, notLogged } = counterSlice.actions;
export const selectName = (state) => state.counter.nameValue;
export const selectOpen = (state) => state.counter.openValue;
export const selectLog = (state) => state.counter.logValue;

export default counterSlice.reducer;