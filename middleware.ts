import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ar"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if the pathname is missing a locale
    const pathnameHasLocale = locales.some(
        (locale) =>
            pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (!pathnameHasLocale) {
        // Get preferred language from cookie or use default
        const preferredLocale =
            request.cookies.get("NEXT_LOCALE")?.value || defaultLocale;
        const locale = locales.includes(preferredLocale)
            ? preferredLocale
            : defaultLocale;

        // Redirect to preferred locale
        return NextResponse.redirect(
            new URL(`/${locale}${pathname}`, request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
