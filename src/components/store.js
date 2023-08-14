import { configureStore } from "@reduxjs/toolkit";
import todoRecuder from "./TodoSlice";
export const store = configureStore({
reducer:{
 todos:todoRecuder,
},

})