import { createFileRoute } from "@tanstack/react-router";
import { BookLink, PageIntro, SiteShell } from "@/components/site/shell";
import { BrandStars, GoogleGlyph, GoogleWord, SourceLine } from "@/components/site/brands";
import { googleReviews, site } from "@/lib/site";

export const Route = createFileRoute("/google-reviews")({
  head: () => ({
    meta: [
      { title: "Google reviews | The League Haircuts, Exton PA" },
      {
        name: "description",
        content:
          "Google lists The League Haircuts in Exton at 4.9 from 58 reviews. Quotes are copied as written, including critical reviews.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.url}/google-reviews` }],
  }),
  component: GoogleReviewsPage,
});

function GoogleReviewsPage() {
  return (
    <SiteShell>
      <div className="border-b border-line bg-g-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-5 py-8 text-g-ink">
          <GoogleGlyph className="size-8" />
          <GoogleWord className="text-2xl" />
          <span className="font-display text-4xl">{site.googleRating}</span>
          <BrandStars rating={Number(site.googleRating)} tone="google" />
          <span>({site.googleReviewCount})</span>
        </div>
      </div>
      <PageIntro
        kicker="Google"
        title={`${site.googleRating} from ${site.googleReviewCount} reviews`}
        lede="Copied from the Google review list you supplied. Wording is unchanged, including the critical reviews. Reviews that had no written text are not shown. Google did not print a star count on each review in that list, so individual stars are not added here."
      />
      <div className="mx-auto max-w-3xl px-5 py-12">
        <ul className="space-y-10">
          {googleReviews.map((review) => (
            <li key={`${review.name}-${review.date}`} className="bg-g-paper p-6 text-g-ink">
              <blockquote className="text-xl leading-snug">“{review.quote}”</blockquote>
              <SourceLine source="google" name={review.name} date={review.date} staff={review.staff} />
              {review.reply ? (
                <p className="mt-4 border-l-4 border-g-blue pl-4 text-sm text-g-ink">
                  Reply from The League Haircuts: {review.reply}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-wrap gap-3">
          <a href={site.googleUrl} target="_blank" rel="noopener noreferrer" className="bg-g-blue px-4 py-3 text-sm text-g-paper">
            Read more on Google
          </a>
          <BookLink className="bg-ink px-4 py-3 text-sm text-inverse">Book Appointment</BookLink>
        </div>
      </div>
    </SiteShell>
  );
}
