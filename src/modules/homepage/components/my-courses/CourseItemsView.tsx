import React, { FC } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import CourseItem from "./CourseItem";
import { CourseItem as CourseItemType } from "../../types/courseItem";

interface CourseItemsViewProps {
  items: CourseItemType[];
}

const CourseItemsView: FC<CourseItemsViewProps> = ({ items }) => {
  return (
    <SimpleGrid p={3} mt={2} spacing={4} templateColumns="repeat(auto-fill, minmax(450px, 1fr))">
      {
        items.map((item, index) => {
          return <CourseItem
            key={index}
            item={item}
          />;
        })
      }
    </SimpleGrid>
  );
};

export default CourseItemsView;