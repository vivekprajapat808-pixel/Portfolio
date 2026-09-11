import { createSlice } from "@reduxjs/toolkit";
import projectsData, { filterCategories } from "../data/projects";

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    allProjects: projectsData,
    filteredProjects: projectsData,
    activeFilter: "All",
    categories: filterCategories,
  },
  reducers: {
    setFilter: (state, action) => {
      state.activeFilter = action.payload;
      if (action.payload === "All") {
        state.filteredProjects = state.allProjects;
      } else {
        state.filteredProjects = state.allProjects.filter((project) =>
          project.category.includes(action.payload)
        );
      }
    },
  },
});

export const { setFilter } = projectSlice.actions;
export default projectSlice.reducer;
