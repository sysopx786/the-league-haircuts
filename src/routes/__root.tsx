import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";
import { Link } from "@tanstack/react-router";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale-1" },
      { title: "The League Haircuts | Exton, PA" },
      { name: "theme-color", content: "#12110f" },
      { name: "referrer", content: "strict-origin-when-cross-origin" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
  notFoundComponent: () => (
    <main className="flex min-h-screen flex-col items-start justify-center bg-paper px-6 text-ink">
      <p className="text-xs tracking-widest text-gold uppercase">404</p>
      <h1 className="mt-3 font-display text-5xl">That page is not on the book.</h1>
      <p className="mt-4 max-w-md text-muted">The link does not match a page on The League Haircuts.</p>
      <div className="mt-8 flex gap-4">
        <Link to="/" className="bg-ink px-4 py-3 text-sm text-inverse">
          Back home
        </Link>
        <a
          href="https://www.vagaro.com/theleaguehaircuts/book-now"
          className="border border-ink px-4 py-3 text-sm"
        >
          Book Appointment
        </a>
      </div>
    </main>
  ),
});
