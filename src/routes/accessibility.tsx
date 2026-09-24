import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site/shell";
import { site } from "@/lib/site";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility | The League Haircuts" },
      {
        name: "description",
        content:
          "Accessibility at The League Haircuts in Exton. The shop lists disabled access. This website aims to meet WCAG 2.2 AA practices.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.url}/accessibility` }],
  }),
  component: AccessPage,
});

function AccessPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Access"
        title="Accessibility"
        lede="The Vagaro profile lists disabled access at the Exton shop. This website is built to be used with a keyboard, a screen reader, and reduced motion."
      />
      <article className="mx-auto max-w-3xl space-y-5 px-5 py-12 text-ink-soft">
        <p>
          Pages use one main heading, visible focus, labels on controls, and text descriptions on photographs. The mobile Call, Directions, and Book bar stays at the bottom of the screen and does not cover the page content.
        </p>
        <p>
          If a page, photo, or booking link does not work for you, call {site.phoneDisplay} or email {site.email}. Say which page and what you were trying to do.
        </p>
        <p>
          This statement is not a claim that every WCAG 2.2 AA test has been formally certified.
        </p>
      </article>
    </SiteShell>
  );
}
