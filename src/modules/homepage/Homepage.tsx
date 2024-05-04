import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import { RootState } from "@/store/store";
import Banner from "@/common/components/Banner";
import MyCourses from "./components/my-courses/MyCourses";
import Loading from "@/common/components/Loading";
import { API_URL } from "@/common/utils/urls";
import { CourseItem } from "./types/courseItem";
import { bannerImage } from "./utils/user-homepage";

const Homepage = () => {
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
      <Box mx={4}>
        <Banner imageUrl={bannerImage} />
        {
          courseItems
            ? <Box my={4}>
              <MyCourses items={courseItems.slice(0, 3)}/>
            </Box>
          : <Loading height={"300px"}/>
        }
      </Box>
    </>
  );
};

export default Homepage;