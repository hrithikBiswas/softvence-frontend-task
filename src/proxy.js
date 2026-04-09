import { NextResponse } from 'next/server';
import { verifyToken } from '@/utils/helper';

export async function proxy(request) {
    const token = request.cookies.get('auth_token')?.value;
    // console.log('token', token);

    let isAuthenticated = false;
    if (token) {
        try {
            const decoded = verifyToken(token);
            isAuthenticated = decoded && decoded.userId;
        } catch (error) {
            isAuthenticated = false;
        }
    }

    const { pathname } = request.nextUrl;

    const authRoutes = ['/login', '/registration', '/verify-otp'];

    const isAuthRoute = authRoutes.some(
        (route) => pathname === route || pathname.startsWith(route),
    );
    // console.log('isAuthRoute:', isAuthRoute, isAuthenticated);

    if (isAuthRoute && isAuthenticated) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
