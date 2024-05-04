import React, { FC } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Icon, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { LearnerReview } from "@/modules/course/types/course";
import Rating from "@/common/components/Rating";

interface CourseReviewItemProps {
  review: LearnerReview;
}

const CourseReviewItem: FC<CourseReviewItemProps> = ({ review }) => {
  const { author, rating, comment } = review;
  return (
    <Flex direction={"row"} align={"center"} m={5} p={3} borderWidth={2} maxWidth={"md"}>
      <Flex align={"center"} mr={3}>
          <Icon boxSize={"10"} as={FaRegUserCircle} color={"gray"}/>
        </Flex>
      <Stack>
        <Heading size="md">{author}</Heading>
        { comment && <Text ml={2} size={"sm"} color={"gray"}>{comment}</Text> }
        <Stack direction={"row"}>
          <Rating rating={rating} />
        </Stack>
      </Stack>
    </Flex>
  );
};

export default CourseReviewItem;