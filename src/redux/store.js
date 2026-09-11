import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import projectReducer from "./projectSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    projects: projectReducer,
  },
});

export default store;
