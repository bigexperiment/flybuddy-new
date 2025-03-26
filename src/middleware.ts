import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes that don't require authentication
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
];

const isPublic = createRouteMatcher(publicPaths);

export default clerkMiddleware((auth, req) => {
  // Allow public routes without authentication
  if (isPublic(req)) {
    return;
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}; 