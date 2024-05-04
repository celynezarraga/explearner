import { NextRequest, NextResponse } from "next/server";
import { URLS } from "@/common/utils/urls";
import { getVerifiedUser } from "./common/utils/session";
 
const PROTECTED_ROUTES: string[] = [URLS.COURSE];
const PUBLIC_ROUTES = [URLS.LOGIN, URLS.SIGN_UP];
 
const middleware = async(req: NextRequest) => {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = PROTECTED_ROUTES.some((route) => path.startsWith(route));
  const isPublicRoute = PUBLIC_ROUTES.some((route) => path.startsWith(route));

  const token = req.cookies.get("token")?.value;

  if (!token) {
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL(URLS.LOGIN, req.nextUrl));
    } else {
      return NextResponse.next();
    }
  }

  try {
    const validatedToken = await getVerifiedUser(token);
    const isValidToken = validatedToken.status === "success";

    if (isPublicRoute && isValidToken) {
      return NextResponse.redirect(new URL(URLS.HOMEPAGE, req.nextUrl));
    }
    if (isProtectedRoute && !isValidToken) {
      return NextResponse.redirect(new URL(URLS.LOGIN, req.nextUrl));
    }
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL(URLS.LOGIN, req.nextUrl));
  }
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

export default middleware;