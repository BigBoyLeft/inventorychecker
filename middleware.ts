import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

// this middleware should run on every page to check if the user is authorized

export default auth((req) => {
  // const isAuthorized = req?.auth?.user?.isAuthorized;
  const loginUrl = new URL("/api/auth/signin", req?.url).toString();

  // if (!isAuthorized && req?.url !== loginUrl) {
  //   return NextResponse.redirect(loginUrl);
  // }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
