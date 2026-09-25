import { createFileRoute } from "@tanstack/react-router";
import { BookLink, PageIntro, SiteShell } from "@/components/site/shell";
import { BrandStars, InstagramGlyph, InstagramWord, VagaroWord } from "@/components/site/brands";
import { site, team } from "@/lib/site";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "The Team | The League Haircuts, Exton PA" },
      {
        name: "description",
        content:
          "Meet Amber, Jessica, Brittany, Karisa, Shayla, and Jenna at The League Haircuts in Exton, Pennsylvania.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.url}/team` }],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Exton"
        title="The team"
        lede="Descriptions are copied from the Vagaro staff page. Amber has no description published there, so hers is the shop biography already on file. Star ratings are the counts published on Vagaro."
      />
      <ul className="mx-auto max-w-6xl px-5 py-12">
        {team.map((person, index) => (
          <li
            key={person.name}
            className="grid items-start gap-8 border-b border-line py-12 lg:grid-cols-[220px_200px_1fr]"
          >
            <img
              src={person.photo}
              alt={person.alt}
              className="aspect-4/5 w-full object-cover"
              width={720}
              height={900}
            />
            {person.card ? (
              <img
                src={person.card}
                alt={`${person.name} booking card. Scan the code on the card to book.`}
                className="w-full object-contain"
                width={600}
                height={800}
              />
            ) : (
              <div />
            )}
            <div>
              <p className="text-xs tracking-widest text-gold uppercase">0{index + 1}</p>
              <h2 className="mt-2 font-display text-4xl">{person.name}</h2>
              <p className="mt-1 flex flex-wrap items-center gap-2 text-muted">
                <span>
                  {person.role} · {person.years}
                </span>
                {person.reviews > 0 ? (
                  <span className="inline-flex items-center gap-1 text-v-ink">
                    <BrandStars rating={Number(person.rating)} tone="vagaro" />
                    {person.rating} from {person.reviews} <VagaroWord className="text-sm" /> reviews
                  </span>
                ) : (
                  <span>No Vagaro reviews yet</span>
                )}
              </p>
              <p className="mt-4 text-sm text-ink-soft">{person.focus}</p>
              <p className="mt-4 max-w-2xl whitespace-pre-line">{person.bio}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <BookLink className="bg-ink px-4 py-3 text-sm text-inverse">Book with {person.name}</BookLink>
                {person.instagram ? (
                  <a
                    href={person.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-ink px-4 py-3 text-sm"
                  >
                    <InstagramGlyph />
                    <InstagramWord />
                  </a>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className="mx-auto max-w-6xl px-5 pb-16 text-sm text-muted">
        Staff descriptions:{" "}
        <a className="text-v-link underline" href={site.staffUrl} target="_blank" rel="noopener noreferrer">
          vagaro.com/theleaguehaircuts/staff
        </a>
        . Booking opens the shop’s Vagaro calendar. A direct link to each stylist’s personal book was not published, so every button uses the same booking page:{" "}
        <a className="underline" href={site.bookUrl} target="_blank" rel="noopener noreferrer">
          vagaro.com/theleaguehaircuts
        </a>
        .
      </p>
    </SiteShell>
  );
}
