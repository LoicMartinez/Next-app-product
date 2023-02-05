import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // if (request.nextUrl.pathname.startsWith('/login')) {
    //     console.log(request)
    //     return NextResponse.redirect(new URL('/', request.url))
    // }

    if (request.nextUrl.pathname.startsWith('/test')) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}
