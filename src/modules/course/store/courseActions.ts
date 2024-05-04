import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetCourseApiRequest } from "../types/course";
import { API_URL } from "@/common/utils/urls";

const COURSE_API = "/api/course";

export const getCourse = createAsyncThunk(
  "course/getCourse",
  async (data: GetCourseApiRequest, { rejectWithValue }) => {
    try {
      const { id } = data;
      const response = await axios.get(`${API_URL}${COURSE_API}/${id}`);
      return response.data.data;
    } catch (error) {
      // @ts-ignore
      return rejectWithValue({ message: error.response.data.message });
    }
  }
);