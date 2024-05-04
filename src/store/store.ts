import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../modules/course/store/courseSlice";
import userReducer from "../modules/user/store/userSlice";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const store =  configureStore({
  reducer: {
    course: courseReducer,
    user: userReducer
  }
});

export default store;