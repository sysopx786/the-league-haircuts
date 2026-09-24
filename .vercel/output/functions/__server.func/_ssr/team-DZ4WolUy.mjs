import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { m as team, p as site } from "./router-B_9QdTjw.mjs";
import { i as SiteShell, r as PageIntro, t as BookLink } from "./shell-BHRshLuv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team-DZ4WolUy.js
var import_jsx_runtime = require_jsx_runtime();
function TeamPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Exton",
			title: "The team",
			lede: "Biographies are from the shop’s own site. Star ratings, where shown, are the counts published on Vagaro."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mx-auto max-w-6xl px-5 py-12",
			children: team.map((person, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid items-start gap-8 border-b border-line py-12 lg:grid-cols-[280px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: person.photo,
					alt: person.alt,
					className: "aspect-[4/5] w-full object-cover",
					width: 720,
					height: 900
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tracking-widest text-gold uppercase",
						children: ["0", index + 1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl",
						children: person.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-muted",
						children: [
							person.role,
							" · ",
							person.years,
							person.reviews > 0 ? ` · ${person.rating} from ${person.reviews} Vagaro reviews` : " · No Vagaro reviews yet"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-ink-soft",
						children: person.focus
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl",
						children: person.bio
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BookLink, {
							className: "bg-ink px-4 py-3 text-sm text-inverse",
							children: ["Book with ", person.name]
						}), person.instagram ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: person.instagram,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "border border-ink px-4 py-3 text-sm",
							children: "Instagram"
						}) : null]
					})
				] })]
			}, person.name))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mx-auto max-w-6xl px-5 pb-16 text-sm text-muted",
			children: [
				"Booking opens the shop’s Vagaro calendar. A direct link to each stylist’s personal book was not published, so every button uses the same booking page:",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "underline",
					href: site.bookUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					children: "vagaro.com/theleaguehaircuts"
				}),
				"."
			]
		})
	] });
}
//#endregion
export { TeamPage as component };
