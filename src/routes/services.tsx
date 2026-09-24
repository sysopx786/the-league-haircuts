import { createFileRoute } from "@tanstack/react-router";
import { BookLink, JsonLd, PageIntro, SiteShell } from "@/components/site/shell";
import { services, site } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Prices | The League Haircuts, Exton PA" },
      {
        name: "description",
        content:
          "Menu at The League Haircuts in Exton: classic haircut $28, skin fade $32, beard trim $15, kids, and senior/military cuts. Book on Vagaro.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.url}/services` }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Services at The League Haircuts",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: { "@type": "BarberShop", name: site.name },
        offers: {
          "@type": "Offer",
          price: service.price.replace("$", ""),
          priceCurrency: "USD",
          url: site.bookUrl,
        },
      },
    })),
  };

  return (
    <SiteShell>
      <JsonLd data={schema} />
      <PageIntro
        kicker="Exton menu"
        title="Services and prices"
        lede="Prices below are the amounts listed on Vagaro. Appointment length is not published on the booking menu, so it is not shown here."
      />
      <div className="mx-auto max-w-6xl px-5 pt-12">
        <img
          src="/media/station.webp"
          alt="Combs, clippers, scissors, and a neck brush on a station"
          className="max-h-[32rem] w-full object-cover"
          width={822}
          height={1039}
        />
      </div>
      <div className="mx-auto max-w-6xl px-5 py-12">
        <ul className="divide-y divide-line border-y border-line">
          {services.map((service) => (
            <li key={service.name} className="grid gap-4 py-8 lg:grid-cols-[1fr_auto] lg:items-start">
              <div>
                <h2 className="font-display text-3xl">{service.name}</h2>
                <p className="mt-3 max-w-2xl text-muted">{service.description}</p>
              </div>
              <div className="flex items-center gap-6 lg:flex-col lg:items-end">
                <p className="font-display text-3xl">{service.price}</p>
                <BookLink className="bg-ink px-4 py-3 text-sm text-inverse">Book Appointment</BookLink>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-sm text-muted">
          The shop website previously listed a child’s haircut for ages 15 and under, plus shampoo and beard-trim add-ons. Those details are not on the current Vagaro menu, so they are not sold here. Book from the Vagaro list.
        </p>
      </div>
    </SiteShell>
  );
}
