import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", //slicenin ismi

  
  initialState: { count: 0, theme: "dark" }, //ilk state
  //state'in nasıl değişieceğini karar veren fonksiyonlar
  //redecer fonksiyonları
  reducers: {
    increase: (state) => {
      state.count ++;
    },

    decrease: (state) => {
        state.count > 0 &&   state.count--; 
    },
    reset: (state,action) => {
      state.count = action.payload;
    },

    //payloadı olan reducer fonksiyornu
    
  },
});
export const {increase,decrease,reset} =counterSlice.actions;


export default counterSlice.reducer;
