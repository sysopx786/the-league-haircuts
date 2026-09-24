import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site/shell";
import { site } from "@/lib/site";

export const Route = createFileRoute("/now-hiring")({
  head: () => ({
    meta: [
      { title: "Now Hiring | The League Haircuts, Exton PA" },
      {
        name: "description",
        content:
          "The League Haircuts in Exton is hiring experienced stylists and barbers. Email oneil@theleaguehaircuts.com. Conversations are confidential.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.url}/now-hiring` }],
  }),
  component: HiringPage,
});

const offers = [
  "Paid time off",
  "Sign-on bonuses",
  "Performance and quarterly bonus opportunities",
  "Consistent walk-in traffic",
  "Flexible scheduling",
  "A supportive, team-focused environment",
  "An established location with room to grow",
];

const lookingFor = ["Licensed barbers and stylists", "Exceptional customer service"];

const flyerOffers = ["Competitive commission rates", "A clean, modern environment", "A fun team"];

function HiringPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Careers"
        title="Now hiring"
        lede="The League Haircuts is looking for talented, experienced stylists and barbers."
      />
      <article className="mx-auto grid max-w-6xl gap-12 px-5 py-12 lg:grid-cols-[1fr_20rem]">
        <div>
          <p>
            The shop describes an established Exton location with walk-in traffic and room to grow a clientele without starting from an empty book.
          </p>
          <h2 className="mt-8 font-display text-3xl">What the hiring flyer asks for</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {lookingFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2 className="mt-8 font-display text-3xl">What the flyer says the shop offers</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {flyerOffers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2 className="mt-8 font-display text-3xl">Also listed earlier</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            {offers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-8">
            The hiring flyer says to send a résumé to{" "}
            <a className="underline decoration-gold underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            . The earlier careers note also listed{" "}
            <a className="underline decoration-gold underline-offset-4" href={`mailto:${site.hiringEmail}`}>
              {site.hiringEmail}
            </a>
            . The shop says those conversations are confidential. Mail you send is read by the shop. See the{" "}
            <Link to="/privacy" className="underline">privacy page</Link> for how to ask that it be deleted.
          </p>
        </div>
        <img
          src="/media/hiring-flyer.jpg"
          alt="Hiring flyer for The League Haircuts. It asks for licensed barbers and stylists and lists customercare@theleaguehaircuts.com."
          className="w-full border border-line"
          width={800}
          height={1000}
        />
      </article>
    </SiteShell>
  );
}
