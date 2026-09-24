import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as directionsUrl, l as hours, n as addressLine, o as faqs, p as site, r as amenities } from "./router-B_9QdTjw.mjs";
import { i as SiteShell, r as PageIntro, t as BookLink } from "./shell-BHRshLuv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-O8icTF1t.js
var import_jsx_runtime = require_jsx_runtime();
var mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=-75.642%2C40.028%2C-75.624%2C40.040&layer=mapnik&marker=${site.geo.lat}%2C${site.geo.lng}`;
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Exton, Pennsylvania",
			title: "Find the shop",
			lede: addressLine
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Hours"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-line border-y border-line",
					children: hours.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.day }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.hours })]
					}, row.day))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-lg underline decoration-gold underline-offset-4",
						href: `tel:${site.phoneTel}`,
						children: site.phoneDisplay
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "underline decoration-gold underline-offset-4",
						href: `mailto:${site.email}`,
						children: site.email
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: directionsUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "bg-ink px-4 py-3 text-sm text-inverse",
						children: "Get Directions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookLink, {
						className: "border border-ink px-4 py-3 text-sm",
						children: "Book Appointment"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-10 font-display text-3xl",
					children: "At the shop"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 flex flex-wrap gap-2",
					children: amenities.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border border-line bg-cream px-3 py-2 text-sm",
						children: item
					}, item))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				title: "Map of The League Haircuts at 260 North Pottstown Pike, Exton, Pennsylvania",
				src: mapSrc,
				className: "h-96 w-full border border-line",
				loading: "lazy"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-5 py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl",
						children: "Questions we can answer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-8 space-y-8",
						children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-display text-2xl",
							children: item.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 text-muted",
							children: item.a
						})] }, item.q))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 text-sm text-muted",
						children: "Late-arrival rules and the exact cancellation fee are not published. Ask the shop before you book if those details change your plans."
					})
				]
			})
		})
	] });
}
//#endregion
export { ContactPage as component };
