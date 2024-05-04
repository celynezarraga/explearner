import { CourseApiResponse } from "@/modules/course/types/course";
import { GIT_COURSE, TYPESCRIPT_COURSE } from "@/modules/course/utils/course";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<CourseApiResponse>,
) => {
  const id = req.query.id?.[0];
  switch (id) {
    case "101": {
      res.status(200).json({
        data: TYPESCRIPT_COURSE,
        message: "Course fetched successfully.",
        status: "success"
      });
      break;
    }
    case "301": {
      res.status(200).json({
        data: GIT_COURSE,
        message: "Course fetched successfully.",
        status: "success"
      });
      break;
    }
    default: {
      res.status(500).json({
        data: undefined,
        message: "Internal Server Error.",
        status: "error"
      });
      break;
    }
  }
};

export default handler;
