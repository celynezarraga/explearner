import type { NextApiRequest, NextApiResponse } from "next";
import { UserApiResponse } from "@/modules/user/types/user";

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<UserApiResponse>,
) => {
  const token = req.body.token;
  res.status(200).json({
    data: {
      id: "1234-5678-abcd-efgh",
      email: "john.doe@gmail.com",
      firstName: "John",
      lastName: "Doe",
      token
    },
    message: "User verified successfully.",
    status: "success"
  });
};

export default handler;
