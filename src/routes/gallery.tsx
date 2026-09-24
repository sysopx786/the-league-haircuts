import { createFileRoute } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { PageIntro, SiteShell } from "@/components/site/shell";
import { gallery, site } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | The League Haircuts, Exton PA" },
      {
        name: "description",
        content:
          "Photographs from The League Haircuts in Exton: the shop, skin fades, and children’s cuts. No staged before-and-after pairs are published.",
      },
    ],
    links: [{ rel: "canonical", href: `${site.url}/gallery` }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  const shot = active === null ? null : gallery[active];

  return (
    <SiteShell>
      <PageIntro
        kicker="Portfolio"
        title="The work"
        lede="Every photo on this page is shown on its own. None of them are paired as a before-and-after."
      />
      <ul className="mx-auto grid max-w-6xl gap-4 px-5 py-12 sm:grid-cols-2">
        {gallery.map((item, index) => (
          <li key={item.src} className={item.wide ? "sm:col-span-2" : ""}>
            <button type="button" className="block w-full text-left" onClick={() => setActive(index)}>
              <img
                src={item.src}
                alt={item.alt}
                className={
                  item.wide
                    ? "aspect-video w-full object-cover"
                    : "aspect-4/5 w-full object-cover"
                }
                width={1200}
                height={900}
              />
              <span className="mt-2 block text-sm text-muted">{item.caption}</span>
            </button>
          </li>
        ))}
      </ul>
      <Dialog.Root open={shot !== null} onOpenChange={(open) => !open && setActive(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/80" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[min(100%,920px)] -translate-x-1/2 -translate-y-1/2 bg-cream p-3 outline-none">
            {shot ? (
              <>
                <Dialog.Title className="sr-only">{shot.caption}</Dialog.Title>
                <img src={shot.src} alt={shot.alt} className="max-h-[80vh] w-full object-contain" />
                <div className="mt-3 flex items-center justify-between gap-4">
                  <p className="text-sm">{shot.caption}</p>
                  <Dialog.Close className="border border-ink px-3 py-2 text-sm">Close</Dialog.Close>
                </div>
              </>
            ) : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </SiteShell>
  );
}
