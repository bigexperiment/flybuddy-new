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
  try {
    // Allow public routes without authentication
    if (isPublic(req)) {
      return;
    }

    // Add debug logging in production
    if (process.env.NODE_ENV === 'production') {
      console.log('Middleware processing request:', req.url);
    }
  } catch (error) {
    console.error('Clerk middleware error:', error);
    // Still throw the error to maintain Clerk's error handling
    throw error;
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}; 