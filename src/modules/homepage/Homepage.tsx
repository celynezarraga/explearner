import React from "react";
import { Box } from "@chakra-ui/react";
import Banner from "@/common/components/Banner";
import MyCourses from "./components/my-courses/MyCourses";
import { bannerImage, myCourseItems } from "./utils/user-homepage";

const Homepage = () => {
  return (
    <>
      <Box mx={4}>
        <Banner imageUrl={bannerImage} />
        <Box my={4}>
          <MyCourses items={myCourseItems}/>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;