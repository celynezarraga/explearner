import { Box, Heading } from "@chakra-ui/react";
import React, { FC } from "react";
import CourseItemsView from "../homepage/components/my-courses/CourseItemsView";
import { CourseItem } from "../homepage/types/courseItem";

interface AllCoursesProps {
  items: CourseItem[];
}

const AllCourses: FC<AllCoursesProps> = ({items}) => {
  return (
    <Box minHeight={"calc(82vh)"}>
      <Box m={5} p={5}>
        <Heading size={"lg"} color={"teal"}>My Courses</Heading>
      </Box>
      <Box my={5}>
        <CourseItemsView items={items}/>
      </Box>
    </Box>
  );
};

export default AllCourses;