import { CourseItem } from "../types/courseItem";

export const bannerImage: string = "assets/banner4.jpeg";

export const myCourseItems: CourseItem[] = [
  {
    title: "React JS Frontend Web Development",
    currentModule: {
      number: 1,
      title: "Modern Javascript",
    },
    type: "Lecture",
    timeLeft: 5,
    url: "/course/1"
  },
  {
    title: "Angular JS Frontend Web Development",
    currentModule: {
      number: 1,
      title: "Initial Setup and Configuration",
    },
    type: "Lecture",
    timeLeft: 25,
    url: "/course/2"
  },
];