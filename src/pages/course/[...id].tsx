import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextPage } from "next";
import { useRouter } from "next/router";
import cookie from "cookie";
import { AppDispatch, RootState } from "@/store/store";
import NavigationBar from "@/common/components/NavigationBar";
import Footer from "@/common/components/Footer";
import { URLS } from "@/common/utils/urls";
import Loading from "@/common/components/Loading";
import { UserApiResponse, UserDataResponse } from "@/modules/user/types/user";
import { getVerifiedUser } from "@/common/utils/session";
import { setUser } from "@/modules/user/store/userSlice";
import { getCourse } from "@/modules/course/store/courseActions";
import { reset } from "@/modules/course/store/courseSlice";
import Course from "@/modules/course/components/Course";

type CoursePageProps = {
  user: UserDataResponse;
  courseId: string;
}

const CoursePage: NextPage<CoursePageProps> = ({ user, courseId }) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { info } = useSelector(
    (state: RootState) => state.user
  );

  const { course, loading, error } = useSelector(
    (state: RootState) => state.course
  );

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!info && user) {
      dispatch(setUser(user));
    }
  }, [dispatch, info, user]);

  useEffect(() => {
    if (!course) {
      dispatch(getCourse({id: courseId}));
    }
  }, [course, courseId, dispatch]);

  useEffect(() => {
    if (!loading && error) {
      void router.push(URLS.NOT_FOUND);
    }
  }, [loading, error, router]);

  return (
    <>
     <NavigationBar withDrawer={true}/>
      { loading && <Loading /> }
      { !loading && course && <Course course={course}/> }
      <Footer withDrawer={true}/>
    </>
  );
};

// @ts-ignore
export const getServerSideProps = (async (context) => {
  try {
    const courseId = context.params.id[0] ?? null;
    const cookies = cookie.parse(context.req.headers.cookie);
    const user: UserApiResponse = await getVerifiedUser(cookies.token);
    return {
      props: {
        user: user.data,
        courseId
      }
    };
  } catch (error) {
    return {
      props: {}
    };
  }
});

export default CoursePage;