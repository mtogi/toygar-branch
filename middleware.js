import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;
  
  // Define paths that are public (can be accessed without authentication)
  const publicPaths = ['/', '/login', '/register', '/about', '/faq'];
  const isPublicPath = publicPaths.includes(path) || 
                       path.startsWith('/api/') || 
                       path.includes('.');
  
  // Get the token
  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  });
  
  // Redirect logic
  const isAuthenticated = !!token;
  
  // If the path requires authentication and the user is not authenticated,
  // redirect to the login page
  if (!isPublicPath && !isAuthenticated) {
    // Special case for purchase page to add a query parameter for redirect message
    if (path === '/purchase') {
      return NextResponse.redirect(new URL('/login?purchaseRedirect=true', request.url));
    }
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // If the user is authenticated and trying to access login/register,
  // redirect to dashboard
  if (isAuthenticated && (path === '/login' || path === '/register')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  // Otherwise, continue with the request
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}; 