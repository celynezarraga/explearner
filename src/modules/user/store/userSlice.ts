import { createSlice } from "@reduxjs/toolkit";
import { UserDataResponse } from "../types/user";
import { loginUser, signUpUser } from "./userActions";
import { deleteToken } from "@/common/utils/session";

interface UserData {
  loading: boolean,
  info?: UserDataResponse,
  token?: string,
  error?: string,
  success: boolean,
}

const initialState: UserData = {
  loading: false,
  info: undefined,
  token: undefined,
  error: undefined,
  success: false,
};


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.info = action.payload;
      state.token = action.payload.token;
    },
    logout: () => {
      deleteToken();
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = undefined;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.info = action.payload;
        state.token = action.payload.token;
        state.success = true;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        // @ts-ignore
        state.error = action.payload.message;
      });

    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = undefined;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.info = action.payload;
        state.token = action.payload.token;
        state.success = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        // @ts-ignore
        state.error = action.payload.message;
      });
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;