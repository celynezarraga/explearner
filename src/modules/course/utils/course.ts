import { Course } from "../types/course";

export const SAMPLE_COURSE: Course = {
  id: "1",
  title: "React JS",
  author: "Ravidrababu",
  modules: [
    {
      id: "react1",
      title: "Test 1",
      length: 5,
      videoUrl: "https://www.youtube.com/embed/QhBnZ6NPOY0",
      completed: true,
    },
    {
      id: "react2",
      title: "Test 2",
      length: 10,
      videoUrl: "https://www.youtube.com/embed/QhBnZ6NPOY0",
      completed: false,
    },
    {
      id: "react3",
      title: "Test 3",
      length: 15,
      videoUrl: "https://www.youtube.com/embed/QhBnZ6NPOY0",
      completed: false,
    }
  ],
  overview: {
    description: "Lorem ipsum",
    skillLevel: "Beginner",
    learnersCount: 598345,
    language: ["english"],
    captions: true,
    author: {
      name: "Summer Bree",
      description: "She is a software engineer."
    }
  },
  review: {
    rating: 4,
    reviews: [
      {
        author: "Learner 1",
        rating: 4,
        comment: "Highly recommended"
      },
      {
        author: "Learner 2",
        rating: 5
      },
      {
        author: "Learner 3",
        rating: 3,
        comment: "Highly recommended"
      }
    ]
  }
};