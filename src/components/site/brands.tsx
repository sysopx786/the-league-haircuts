import { Star } from "lucide-react";
import { useId } from "react";
import { mapsUrl } from "@/lib/site";

export function GoogleGlyph({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59a11.9 11.9 0 0 1 0-9.18l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

export function GoogleWord({ className = "text-base" }: { className?: string }) {
  return (
    <span className={`font-medium tracking-tight ${className}`} aria-label="Google">
      <span className="text-g-blue">G</span>
      <span className="text-g-red">o</span>
      <span className="text-g-yellow">o</span>
      <span className="text-g-blue">g</span>
      <span className="text-g-green">l</span>
      <span className="text-g-red">e</span>
    </span>
  );
}

export function InstagramGlyph({ className = "size-5" }: { className?: string }) {
  const id = useId();
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#fccc63" />
          <stop offset="0.3" stopColor="#f77737" />
          <stop offset="0.65" stopColor="#e1306c" />
          <stop offset="1" stopColor="#833ab4" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" fill={`url(#${id})`} />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="#fff" />
    </svg>
  );
}

export function InstagramWord({ className = "" }: { className?: string }) {
  return <span className={`ig-word font-medium ${className}`}>Instagram</span>;
}

export function FacebookGlyph({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#0866FF" />
      <path
        fill="#fff"
        d="M13.4 18.5v-6.1h2l.3-2.3h-2.3V8.6c0-.7.2-1.1 1.2-1.1h1.2V5.4c-.2 0-.9-.1-1.8-.1-1.8 0-3 1.1-3 3.1v1.7H9.2v2.3h1.8v6.1h2.4z"
      />
    </svg>
  );
}

export function FacebookWord({ className = "" }: { className?: string }) {
  return <span className={`font-medium text-fb ${className}`}>Facebook</span>;
}

export function VagaroWord({ className = "text-base" }: { className?: string }) {
  return <span className={`font-medium tracking-tight text-v-red ${className}`}>Vagaro</span>;
}

export function VagaroLogo({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 90.093 27.359" role="img" aria-label="Vagaro">
      <path fill="#cc4744" transform="translate(0.002 -64.184)" d="M4.839,84.1.124,72.355c-.331-.8,0-1.355.882-1.355H2.33a1.285,1.285,0,0,1,1.351.965l3.36,9.156,3.36-9.156A1.3,1.3,0,0,1,11.734,71h1.351c.854,0,1.214.551.882,1.351L9.252,84.1a1.359,1.359,0,0,1-1.382.914H6.218A1.379,1.379,0,0,1,4.839,84.1Z" />
      <path fill="#cc4744" transform="translate(-139.703 -61.363)" d="M154.54,75.188c0-4.081,2.784-7.308,6.84-7.308a5.5,5.5,0,0,1,4.744,2.4v-.911a1.067,1.067,0,0,1,1.158-1.186h1.214a1.088,1.088,0,0,1,1.186,1.186V81.035a1.067,1.067,0,0,1-1.186,1.158h-1.214a1.046,1.046,0,0,1-1.158-1.158V80.1a5.5,5.5,0,0,1-4.744,2.4C157.325,82.5,154.54,79.269,154.54,75.188Zm11.638,0a4.082,4.082,0,0,0-4.109-4.358c-2.51,0-3.971,1.985-3.971,4.358,0,2.4,1.461,4.358,3.971,4.358A4.082,4.082,0,0,0,166.178,75.188Z" />
      <path fill="#cc4744" transform="translate(-298.851 -61.824)" d="M332.714,87.83a1.089,1.089,0,0,1-.414-1.6l.276-.5a1,1,0,0,1,1.572-.414,7.309,7.309,0,0,0,3.723.993c2.537,0,4.3-1.407,4.3-4.274V80.606a5.517,5.517,0,0,1-4.771,2.4c-4.053,0-6.812-3.282-6.812-7.308,0-4,2.757-7.308,6.812-7.308a5.469,5.469,0,0,1,4.744,2.4v-1a1.019,1.019,0,0,1,1.158-1.1h1.186a1.067,1.067,0,0,1,1.158,1.186V82.068c0,5.047-3.53,7.115-7.585,7.115A10.238,10.238,0,0,1,332.714,87.83ZM342.2,75.7a4.1,4.1,0,0,0-4.109-4.385c-2.51,0-3.971,2.016-3.971,4.385,0,2.4,1.461,4.385,3.971,4.385A4.1,4.1,0,0,0,342.2,75.7Z" />
      <path fill="#cc4744" transform="translate(-456.986 -61.815)" d="M505.52,75.688c0-4.081,2.784-7.308,6.839-7.308a5.5,5.5,0,0,1,4.744,2.4v-.911a1.067,1.067,0,0,1,1.158-1.186h1.214a1.088,1.088,0,0,1,1.186,1.186V81.534a1.067,1.067,0,0,1-1.186,1.158h-1.214a1.046,1.046,0,0,1-1.158-1.158V80.6a5.5,5.5,0,0,1-4.744,2.4C508.305,83,505.52,79.768,505.52,75.688Zm11.638,0a4.082,4.082,0,0,0-4.109-4.358c-2.51,0-3.971,1.985-3.971,4.358,0,2.4,1.461,4.358,3.971,4.358A4.083,4.083,0,0,0,517.158,75.688Z" />
      <path fill="#cc4744" transform="translate(-629.92 -61.815)" d="M696.82,81.534V69.869a1.067,1.067,0,0,1,1.158-1.186h1.158a1.067,1.067,0,0,1,1.158,1.186V71.8a3.9,3.9,0,0,1,3.7-3.42,4.134,4.134,0,0,1,.551.055c.607.055.717.551.717,1.1v1.379c0,.717-.331,1.021-.854.938a3.367,3.367,0,0,0-.717-.083c-1.324,0-3.309.8-3.309,5.376v4.385a1.067,1.067,0,0,1-1.186,1.158h-1.213A1.045,1.045,0,0,1,696.82,81.534Z" />
      <path fill="#cc4744" transform="translate(-705.738 -61.815)" d="M780.69,75.688A7.575,7.575,0,1,1,788.247,83,7.378,7.378,0,0,1,780.69,75.688Zm11.693.028a4.14,4.14,0,1,0-4.137,4.3,4.22,4.22,0,0,0,4.137-4.3Z" />
    </svg>
  );
}

export function BrandStars({
  rating,
  tone,
}: {
  rating: number;
  tone: "google" | "vagaro";
}) {
  const fill = tone === "google" ? "text-g-yellow" : "text-v-star";
  return (
    <span className="inline-flex" role="img" aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((index) => {
        const amount = Math.min(1, Math.max(0, rating - index));
        return (
          <span key={index} className="relative size-4">
            <Star className="size-4 text-g-empty" fill="currentColor" strokeWidth={0} aria-hidden />
            <span className={`absolute inset-y-0 left-0 overflow-hidden ${fill}`} style={{ width: `${amount * 100}%` }}>
              <Star className="size-4" fill="currentColor" strokeWidth={0} aria-hidden />
            </span>
          </span>
        );
      })}
    </span>
  );
}

