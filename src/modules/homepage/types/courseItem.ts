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