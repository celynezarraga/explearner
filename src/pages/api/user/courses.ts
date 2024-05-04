import type { NextApiRequest, NextApiResponse } from "next";
import { MyCourseItemsApiResponse } from "@/modules/homepage/types/courseItem";
import { myCourseItems } from "@/modules/homepage/utils/user-homepage";

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<MyCourseItemsApiResponse>,
) => {
  res.status(200).json({
    data: myCourseItems,
    message: "User courses fetched successfully.",
    status: "success"
  });
};

export default handler;
