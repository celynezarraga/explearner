import { URLS } from "./urls";

export interface LinkProps {
  id: string;
  label: string;
  url: string;
}

export const NAV_BAR_LINKS: LinkProps[] = [
  {
    id: "login",
    label: "Login",
    url: URLS.LOGIN
  },
  {
    id: "sign-up",
    label: "Sign up",
    url: URLS.SIGN_UP
  }
];