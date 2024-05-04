import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NextPage } from "next";
import cookie from "cookie";
import { RootState } from "@/store/store";
import { UserDataResponse, UserApiResponse } from "@/modules/user/types/user";
import { getVerifiedUser } from "@/common/utils/session";
import NavigationBar from "@/common/components/NavigationBar";
import Footer from "@/common/components/Footer";
import Loading from "@/common/components/Loading";
import { CourseItem } from "@/modules/homepage/types/courseItem";
import { API_URL } from "@/common/utils/urls";
import AllCourses from "@/modules/all-courses/AllCourses";

type AllCoursesPageProps = {
  user: UserDataResponse;
}

const AllCoursesPage: NextPage<AllCoursesPageProps> = ({ user }) => {
  
  const [courseItems, setCourseItems] = useState<CourseItem[]>();

  const { token } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    const fetchCourseItems = async () => {
      const res = await fetch(`${API_URL}/api/user/courses`, {
        method: "GET",
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json; charset=UTF-8",
          "Authorization": `Bearer ${token}`
        }
      });
      const items = await res.json();
      setCourseItems(items.data);
      return items.data;
    };

    fetchCourseItems();
  }, [token]);

  return (
    <>
     <NavigationBar />
      {
        courseItems
          ? <AllCourses items={courseItems}/>
          : <Loading />
      }
      <Footer />
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

export default AllCoursesPage;