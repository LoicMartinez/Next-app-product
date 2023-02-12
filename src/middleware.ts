import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const userToken = request.cookies.get('token')

    if (userToken) {
        if (pathname.startsWith('/login')) {
            return NextResponse.redirect(new URL('/', request.url));
        }
        return NextResponse.next();
    }

    if (!pathname.startsWith('/login')) {
        return NextResponse.rewrite(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/login', '/', '/products'],
};