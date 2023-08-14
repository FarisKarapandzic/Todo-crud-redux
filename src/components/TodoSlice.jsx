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
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = newText;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
