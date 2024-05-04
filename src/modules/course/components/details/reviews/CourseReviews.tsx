import React, { FC } from "react";
import { Box, Heading } from "@chakra-ui/react";
import CourseReviewItem from "./CourseReviewItem";
import { CourseReview } from "@/modules/course/types/course";
import Rating from "@/common/components/Rating";

interface CourseReviewsProps {
  review: CourseReview;
}

const CourseReviews: FC<CourseReviewsProps> = ({ review }) => {
  const { rating, reviews } = review;
  return (
    <Box m={3}>
      <Box mb={5}>
        <Heading size={"lg"}>Learners feedback</Heading>
        <Box mx={3}>
          <Rating rating={rating}/>
        </Box>
      </Box>
      <Box my={5}>
        <Heading size={"lg"}>Reviews</Heading>
        <Box mx={3}>
          {reviews.map((item, index) => <CourseReviewItem key={index} review={item}/>)}
        </Box>
      </Box>
    </Box>
  );
};

export default CourseReviews;