import { clerkMiddleware, createRouteMatcher, getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
const publicPaths = [
  '/',
  '/login(.*)',
  '/register(.*)',
  '/verify-email(.*)',
  '/forgot-password(.*)',
  '/reset-password(.*)',
  '/about',
  '/travel-mates',
  '/travel-mates/(.*)',
  '/blog',
  '/blog/(.*)',
  '/testimonials',
  '/contact',
  '/faq',
  '/terms',
  '/terms-of-service',
  '/privacy',
  '/privacy-policy',
  '/api(.*)',
  '/_next(.*)',
  '/favicon.ico',
];

const isPublic = createRouteMatcher(publicPaths);

export default clerkMiddleware((auth, req) => {
  const { userId } = getAuth(req);
  
  if (isPublic(req)) {
    return NextResponse.next();
  }

  // If the user is not signed in and the route is private, redirect them to sign in
  if (!userId) {
    const signInUrl = new URL('/login', req.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}; 