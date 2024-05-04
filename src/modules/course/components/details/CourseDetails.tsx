import React, { FC } from "react";
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from "@chakra-ui/react";
import CourseOverview from "./overview/CourseOverview";
import CourseReviews from "./reviews/CourseReviews";
import { CourseReview, Overview } from "../../types/course";

interface CourseDetailsProps {
  overview: Overview;
  review: CourseReview;
}

const CourseDetails: FC<CourseDetailsProps> = ({
  overview, review
}) => {

  const tabs = [
    {
      header: "Overview",
      content: <CourseOverview overview={overview}/>
    },
    {
      header: "Reviews",
      content: <CourseReviews review={review}/>
    },
  ];

  return (
    <Box my={4}>
      <Tabs>
        <TabList>
          {
            tabs.map((tab, index) => {
              return <Tab key={index}>{tab.header}</Tab>;
            })
          }
        </TabList>

        <TabPanels>
          {
            tabs.map((tab, index) => {
              return <TabPanel key={index}>{tab.content}</TabPanel>;
            })
          }
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default CourseDetails;