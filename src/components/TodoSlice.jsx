import React from "react";
import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload, completed: false }); // dodaje array 
    },
    deleteTodo: (state, action) => {
      state.splice(action.payload,1); // brise array 
    },
    toggleComplete: (state, action) => {
      const index = action.payload;
      state[index].completed = !state[index].completed; // mjenja vrijednost da li je completed ili ne
    },
    editTodo: (state, action) => {
      const { index, newText } = action.payload;
      state[index].text = newText;
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
