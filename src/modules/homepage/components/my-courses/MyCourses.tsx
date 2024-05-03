import React, { FC } from "react";
import { Box, Heading, Stack, SimpleGrid, Text } from "@chakra-ui/react";
import { CourseItem as CourseItemType } from "../../types/courseItem";
import CourseItem from "./CourseItem";

interface MyCoursesProps {
  items: CourseItemType[];
}

// NOTE: This shows up to 3 courses only.
// "See all courses" will redirect to another page listing all enrolled courses.

const MyCourses: FC<MyCoursesProps> = ({items}) => {

  const seeAllCoursesHandler = () => {
    // TO DO: redirect to user courses page
  };

  return (
    <>
      <Box py={3} mx={4}>
        <Stack spacing='2'>
          <Heading mt={2} size='lg'>
            Continue learning your explored courses ...
          </Heading>
          {
            items.length > 3 &&
            <Text
              mt={2}
              size='lg'
              textDecoration={"underline"}
              cursor={"pointer"}
              color={"teal"}
              onClick={seeAllCoursesHandler}
            >
            See all courses.
            </Text>
          }
        </Stack>
      </Box>
      <SimpleGrid p={3} mt={2} spacing={4} templateColumns='repeat(auto-fill, minmax(450px, 1fr))'>
        {
          items.map((item, index) => {
            return <CourseItem
              key={index}
              item={item}
            />;
          })
        }
      </SimpleGrid>
    </>
  );
};

export default MyCourses;