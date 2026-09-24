import { createFileRoute } from "@tanstack/react-router";
import { FacebookGlyph, FacebookWord, InstagramGlyph, InstagramWord } from "@/components/site/brands";
import { PageIntro, SiteShell } from "@/components/site/shell";
import { fbVideos } from "@/lib/fb-videos";
import { site } from "@/lib/site";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Videos | The League Haircuts, Exton PA" },
      {
        name: "description",
        content:
          "Reels posted by The League Haircuts on Facebook and Instagram. Haircuts, the shop, and the team in Exton, Pennsylvania.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.url}/videos` }],
  }),
  component: VideosPage,
});

function VideosPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="From the shop"
        title="Videos"
        lede="Clips posted by The League Haircuts. Facebook clips play here. The Instagram reel is on the home page."
      />
      <div className="mx-auto max-w-6xl px-5 py-12">
        <p className="mb-8 flex flex-wrap items-center gap-3 text-sm">
          <a className="inline-flex items-center gap-2" href={site.facebook} target="_blank" rel="noopener noreferrer">
            <FacebookGlyph />
            <FacebookWord />
          </a>
          <a className="inline-flex items-center gap-2" href={site.instagram} target="_blank" rel="noopener noreferrer">
            <InstagramGlyph />
            <InstagramWord />
          </a>
        </p>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {fbVideos.map((clip) => (
            <li key={clip.id} className="border border-line bg-cream">
              <video
                className="aspect-9/16 w-full bg-ink object-cover"
                controls
                playsInline
                preload="metadata"
                poster={clip.poster}
                aria-label={clip.caption}
              >
                <source src={clip.src} type="video/mp4" />
              </video>
              <div className="px-4 py-4">
                <p className="flex items-center gap-2 text-sm">
                  <FacebookGlyph />
                  <FacebookWord />
                </p>
                <p className="mt-2">{clip.caption}</p>
                <a
                  className="mt-3 inline-flex items-center gap-2 text-sm"
                  href={clip.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookGlyph />
                  <span className="text-fb">Watch on Facebook</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SiteShell>
  );
}
