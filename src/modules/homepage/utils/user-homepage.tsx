import { CourseItem } from "../types/courseItem";

export const bannerImage: string = "assets/banner4.jpeg";

export const myCourseItems: CourseItem[] = [
  {
    title: "Typescript Tutorial for Angular/React Developers",
    currentModule: {
      number: 0,
      title: "Typescript Tutorial - TypeScript for React - Learn Typescript",
    },
    type: "Lecture",
    timeLeft: 51.5,
    url: "/course/101"
  },
  {
    title: "Git & GitHub",
    currentModule: {
      number: 1,
      title: "Git & GitHub: Branching and the GitHub Workflow",
    },
    type: "Lecture",
    timeLeft: 2.2,
    url: "/course/301"
  },
];