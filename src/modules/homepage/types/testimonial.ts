export type Testimonial = {
  id: string;
  content: string;
  author: string;
  course: {
    title: string;
    url: string;
  }
};