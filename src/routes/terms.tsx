import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site/shell";
import { site } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms | The League Haircuts" },
      {
        name: "description",
        content:
          "Terms for using The League Haircuts website. Appointments and cancellations are governed by the shop’s Vagaro policy.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.url}/terms` }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteShell>
      <PageIntro kicker="Policy" title="Terms" />
      <article className="mx-auto max-w-3xl space-y-5 px-5 py-12 text-ink-soft">
        <p>
          This website describes The League Haircuts in Exton, Pennsylvania. It is information, not a booking system. An appointment exists only after it is confirmed on Vagaro.
        </p>
        <h2 className="font-display text-3xl text-ink">Cancellations</h2>
        <p>
          Vagaro publishes this policy: customers must provide at least 12 hours’ notice for service cancellations. Cancellations within this timeframe may incur a fee or result in forfeited payment. The dollar amount of that fee is not published on the profile.
        </p>
        <h2 className="font-display text-3xl text-ink">Prices</h2>
        <p>
          Prices on the Services page match the Vagaro menu at the time this site was built. Vagaro is the price you are offered when you book. If the two ever differ, the Vagaro checkout price controls the appointment.
        </p>
        <h2 className="font-display text-3xl text-ink">Gift cards</h2>
        <p>
          Gift cards are sold by the shop on Vagaro. This website does not take payment and does not set gift-card terms.
        </p>
        <p>Questions: <a className="underline" href={`mailto:${site.email}`}>{site.email}</a> or {site.phoneDisplay}.</p>
      </article>
    </SiteShell>
  );
}
