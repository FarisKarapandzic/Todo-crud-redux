import { createSlice } from "@reduxjs/toolkit";

let nextTodoId = 1;

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    setTodos: (state, action) => {
      return action.payload;
    },
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        title: action.payload.text, // Set text property based on payload
        body: action.payload.description, // Set description property based on payload
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.title = newText;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete, updateTodo, setTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
