import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as reviews, p as site } from "./router-B_9QdTjw.mjs";
import { i as SiteShell, r as PageIntro, t as BookLink } from "./shell-BHRshLuv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reviews-K5Gz2xIL.js
var import_jsx_runtime = require_jsx_runtime();
function ReviewsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Vagaro",
		title: `${site.vagaroRating} from ${site.vagaroReviewCount} reviews`,
		lede: "These are quotes from the public Vagaro profile, not Google. Individual star counts were not printed in the review text, so they are not added here. The Google share link supplied for this project did not open a review list."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-5 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-10",
			children: reviews.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border-t border-line pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "font-display text-2xl leading-snug",
					children: [
						"“",
						review.quote,
						"”"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm text-muted",
					children: [
						review.name,
						" · ",
						review.date,
						" · about ",
						review.staff,
						" · Vagaro review"
					]
				})]
			}, `${review.name}-${review.date}-${review.quote.slice(0, 12)}`))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 flex flex-wrap gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: site.vagaroUrl,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "border border-ink px-4 py-3 text-sm",
				children: "Read more on Vagaro"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookLink, {
				className: "bg-ink px-4 py-3 text-sm text-inverse",
				children: "Book Appointment"
			})]
		})]
	})] });
}
//#endregion
export { ReviewsPage as component };
