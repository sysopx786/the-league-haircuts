import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { addressLine, directionsUrl, hours, nav, shopStatus, site } from "@/lib/site";
import { MapsButton } from "@/components/site/brands";

export function BookLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={site.bookUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-cream focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="pb-16 sm:pb-0">{children}</main>
      <Footer />
      <MobileBar />
    </>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(() => shopStatus());
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const tick = () => setStatus(shopStatus());
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-ink text-inverse">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <Link to="/" className="shrink-0" aria-label="The League Haircuts, home">
            <img
              src="/media/logo-lockup.png"
              alt="The League Haircuts"
              className="h-10 w-auto bg-cream object-contain px-1.5 sm:h-12"
              width={280}
              height={72}
            />
          </Link>
          <Link
            to="/contact"
            className={
              status.open
                ? "inline-flex shrink-0 flex-col justify-center bg-gold px-3 py-1 leading-none text-ink"
                : "inline-flex shrink-0 flex-col justify-center bg-paper-2 px-3 py-1 leading-none text-ink"
            }
            aria-label={`${status.sign}. ${status.detail}. View hours.`}
          >
            <span className="status-flash font-display text-xl tracking-wide sm:text-2xl">{status.sign}</span>
            <span className="mt-1 text-xs font-medium sm:text-sm">{status.detail}</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {nav
            .filter((item) => item.to !== "/")
            .map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm tracking-widest text-inverse/80 uppercase hover:text-inverse data-[status=active]:text-gold-2"
              >
                {item.label}
              </Link>
            ))}
        </nav>
        <div className="flex items-center gap-2">
          <BookLink className="hidden bg-gold px-4 py-2 text-sm font-medium tracking-wide text-ink hover:bg-gold-2 sm:inline-block">
            Book Appointment
          </BookLink>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center border border-inverse/30 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-inverse/15 bg-ink px-5 py-4 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block border-b border-inverse/10 py-3 text-lg text-inverse"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <BookLink className="mt-4 block bg-gold px-4 py-3 text-center text-sm font-medium text-ink">
            Book Appointment
          </BookLink>
        </nav>
      ) : null}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-ink pb-16 text-inverse sm:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl">The League Haircuts</p>
          <p className="mt-2 text-sm tracking-wide text-gold-2">Woman-owned barbershop</p>
          <p className="mt-4 text-sm text-inverse/75">{addressLine}</p>
          <MapsButton className="mt-3" />
          <a className="mt-2 block text-sm text-inverse underline decoration-gold/60 underline-offset-4" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
          <a className="mt-1 block text-sm text-inverse/80" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
        <div>
          <h2 className="text-xs tracking-widest text-gold-2 uppercase">Hours</h2>
          <ul className="mt-4 space-y-1 text-sm text-inverse/80">
            {hours.map((row) => (
              <li key={row.day} className="flex justify-between gap-4">
                <span>{row.day}</span>
                <span>{row.hours}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs tracking-widest text-gold-2 uppercase">Visit</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-inverse/80 hover:text-inverse">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/now-hiring" className="text-inverse/80 hover:text-inverse">
                Now Hiring
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs tracking-widest text-gold-2 uppercase">Policies</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/privacy" className="text-inverse/80 hover:text-inverse">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-inverse/80 hover:text-inverse">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/accessibility" className="text-inverse/80 hover:text-inverse">
                Accessibility
              </Link>
            </li>
            <li>
              <a className="text-inverse/80 hover:text-inverse" href={site.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a className="text-inverse/80 hover:text-inverse" href={site.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a className="text-inverse/80 hover:text-inverse" href={directionsUrl} target="_blank" rel="noopener noreferrer">
                Directions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-inverse/10 px-5 py-4 text-center text-xs text-inverse/50">
        © {new Date().getFullYear()} The League Haircuts. Exton, Pennsylvania.
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-cream sm:hidden">
      <a className="py-3 text-center text-xs tracking-wide text-ink" href={`tel:${site.phoneTel}`}>
        Call
      </a>
      <a
        className="border-x border-line py-3 text-center text-xs tracking-wide text-ink"
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Directions
      </a>
      <BookLink className="bg-ink py-3 text-center text-xs tracking-wide text-inverse">Book</BookLink>
    </div>
  );
}

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="border-b border-line bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <p className="text-xs tracking-widest text-gold uppercase">{kicker}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-6xl">{title}</h1>
        {lede ? <p className="mt-5 max-w-2xl text-lg text-muted">{lede}</p> : null}
      </div>
    </header>
  );
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
