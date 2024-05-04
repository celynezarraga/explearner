import React, { FC } from "react";
import { useRouter } from "next/router";
import { Box, Heading, Stack, SimpleGrid, Text } from "@chakra-ui/react";
import { CourseItem as CourseItemType } from "../../types/courseItem";
import CourseItem from "./CourseItem";
import { URLS } from "@/common/utils/urls";
import CourseItemsView from "./CourseItemsView";

interface MyCoursesProps {
  items: CourseItemType[];
}

// NOTE: This shows up to 3 courses only.
// "See all courses" will redirect to another page listing all enrolled courses.

const MyCourses: FC<MyCoursesProps> = ({items}) => {
  const router = useRouter();

  const viewMyCourses = () => {
    void router.push(URLS.VIEW_ALL_COURSES);
  };

  return (
    <>
      <Box py={3} mx={4}>
        <Stack spacing="2">
          <Heading mt={2} size="lg">
            Continue learning your explored courses ...
          </Heading>
          <Text
            mt={2}
            size="lg"
            textDecoration={"underline"}
            cursor={"pointer"}
            color={"teal"}
            onClick={viewMyCourses}
          >
          View my courses
          </Text>
        </Stack>
      </Box>
      <CourseItemsView items={items}/>
    </>
  );
};

export default MyCourses;