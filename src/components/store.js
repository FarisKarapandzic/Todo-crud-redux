import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api"; // Putanja do vašeg apiSlice.js fajla
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import todoRecuder from "./TodoSlice";

export const store = configureStore({
    reducer: {
    todos:todoRecuder,
    [api.reducerPath]: api.reducer, // Dodajte api.reducer u store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch)