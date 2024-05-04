import React, { FC, useEffect, useState } from "react";
import VideoPlayer from "@/common/components/VideoPlayer";
import CourseContents from "./contents/CourseContents";
import CourseDetails from "./details/CourseDetails";
import { Course as CourseType } from "../types/course";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { toggleCompleted } from "../store/courseSlice";

interface CourseProps {
  course: CourseType
}

const Course: FC<CourseProps> = ({ course }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [courseData, setCourseData] = useState<CourseType>(course);
  const [currentIndex, setCurrentIndex] = useState<number>();
  const [videoList, setVideoList] = useState<string[]>([]);

  useEffect(() => {
    setCourseData(course);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (courseData) {
      const idx = courseData.modules.findIndex((i) => !i.completed);
      setCurrentIndex(idx && idx > -1 ? idx : 0);
      setVideoList(courseData.modules.map((i) => i.videoUrl));
    }
  }, [courseData]);

  const updateCurrentIndex = (newIdx: number) => {
    if (currentIndex !== newIdx && newIdx >= 0 && newIdx < videoList.length) {
      setCurrentIndex(newIdx);
    }
  };

  const toggleComplete = (idx: number, isCompleted?: boolean) => {
    const currentValue = courseData.modules[idx].completed;
    const newValue = isCompleted !== undefined ? isCompleted : !currentValue;
    setCourseData({
      ...courseData,
      modules: courseData.modules.map((module, index) =>
        index === idx 
          ? { ...module, completed: newValue }
          : module
      )
    });
    dispatch(toggleCompleted({
      id: idx,
      completed: newValue
    }));
  };

  const onEnded = () => {
    toggleComplete(currentIndex!, true);
    updateCurrentIndex(currentIndex! + 1);
  };

  return (
    <>
      {
        courseData
          ? <>
              <VideoPlayer
                playingIndex={currentIndex ?? 0}
                videoList={videoList}
                updateIndex={updateCurrentIndex}
                onEnded={onEnded}
              />
              <CourseContents
                modules={courseData?.modules ?? []}
                currentIndex={currentIndex}
                updateIndex={updateCurrentIndex}
                toggleComplete={toggleComplete}
              />
              <CourseDetails overview={courseData.overview} review={courseData.review}/>
            </>
          : null
      }
    </>
  );
};

export default Course;