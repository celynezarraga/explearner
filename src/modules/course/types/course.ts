export type Course = {
  id: string;
  title: string;
  author: string;
  modules: Module[];
  overview: Overview;
  review: CourseReview;
};

export type Module = {
  id: string;
  title: string;
  length: number;
  videoUrl: string;
  completed?: boolean;
};

export type Overview = {
  description: string;
  skillLevel: string;
  learnersCount: number;
  language: string[];
  captions?: boolean;
  author: Author;
}

export type Author = {
  name: string;
  description: string;
}

export type CourseReview = {
  rating: number;
  reviews: LearnerReview[];
}

export type LearnerReview = {
  author: string;
  rating: number;
  comment?: string; 
}