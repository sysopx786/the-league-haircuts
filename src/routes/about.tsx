import { createFileRoute, Link } from "@tanstack/react-router";
import { BookLink, PageIntro, SiteShell } from "@/components/site/shell";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | The League Haircuts, Woman-Owned in Exton" },
      {
        name: "description",
        content:
          "The League Haircuts in Exton is a woman-owned barbershop. The current name dates to 2025. Clients on Google also know the shop as the former Big League Haircuts.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.url}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Woman-owned"
        title="Made it to the league."
        lede="The shop’s published story, not a rewritten one."
      />
      <article className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-lg">
          <p>
            The League Haircuts name dates to 2025. It was created by a former Division 1 athlete and a seasoned stylist who recognized the connection between confidence and appearance. Google reviews from longtime clients say the shop previously operated as Big League Haircuts. Some of those clients say they have been coming for years. This site does not invent a founding year for the earlier name.
          </p>
          <p>
            The shop’s belief, as written on its site: a great haircut can elevate your mindset and presence. Whether a client is heading to a job interview, stepping onto a field, or walking through everyday life, the aim is that they look and feel like they’ve made it to the league.
          </p>
          <p>
            The work is premium haircuts for men and children. The Vagaro profile lists the business type as Hair and Barber, with walk-ins accepted, free parking, disabled access, WiFi, TV, and a kid-friendly room.
          </p>
          <p>
            This website states that The League Haircuts is woman-owned because that is how the business asked to be identified. Google’s public attributes for the listing were not available from the link provided, so this page does not claim that Google displays a woman-owned badge.
          </p>
          <p className="text-base text-muted">
            The founders are not named on the public site. The customer-care address is {site.email}. Hiring notes go to {site.hiringEmail}.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <BookLink className="bg-ink px-4 py-3 text-sm text-inverse">Book Appointment</BookLink>
            <Link to="/team" className="border border-ink px-4 py-3 text-sm">
              Meet the team
            </Link>
          </div>
        </div>
        <img
          src="/media/cut-detail.jpg"
          alt="Stylist with short platinum hair detailing a hairline with scissors"
          className="h-full max-h-[36rem] w-full object-cover"
          width={900}
          height={1100}
        />
      </article>
    </SiteShell>
  );
}
