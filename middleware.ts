import { NextRequest, NextResponse } from 'next/server'
import { verifySession } from './app/(auth)/login/_components/session'
 
// 1. Specify protected and public routes
const authRoutes = ['/login', '/register']
 
export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname
  const isProtectedRoute = path.startsWith('/profile')
  const isAdminRoutes = path.startsWith('/dashboard')
  const isAuthRoutes = authRoutes.includes(path)
 
  // 3. Decrypt the session from the cookie
  const session = await verifySession()

  if(session.isAuth && isAuthRoutes){
    return NextResponse.redirect(new URL('/profile', req.nextUrl))
  }

  if(isProtectedRoute && !session.isAuth){
    return NextResponse.redirect(new URL('/login', req.nextUrl))
}

if(isProtectedRoute && session.user?.role === 'admin'){
  return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
}

if(isAdminRoutes && session.user?.role !== 'admin'){
    return NextResponse.redirect(new URL('/login', req.nextUrl))
}

return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}