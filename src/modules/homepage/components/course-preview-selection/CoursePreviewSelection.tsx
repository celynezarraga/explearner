import React, { FC } from "react";
import CoursePreviewSelectionItem from "./CoursePreviewSelectionItem";
import SliderComponent from "@/common/components/SliderComponent";
import { CoursePreview } from "../../types/coursePreview";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";

interface CoursePreviewSelectionProps {
  items: CoursePreview[];
}

const CoursePreviewSelection: FC<CoursePreviewSelectionProps> = ({
  items
}) => {

  const settings = {
    arrows: false,
    dots: false,
    slidesToShow: items.length < 4 ? items.length : 4,
    slidesToScroll: items.length < 4 ? items.length : 4,
  };

  return (
    <>
      <Box py={3} mx={4}>
        <Stack spacing='2'>
          <Heading mt={2} size='lg'>
            Explore courses and learn new things
          </Heading>
          <Text mt={2} size='lg' fontStyle={"italic"}>
            Look into vast options of courses to explore and learn.
          </Text>
        </Stack>
      </Box>
      <SliderComponent
        settings={settings}
        hideArrows={items.length < 4}
      >
        {
          items.map((item, index) =>
            <CoursePreviewSelectionItem
              key={index}
              item={item}
            />
          )
        }
      </SliderComponent>
    </>
  );
};

export default CoursePreviewSelection;