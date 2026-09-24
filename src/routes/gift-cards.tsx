import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site/shell";
import { giftCategories, site } from "@/lib/site";

export const Route = createFileRoute("/gift-cards")({
  head: () => ({
    meta: [
      { title: "Gift Cards | The League Haircuts, Exton PA" },
      {
        name: "description",
        content:
          "Buy a gift card for The League Haircuts in Exton on Vagaro. Categories include Birthday, Barber, and Hair. Amounts are confirmed at checkout.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.url}/gift-cards` }],
  }),
  component: GiftPage,
});

function GiftPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Vagaro"
        title="Gift cards"
        lede="Purchase happens on Vagaro. This page does not set dollar amounts, delivery speed, or redemption rules that the shop has not published."
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl">Categories on the Vagaro page</h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {giftCategories.map((category) => (
              <li key={category} className="py-3">
                {category}
              </li>
            ))}
          </ul>
          <a
            href={site.giftUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-ink px-5 py-3 text-sm text-inverse"
          >
            Buy a Gift Card
          </a>
        </div>
        <div className="bg-paper-2 p-8">
          <h2 className="font-display text-3xl">Before you buy</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-muted">
            <li>The card is issued by the shop through Vagaro, not by this website.</li>
            <li>Choose the amount on Vagaro. No amount is listed on the public category page.</li>
            <li>Redemption rules and expiration were not published on the category page.</li>
          </ul>
        </div>
      </div>
    </SiteShell>
  );
}
