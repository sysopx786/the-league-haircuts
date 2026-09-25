import { Link, createFileRoute } from "@tanstack/react-router";
import { BookLink, JsonLd, SiteShell } from "@/components/site/shell";
import { BrandStars, FacebookGlyph, FacebookWord, GoogleGlyph, GoogleWord, InstagramGlyph, InstagramWord, MapsButton, SourceLine, VagaroLogo, VagaroWord } from "@/components/site/brands";
import {
  addressLine,
  facts,
  gallery,
  googleReviews,
  hours,
  reviews,
  services,
  site,
  team,
} from "@/lib/site";
import { fbVideos } from "@/lib/fb-videos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The League Haircuts | Woman-Owned Barbershop in Exton, PA" },
      {
        name: "description",
        content:
          "The League Haircuts is a woman-owned barbershop at 260 North Pottstown Pike, Exton. Haircuts for men and children, skin fades, and beard trims. Book on Vagaro.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.url}/` }],
  }),
  component: Home,
});

function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    name: site.name,
    url: site.url,
    image: `${site.url}/media/storefront.webp`,
    telephone: site.phoneTel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: site.city,
      addressRegion: site.region,
      postalCode: site.postal,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "10:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "15:00" },
    ],
    paymentAccepted: "Cash, Visa, Mastercard, Discover, American Express, Debit",
    currenciesAccepted: "USD",
    sameAs: [site.vagaroUrl, site.instagram, site.facebook],
  };

  return (
    <SiteShell>
      <JsonLd data={schema} />
      <section className="grid bg-cream lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center px-5 py-12 sm:px-10 lg:order-1 lg:py-20">
          <p className="text-xs tracking-widest text-gold uppercase">Woman-owned · Exton, Pennsylvania</p>
          <h1 className="mt-4 font-display text-5xl leading-none text-ink sm:text-7xl">
            The League Haircuts
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink-soft">
            Premium haircut services for men and children, with sharp cuts, precision, and care.
          </p>
          <p className="mt-4 max-w-md text-muted">{addressLine}</p>
          <MapsButton className="mt-3" />
          <p className="mt-4 max-w-md text-muted">Walk-ins are welcome. Appointments are booked on Vagaro.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookLink className="bg-ink px-5 py-3 text-sm font-medium text-inverse">Book Appointment</BookLink>
            <Link to="/services" className="border border-ink px-5 py-3 text-sm font-medium text-ink">
              View Services
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src="/media/cut-beard.jpg"
            alt="Stylist with a blonde bob lining up a full beard with clippers"
            className="h-80 w-full object-cover sm:h-[32rem] lg:h-full"
            width={1200}
            height={900}
          />
        </div>
      </section>

      <section className="border-y border-line bg-ink text-inverse" aria-label="Shop facts">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-6">
          <div className="border-r border-line bg-g-paper px-4 py-4 text-g-ink">
            <dt className="flex items-center gap-2">
              <GoogleGlyph />
              <GoogleWord />
            </dt>
            <dd className="mt-1 flex items-center gap-2">
              <span className="font-display text-3xl text-g-ink">{site.googleRating}</span>
              <BrandStars rating={Number(site.googleRating)} tone="google" />
            </dd>
            <dd className="text-sm text-g-ink">{site.googleReviewCount} reviews</dd>
          </div>
          <div className="bg-g-paper px-4 py-4 text-v-ink lg:border-r lg:border-line">
            <dt>
              <VagaroWord />
            </dt>
            <dd className="mt-1 flex items-center gap-2">
              <span className="font-display text-3xl text-v-ink">{site.vagaroRating}</span>
              <BrandStars rating={Number(site.vagaroRating)} tone="vagaro" />
            </dd>
            <dd className="text-sm text-v-ink">{site.vagaroReviewCount} reviews</dd>
          </div>
          {facts.map((fact) => (
            <div key={fact.label} className="border-t border-line px-4 py-3 odd:border-r lg:border-t-0 lg:border-r lg:py-4 lg:last:border-r-0">
              <dt className="text-xs tracking-widest text-gold-2 uppercase">{fact.label}</dt>
              <dd className="mt-1 text-base">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-widest text-gold uppercase">Services</p>
            <h2 className="mt-2 font-display text-4xl">What we cut</h2>
          </div>
          <Link to="/services" className="hidden text-sm underline decoration-gold underline-offset-4 sm:inline">
            Full menu
          </Link>
        </div>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {services.slice(0, 4).map((service) => (
            <li key={service.name} className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline">
              <div>
                <h3 className="font-display text-2xl">{service.name}</h3>
                <p className="mt-1 max-w-2xl text-sm text-muted">{service.description}</p>
              </div>
              <p className="font-display text-2xl text-ink">{service.price}</p>
            </li>
          ))}
        </ul>
        <BookLink className="mt-6 inline-block text-sm underline decoration-gold underline-offset-4">
          Book Appointment
        </BookLink>
      </section>

      <section className="bg-ink text-inverse">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2 sm:py-24">
          <img
            src="/media/shop-floor.jpg"
            alt="The League Haircuts floor, with Amber’s and Jessica’s stations named on the mirrors"
            className="h-80 w-full object-cover"
            width={1200}
            height={600}
          />
          <div>
            <p className="text-xs tracking-widest text-gold-2 uppercase">The shop</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Woman-owned. Built in Exton.</h2>
            <p className="mt-5 text-inverse/80">
              The League name dates to 2025. Longtime clients on Google still call the shop by its earlier name, Big League Haircuts, and some have been coming for years. It was created by a former Division 1 athlete and a seasoned stylist, for clients heading to a job interview, stepping onto a field, or walking through everyday life.
            </p>
            <p className="mt-4 text-inverse/80">
              The mission, in the shop’s own words: to make every client feel like they’ve made it to the league.
            </p>
            <Link to="/about" className="mt-6 inline-block text-sm text-gold-2 underline underline-offset-4">
              About the shop
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[22rem_1fr] sm:py-24">
          <video
            className="mx-auto aspect-9/16 w-full max-w-sm bg-ink object-cover"
            controls
            playsInline
            preload="metadata"
            poster="/media/reel-poster.jpg"
            aria-label="Instagram reel from The League Haircuts. On-screen text says I want a male barber."
          >
            <source src="/media/reel.mp4" type="video/mp4" />
          </video>
          <div>
            <p className="flex items-center gap-2 text-xs tracking-widest uppercase">
              <InstagramGlyph />
              <InstagramWord />
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Because women definitely can’t be barbers.
            </h2>
            <p className="mt-5 max-w-xl text-ink-soft">
              Posted by The League Haircuts. The reel opens with the line “I want a male barber,” then a stylist at the shop cuts his beard.
            </p>
            <a
              className="mt-6 inline-flex items-center gap-2 text-sm"
              href={site.reelUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramGlyph />
              <InstagramWord />
            </a>
            <Link to="/videos" className="mt-4 inline-flex items-center gap-2 text-sm">
              <FacebookGlyph />
              <FacebookWord />
              <span className="text-ink">clips</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs tracking-widest text-gold uppercase">Team</p>
            <h2 className="mt-2 font-display text-4xl">Six chairs</h2>
          </div>
          <Link to="/team" className="text-sm underline decoration-gold underline-offset-4">
            Meet the team
          </Link>
        </div>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person) => (
            <li key={person.name}>
              <img
                src={person.photo}
                alt={person.alt}
                className="block aspect-[4/5] w-full bg-paper-2 object-cover"
                width={720}
                height={900}
              />
              <h3 className="mt-3 font-display text-2xl">{person.name}</h3>
              <p className="text-sm text-muted">
                {person.role} · {person.years}
                {person.reviews > 0 ? (
                  <>
                    {" "}
                    · {person.rating} on <VagaroWord className="text-sm" /> ({person.reviews})
                  </>
                ) : (
                  ""
                )}
              </p>
              <p className="mt-2 text-sm whitespace-pre-line text-ink-soft">{person.bio}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <p className="text-xs tracking-widest text-gold uppercase">From the floor</p>
          <h2 className="mt-2 font-display text-4xl">The work</h2>
          <ul className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {gallery.map((shot) => (
              <li key={shot.src} className="w-64 shrink-0 snap-start sm:w-72">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="aspect-4/5 w-full object-cover"
                  width={720}
                  height={900}
                  loading="lazy"
                />
                <p className="mt-2 text-sm text-muted">{shot.caption}</p>
              </li>
            ))}
          </ul>
          <Link to="/gallery" className="mt-8 inline-block border border-ink px-4 py-3 text-sm">
            See the full gallery
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <p className="flex items-center gap-2 text-xs tracking-widest uppercase">
          <FacebookGlyph />
          <FacebookWord />
        </p>
        <h2 className="mt-2 font-display text-4xl">Videos</h2>
        <ul className="mt-8 flex gap-4 overflow-x-auto pb-2">
          {fbVideos.map((clip) => (
            <li key={clip.id} className="w-56 shrink-0 sm:w-64">
              <video
                className="aspect-9/16 w-full bg-ink object-cover"
                controls
                playsInline
                preload="none"
                poster={clip.poster}
                aria-label={clip.caption}
              >
                <source src={clip.src} type="video/mp4" />
              </video>
              <p className="mt-2 text-sm text-muted">{clip.caption}</p>
            </li>
          ))}
        </ul>
        <Link to="/videos" className="mt-8 inline-flex items-center gap-2 border border-ink px-4 py-3 text-sm">
          <FacebookGlyph />
          See all videos
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <GoogleGlyph className="size-6" />
              <GoogleWord className="text-lg" />
            </div>
            <h2 className="mt-2 flex flex-wrap items-center gap-3 font-display text-4xl text-g-ink">
              {site.googleRating}
              <BrandStars rating={Number(site.googleRating)} tone="google" />
              <span className="text-lg font-sans font-normal text-g-ink">from {site.googleReviewCount} reviews</span>
            </h2>
          </div>
          <a className="text-sm text-g-blue underline underline-offset-4" href={site.googleUrl} target="_blank" rel="noopener noreferrer">
            Read more on Google
          </a>
        </div>
        <ul className="mt-10 grid gap-6 lg:grid-cols-2">
          {googleReviews.slice(0, 4).map((review) => (
            <li key={`${review.name}-${review.date}`} className="bg-g-paper p-6 text-g-ink">
              <blockquote className="text-xl leading-snug">“{review.quote}”</blockquote>
              <SourceLine source="google" name={review.name} date={review.date} staff={review.staff} />
            </li>
          ))}
        </ul>
        <Link to="/google-reviews" className="mt-8 inline-block text-sm underline decoration-gold underline-offset-4">
          All Google reviews
        </Link>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <VagaroLogo className="h-7 w-auto" />
              <h2 className="mt-2 flex flex-wrap items-center gap-3 font-display text-4xl text-v-ink">
                {site.vagaroRating}
                <BrandStars rating={Number(site.vagaroRating)} tone="vagaro" />
                <span className="text-lg font-sans font-normal text-v-ink">from {site.vagaroReviewCount} reviews</span>
              </h2>
            </div>
            <a className="text-sm text-v-link underline underline-offset-4" href={site.vagaroUrl} target="_blank" rel="noopener noreferrer">
              Read more on Vagaro
            </a>
          </div>
          <ul className="mt-10 grid gap-6 lg:grid-cols-2">
            {reviews.slice(0, 4).map((review) => (
              <li key={`${review.name}-${review.date}`} className="bg-g-paper p-6 text-v-ink">
                <blockquote className="text-xl leading-snug">“{review.quote}”</blockquote>
                <SourceLine source="vagaro" name={review.name} date={review.date} staff={review.staff} />
              </li>
            ))}
          </ul>
          <a className="mt-8 inline-block text-sm text-v-link underline underline-offset-4" href={site.vagaroUrl} target="_blank" rel="noopener noreferrer">
            Read more on Vagaro
          </a>
        </div>
      </section>

      <section className="grid border-t border-line lg:grid-cols-2">
        <div className="bg-paper-2 px-5 py-14 sm:px-10">
          <p className="text-xs tracking-widest text-gold uppercase">Gift cards</p>
          <h2 className="mt-2 font-display text-4xl">Give a cut</h2>
          <p className="mt-4 max-w-md text-muted">
            Gift cards are sold on Vagaro in categories including Just Because, Birthday, Congratulations, Barber, and Hair.
          </p>
          <a
            href={site.giftUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-ink px-5 py-3 text-sm text-inverse"
          >
            Buy a Gift Card
          </a>
        </div>
        <div className="px-5 py-14 sm:px-10">
          <img
            src="/media/storefront.webp"
            alt="The League Haircuts storefront, with the sign above the front door"
            className="mb-6 aspect-4/5 w-full object-cover"
            width={822}
            height={941}
          />
          <p className="text-xs tracking-widest text-gold uppercase">Visit</p>
          <h2 className="mt-2 font-display text-4xl">{site.city}</h2>
          <p className="mt-4">{addressLine}</p>
          <MapsButton className="mt-3" />
          <a className="mt-4 block underline decoration-gold underline-offset-4" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
          <ul className="mt-6 space-y-1 text-sm text-muted">
            {hours.map((row) => (
              <li key={row.day} className="flex max-w-sm justify-between gap-6">
                <span>{row.day}</span>
                <span>{row.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-center text-inverse">
        <h2 className="font-display text-4xl sm:text-6xl">Book the chair.</h2>
        <p className="mx-auto mt-4 max-w-lg text-inverse/75">
          The League Haircuts, Exton. Men, children, fades, and beard trims.
        </p>
        <BookLink className="mt-8 inline-block bg-gold px-6 py-3 text-sm font-medium text-ink">
          Book Appointment
        </BookLink>
      </section>
    </SiteShell>
  );
}
