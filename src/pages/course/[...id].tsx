import React, { useEffect } from "react";
import { NextPage } from "next";
import cookie from "cookie";
import Course from "@/modules/course/components/Course";
import NavigationBar from "@/common/components/NavigationBar";
import Footer from "@/common/components/Footer";
import { UserApiResponse, UserDataResponse } from "@/modules/user/types/user";
import { getVerifiedUser } from "@/common/utils/session";
import { setUser } from "@/modules/user/store/userSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

type CoursePageProps = {
  user: UserDataResponse;
}

const CoursePage: NextPage<CoursePageProps> = ({ user }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { info } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    if (!info && user) {
      dispatch(setUser(user));
    }
  }, [dispatch, info, user]);

  return (
    <>
      <NavigationBar withDrawer={true}/>
      <Course />
      <Footer withDrawer={true}/>
    </>
  );
};

// @ts-ignore
export const getServerSideProps = (async (context) => {
  try {
    const cookies = cookie.parse(context.req.headers.cookie);
    const user: UserApiResponse = await getVerifiedUser(cookies.token);
    return {
      props: {
        user: user.data
      }
    };
  } catch (error) {
    return {
      props: {}
    };
  }
});

export default CoursePage;