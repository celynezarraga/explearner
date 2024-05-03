import type { NextApiRequest, NextApiResponse } from "next";
import { UserApiResponse } from "@/modules/user/types/user";

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<UserApiResponse>,
) => {
  res.status(200).json({
    data: {
      id: "1234-5678-abcd-efgh",
      email: req.body.email,
      firstName: "John",
      lastName: "Doe",
      token: "sample-token"
    },
    message: "User signed up successfully.",
    status: "success"
  });
};

export default handler;