export function MapsButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-g-paper px-3 py-2 text-sm font-medium text-g-ink ${className}`}
    >
      <svg className="size-5" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#EA4335"
          d="M12 1.8C7.6 1.8 4 5.3 4 9.6c0 5.6 7 12.6 8 12.6s8-7 8-12.6c0-4.3-3.6-7.8-8-7.8z"
        />
        <circle cx="12" cy="9.4" r="2.7" fill="#ffffff" />
      </svg>
      <span>
        <span className="text-g-blue">G</span>
        <span className="text-g-red">o</span>
        <span className="text-g-yellow">o</span>
        <span className="text-g-blue">g</span>
        <span className="text-g-green">l</span>
        <span className="text-g-red">e</span> Maps
      </span>
    </a>
  );
}
export function SourceLine({
  source,
  name,
  date,
  staff,
}: {
  source: "google" | "vagaro";
  name: string;
  date: string;
  staff: string;
}) {
  return (
    <p className={`mt-4 flex flex-wrap items-center gap-2 text-sm ${source === "google" ? "text-g-ink" : "text-v-ink"}`}>
      {source === "google" ? <GoogleGlyph /> : null}
      <span>{name}</span>
      <span aria-hidden="true">·</span>
      <span>{date}</span>
      <span aria-hidden="true">·</span>
      <span>{staff}</span>
      <span aria-hidden="true">·</span>
      {source === "google" ? <GoogleWord className="text-sm" /> : <VagaroWord className="text-sm" />}
    </p>
  );
}
