import { NextResponse } from 'next/server';

export function middleware(request) {
  const isLoggedIn = request.cookies.get('isLoggedIn');

  // Jodi keu /add-item e jete chay kintu login kora na thake
  if (request.nextUrl.pathname.startsWith('/add-item')) {
    if (!isLoggedIn) {
      // Login page-e pathiye dao
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
}