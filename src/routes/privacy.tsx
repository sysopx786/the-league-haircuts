import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site/shell";
import { site } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy | The League Haircuts" },
      {
        name: "description",
        content:
          "How The League Haircuts website handles information. Booking and gift cards are completed on Vagaro. This site does not run ads or analytics.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.url}/privacy` }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteShell>
      <PageIntro kicker="Policy" title="Privacy" lede="Written for what this website actually does." />
      <article className="mx-auto max-w-3xl space-y-5 px-5 py-12 text-ink-soft">
        <p>
          The League Haircuts, {site.street}, {site.city}, {site.region} {site.postal}, publishes this site so you can read services, meet the team, and reach the shop. Questions about your information can go to{" "}
          <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <h2 className="font-display text-3xl text-ink">What this site collects</h2>
        <p>
          This website does not have a contact form, an account system, analytics, or advertising pixels. It does not ask you to create a profile.
        </p>
        <p>
          If you email {site.email} or {site.hiringEmail}, the shop receives whatever you send, including a résumé. Hiring notes are used to consider an application. The shop’s public hiring page says those conversations are confidential. This site does not store that mail. It lives in the shop’s email account.
        </p>
        <h2 className="font-display text-3xl text-ink">Vagaro</h2>
        <p>
          Book Appointment and Buy a Gift Card leave this site and open Vagaro. Appointment details, payment, and gift-card purchases are handled by Vagaro under Vagaro’s own privacy policy, not by this page.
        </p>
        <h2 className="font-display text-3xl text-ink">Map</h2>
        <p>
          The contact page embeds a map from OpenStreetMap. Loading that map contacts OpenStreetMap’s servers. Directions links open Google Maps in a new tab only if you choose them.
        </p>
        <h2 className="font-display text-3xl text-ink">Cookies</h2>
        <p>
          This site does not set analytics or advertising cookies. A cookie banner is not shown because those tools are not installed. Vagaro, Google Maps, Instagram, and Facebook use their own cookies if you open them.
        </p>
        <h2 className="font-display text-3xl text-ink">Access or deletion</h2>
        <p>
          To ask what the shop has about you, or to ask that an email or résumé be deleted, write to {site.email}. Booking records held by Vagaro have to be requested from Vagaro or through the shop’s Vagaro account.
        </p>
      </article>
    </SiteShell>
  );
}
