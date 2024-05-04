import React, { FC } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Overview } from "@/modules/course/types/course";
import OverviewStats from "./OverviewStats";
import OverviewAuthor from "./OverviewAuthor";

interface CourseOverviewProps {
  overview: Overview;
}

const CourseOverview: FC<CourseOverviewProps> = ({
  overview
}) => {
  const { description, author  } = overview;
  return (
    <Box m={3}>
      <Box mb={5}>
        <Heading size={"lg"}>About this course</Heading>
        { description.length > 0 && <Text ml={2} size={"sm"} color={"gray"}>{description}</Text> }
      </Box>
      <Box my={5}>
        <Heading size={"md"}>Stats</Heading>
        <OverviewStats stats={overview}/>
      </Box>
      <Box my={5}>
        <Heading size={"md"}>About the author</Heading>
        <OverviewAuthor author={author}/>
      </Box>
    </Box>
  );
};

export default CourseOverview;