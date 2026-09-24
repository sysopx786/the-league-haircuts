import { createFileRoute } from "@tanstack/react-router";
import { BookLink, PageIntro, SiteShell } from "@/components/site/shell";
import { BrandStars, GoogleGlyph, GoogleWord, SourceLine, VagaroWord } from "@/components/site/brands";
import { googleReviews, reviews, site } from "@/lib/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews | The League Haircuts, Exton PA" },
      {
        name: "description",
        content:
          "Google lists The League Haircuts in Exton at 4.9 from 58 reviews. Quotes below are copied as written, including critical reviews.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.url}/reviews` }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
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
        lede="Copied from the Google review list you supplied. Wording is unchanged, including the critical reviews. Reviews that had no written text are not shown. Google did not print a star count on each review in that list, so individual stars are not added here. Vagaro separately lists 4.9 from 89 reviews."
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

        <div className="mt-16 flex flex-wrap items-center gap-3">
          <VagaroWord className="text-3xl" />
          <span className="font-display text-4xl text-v-ink">{site.vagaroRating}</span>
          <BrandStars rating={Number(site.vagaroRating)} tone="vagaro" />
          <span className="text-v-ink">({site.vagaroReviewCount})</span>
        </div>
        <p className="mt-3 text-v-ink">
          These reviews are from the booking profile. They are not the same as the Google reviews above.
        </p>
        <ul className="mt-8 space-y-6">
          {reviews.slice(0, 6).map((review) => (
            <li key={`${review.name}-${review.date}-${review.quote.slice(0, 16)}`} className="bg-g-paper p-6">
              <blockquote className="text-xl leading-snug text-v-ink">“{review.quote}”</blockquote>
              <SourceLine source="vagaro" name={review.name} date={review.date} staff={review.staff} />
            </li>
          ))}
        </ul>
        <a className="mt-8 inline-block text-sm text-v-link underline underline-offset-4" href={site.vagaroUrl} target="_blank" rel="noopener noreferrer">
          Read more on Vagaro
        </a>
      </div>
    </SiteShell>
  );
}