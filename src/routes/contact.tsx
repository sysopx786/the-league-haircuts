import { createFileRoute } from "@tanstack/react-router";
import { BookLink, PageIntro, SiteShell } from "@/components/site/shell";
import { MapsButton } from "@/components/site/brands";
import { addressLine, amenities, faqs, hours, site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Hours | The League Haircuts, Exton PA" },
      {
        name: "description",
        content:
          "The League Haircuts is at 260 North Pottstown Pike, Exton, PA 19341. Call (610) 524-2421. Sunday closed. Free parking. Book on Vagaro.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.url}/contact` }],
  }),
  component: ContactPage,
});

const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=-75.642%2C40.028%2C-75.624%2C40.040&layer=mapnik&marker=${site.geo.lat}%2C${site.geo.lng}`;

function ContactPage() {
  return (
    <SiteShell>
      <PageIntro kicker="Exton, Pennsylvania" title="Find the shop" />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 lg:grid-cols-2">
        <div>
          <p className="text-lg">{addressLine}</p>
          <MapsButton className="mt-3" />
          <h2 className="font-display text-3xl">Hours</h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {hours.map((row) => (
              <li key={row.day} className="flex justify-between py-3">
                <span>{row.day}</span>
                <span>{row.hours}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <a className="text-lg underline decoration-gold underline-offset-4" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-2">
            <a className="underline decoration-gold underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <BookLink className="border border-ink px-4 py-3 text-sm">Book Appointment</BookLink>
          </div>
          <h2 className="mt-10 font-display text-3xl">At the shop</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {amenities.map((item) => (
              <li key={item} className="border border-line bg-cream px-3 py-2 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <img
            src="/media/storefront.webp"
            alt="The League Haircuts storefront, with the sign above the front door"
            className="aspect-4/5 w-full object-cover"
            width={822}
            height={941}
          />
          <iframe
            title="Map of The League Haircuts at 260 North Pottstown Pike, Exton, Pennsylvania"
            src={mapSrc}
            className="h-96 w-full border border-line"
            loading="lazy"
          />
        </div>
      </div>
      <section className="border-t border-line bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-14">
          <h2 className="font-display text-4xl">Questions we can answer</h2>
          <dl className="mt-8 space-y-8">
            {faqs.map((item) => (
              <div key={item.q}>
                <dt className="font-display text-2xl">{item.q}</dt>
                <dd className="mt-2 text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-sm text-muted">
            Late-arrival rules and the exact cancellation fee are not published. Ask the shop before you book if those details change your plans.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
