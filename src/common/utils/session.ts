import Cookies from "js-cookie";
import { UserApiResponse } from "@/modules/user/types/user";
import { API_URL } from "./urls";

export const addToken = (value: string) => {
  Cookies.set("token", value, { expires: 1 });
};

export const getToken = (): string | undefined => {
  return Cookies.get("token");
};

export const deleteToken = () => {
  Cookies.remove("token");
};

export const getVerifiedUser = async (token: string): Promise<UserApiResponse> => {
  const res = await fetch(`${API_URL}/api/user/verify`, {
    method: "POST",
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({ token })
  });
  const user = await res.json();
  return user;
};