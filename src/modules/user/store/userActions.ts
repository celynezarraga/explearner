import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserLoginRequest, UserSignUpRequest } from "../types/user";
import { API_URL } from "@/common/utils/urls";

const USER_API = "/api/user";

export const signUpUser = createAsyncThunk(
  "user/signUp",
  async (data: UserSignUpRequest, { rejectWithValue }) => {
    try {
      const { firstName, lastName, email, password } = data;
      const response = await axios.post(`${API_URL}${USER_API}`, {
        firstName: firstName,
        lastName: lastName,
        email,
        password
      });
      return response.data.data;
    } catch (error) {
      // @ts-ignore
      return rejectWithValue({ message: error.response.data.message });
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (data: UserLoginRequest, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}${USER_API}/login`, data);
      return response.data.data;
    } catch (error) {
      // @ts-ignore
      return rejectWithValue({ message: error.response.data.message });
    }
  }
);