import { createSlice } from "@reduxjs/toolkit";
import { getCourse } from "./courseActions";
import { Course } from "../types/course";

interface UserData {
  loading: boolean,
  course?: Course,
  error?: string,
  success: boolean,
}

const initialState: UserData = {
  loading: false,
  course: undefined,
  error: undefined,
  success: false,
};


export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    toggleCompleted: (state, action) => {
      const { id, completed } = action.payload;
      state.course!.modules[id].completed = completed;
    },
    reset: () => {
      return initialState;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCourse.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = undefined;
      })
      .addCase(getCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.course = action.payload;
        state.success = true;
      })
      .addCase(getCourse.rejected, (state, action) => {
        state.loading = false;
        // @ts-ignore
        state.error = action.payload.message;
      });
  },
});

export const { setCourse, toggleCompleted, reset } = courseSlice.actions;

export default courseSlice.reducer;