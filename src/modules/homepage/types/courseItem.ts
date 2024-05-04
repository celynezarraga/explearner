export type CourseItem = {
  title: string,
  currentModule: {
    number: number,
    title: string,
  },
  type: string,
  timeLeft: number,
  url: string
}

export type MyCourseItemsApiResponse = {
  data: CourseItem[],
  message: string,
  status: string,
}