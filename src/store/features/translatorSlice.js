import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  translateText: "",
};

export const translatorSlice = createSlice({
  name: "translatorText",
  initialState,
  reducers: {
    setTranslatorText: (state, action) => {
      state.translateText = action.payload;
    },
  },
});

export const { setTranslatorText } = translatorSlice.actions;
export default translatorSlice.reducer;
