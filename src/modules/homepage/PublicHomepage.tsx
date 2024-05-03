import React from "react";
import { Box } from "@chakra-ui/react";
import ImageCarousel from "@/common/components/ImageCarousel";
import CoursePreviewSelection from "./components/course-preview-selection/CoursePreviewSelection";
import Testimonials from "./components/testimonials/Testimonials";
import {
  carouselImages,
  coursePreviewItems,
  testimonialItems
} from "./utils/public-homepage";

const PublicHomepage = () => {
  return (
    <>
      <Box mx={4}>
        <ImageCarousel images={carouselImages}/>
        <Box mt={4}>
          <CoursePreviewSelection items={coursePreviewItems}/>
        </Box>
        <Box mt={4}>
          <Testimonials items={testimonialItems}/>
        </Box>
      </Box>
    </>
  );
};

export default PublicHomepage;