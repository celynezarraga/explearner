import React, { FC, useEffect, useState } from "react";
import { Progress, Text } from "@chakra-ui/react";
import { Module } from "../../types/course";

interface CourseProgressTrackerProps {
  modules: Module[];
}

// Note: Progress is calculated based on length of videos.
const CourseProgressTracker: FC<CourseProgressTrackerProps> = ({ modules }) => {

  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    const calculate = () => {
      let totalLength = 0;
      let currrentProgress = 0;
      modules.forEach((item) => {
        totalLength+= item.length;
        if (item.completed) {
          currrentProgress+= item.length;
        }
      });
      setValue(Number(((currrentProgress / totalLength) * 100).toFixed(2)));
    };

    calculate();
  }, [modules]);

  return (
    <>
      <Text size={"sm"} color={"gray"}>{ `${value}%` }</Text>
      <Progress
        colorScheme={"teal"}
        value={value}
      />
    </>
  );
};

export default CourseProgressTracker;