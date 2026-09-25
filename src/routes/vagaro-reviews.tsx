import { createFileRoute } from "@tanstack/react-router";
import { BookLink, PageIntro, SiteShell } from "@/components/site/shell";
import { BrandStars, SourceLine, VagaroWord } from "@/components/site/brands";
import { reviews, site } from "@/lib/site";

export const Route = createFileRoute("/vagaro-reviews")({
  head: () => ({
    meta: [
      { title: "Vagaro reviews | The League Haircuts, Exton PA" },
      {
        name: "description",
        content:
          "Vagaro lists The League Haircuts in Exton at 4.9 from 89 reviews. Written quotes name the stylist.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.url}/vagaro-reviews` }],
  }),
  component: VagaroReviewsPage,
});

function VagaroReviewsPage() {
  return (
    <SiteShell>
      <div className="border-b border-line bg-g-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-5 py-8">
          <VagaroWord className="text-3xl" />
          <span className="font-display text-4xl text-v-ink">{site.vagaroRating}</span>
          <BrandStars rating={Number(site.vagaroRating)} tone="vagaro" />
          <span className="text-v-ink">({site.vagaroReviewCount})</span>
        </div>
      </div>
      <PageIntro
        kicker="Vagaro"
        title={`${site.vagaroRating} from ${site.vagaroReviewCount} reviews`}
        lede="These reviews are from the booking profile. They are not the same as the Google reviews. Quotes are copied as written."
      />
      <div className="mx-auto max-w-3xl px-5 py-12">
        <ul className="space-y-8">
          {reviews.map((review) => (
            <li key={`${review.name}-${review.date}-${review.quote.slice(0, 16)}`} className="bg-g-paper p-6">
              <blockquote className="text-xl leading-snug text-v-ink">“{review.quote}”</blockquote>
              <SourceLine source="vagaro" name={review.name} date={review.date} staff={review.staff} />
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-wrap gap-3">
          <a href={site.vagaroUrl} target="_blank" rel="noopener noreferrer" className="bg-v-red px-4 py-3 text-sm text-g-paper">
            Read more on Vagaro
          </a>
          <BookLink className="bg-ink px-4 py-3 text-sm text-inverse">Book Appointment</BookLink>
        </div>
      </div>
    </SiteShell>
  );
}
